import React, { Fragment } from 'react';

// Redux
import { saveScenario } from '../../store/actions/scenarioActions';
import { resetAllValues } from '../../store/actions/cardsActions';
import { connect } from 'react-redux';

const ActionBar = ({ current, scenarios, resetAllValues, saveScenario }) => {
  let actions;
  let runModel;
  let save;
  let resetAll;

  const handleResetAll = () => {
    resetAllValues();
  };

  const handleSave = () => {
    saveScenario(current);
  }

  if (current !== undefined) {
    if (
      scenarios[current].locked === false &&
      scenarios[current].loading === false
    ) {
      runModel = <button className="bg-orange">Run Model</button>;
      save = <button onClick={handleSave} >Save</button >;
      resetAll = (
        <div className="tooltip-b">
          <button className="btn-logo" onClick={handleResetAll}>
            <i className="fas fa-history"></i>
          </button>
          <span className="tooltiptext-b">Reset All</span>
        </div>
      );
    }
    actions = (
      <Fragment>
        <div className="action-btn">
          {runModel}
          {save}
          <div className="tooltip-b">
            <button className="btn-logo">
              <i className="fas fa-trash-alt"></i>
            </button>
            <span className="tooltiptext-b">Delete</span>
          </div>
          {resetAll}
          <div className="tooltip-b">
            <button className="btn-logo bg-blue">
              <i className="fas fa-clone"></i>
            </button>
            <span className="tooltiptext-b">Duplicate</span>
          </div>
        </div>
        <div className="action-title">
          <pre className="str-title">Scenario: </pre>
          <pre>{scenarios[current].name}</pre>
        </div>
      </Fragment>
    );
  }
  return <div className="actionbar">{actions}</div>;
};

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = (state) => ({
  scenarios: state.scenarioReducer.scenarios,
  current: state.scenarioReducer.current,
  cards: state.cardsReducer.cards,
});

export default connect(mapStateToProps, { resetAllValues, saveScenario })(ActionBar);
