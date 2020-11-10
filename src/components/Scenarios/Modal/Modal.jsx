import React, { useState } from 'react';
// Redux
import { createScenario } from '../../../store/actions/scenarioActions';
import { connect } from 'react-redux';

const SCENARIO_NAME_MAX_LENGTH = 30;

const Modal = ({ handleClose, show, createScenario }) => {

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  const [scenarioName, setScenarioName] = useState('');
  const [createDisabled, setCreateDisabled] = useState(true);

  const handleChange = (event) => {
    if (event.target.value !== '' && event.target.value.length < SCENARIO_NAME_MAX_LENGTH) {
      setCreateDisabled(false);
      setScenarioName(event.target.value);
    }
  }

  const handleAction = () => {
    createScenario(scenarioName);
  }

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <div className="modal-action-inputs">
          <label>Enter scenario name:</label>
          <input
            type="text"
            name="scenarioName"
            minLength="1"
            maxLength={SCENARIO_NAME_MAX_LENGTH}
            onChange={handleChange}
          />
        </div>
        <div className="action-btn modal-action-btn">
          <button onClick={handleClose}>
            <span>Cancel</span>
          </button>
          <button className="bg-orange" onClick={handleAction} disabled={createDisabled}>
            <span>Create</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default connect(null, { createScenario })(Modal);