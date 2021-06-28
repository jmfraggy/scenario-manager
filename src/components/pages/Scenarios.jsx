import React from 'react';
/* Redux */
import { connect } from 'react-redux';

import Menu from '../Scenarios/Menu/Menu';
import ActionBar from '../Scenarios/ActionBar';
import CardContainer from '../Scenarios/Cards/CardContainer';
import LoadingTruck from '../layout/LoadingTruck';

// eslint-disable-next-line
const Scenarios = ({ current, scenarios }) => {
  return (
    <div className="container">
      <Menu />

      <div className="container-2 wh-100p">
        {current && scenarios[current].loading ? <LoadingTruck /> : null}
        <ActionBar />
        <div className="card-holder h-100p">
          <CardContainer />
        </div>
      </div>
    </div>
  );
};

/* First param of the arr is the prop, second is the param of the index reducer */
const mapStateToProps = (state) => ({
  scenarios: state.scenarioReducer.scenarios,
  current: state.scenarioReducer.current,
});

export default connect(mapStateToProps)(Scenarios);
