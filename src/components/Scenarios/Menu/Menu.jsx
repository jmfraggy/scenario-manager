import React, { Fragment, useEffect } from 'react';
import MenuCard from './MenuCard';

// Redux
import { getScenarios, toggleModalOpen } from '../../../store/actions/scenarioActions';
import { getBaseline } from '../../../store/actions/baselineActions';
import { connect } from 'react-redux';

// Remember that Functions are now props
const Menu = ({ scenarios, current, getBaseline, baseline, getScenarios, toggleModalOpen }) => {

  useEffect(() => {
    getScenarios();
    if (baseline === undefined) {
      getBaseline();
    }
    // eslint-disable-next-line
  }, []);

  const handleOpen = () => {
    toggleModalOpen();
  }

  return (
    <Fragment>
      <div className="card-menu">
        <p>Scenarios</p>
        <div className="scenarios h-100p">
          {Object.keys(scenarios).map((id) =>
            <MenuCard
              key={id}
              id={id}
              title={scenarios[id].name}
              loading={scenarios[id].loading}
              locked={scenarios[id].locked} />
          )}
        </div>
        <button className="menu-btn" onClick={handleOpen}>
          <i className="fas fa-plus"></i>
          <span className="tooltiptext-top">Create Scenario</span>
        </button>
      </div>
    </Fragment>

  );
};

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = state => ({
  scenarios: state.scenarioReducer.scenarios,
  current: state.scenarioReducer.current,
  baseline: state.baselineReducer.baseline
});

export default connect(mapStateToProps, { getBaseline, getScenarios, toggleModalOpen })(Menu);
