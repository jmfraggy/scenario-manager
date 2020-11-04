import React from 'react';
import MenuCard from './MenuCard';

// Redux
import { createScenario } from '../../../store/actions/scenarioActions';
import { connect } from 'react-redux';

// Remember that Functions are now props
const Menu = ( {createScenario, scenarios, current}) => {

  const onClick = () => {
    createScenario();
  }

  return (
    <div className="card-menu">
      <p>Scenarios</p>
      <div className="scenarios">
        {Object.keys(scenarios).map((id) => 
          <MenuCard 
            key={id} 
            id={id}
            title={scenarios[id].name} 
            loading={scenarios[id].loading} 
            locked={scenarios[id].locked}/> 
        )}
      </div>
      <button className="menu-btn" onClick={ onClick }>
        <i className="fas fa-plus"></i>
        <span className="tooltiptext-top">Create Scenario</span>
      </button>
    </div>
  );
};

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = state => ({
  scenarios: state.scenarioReducer.scenarios,
  current: state.scenarioReducer.current
});

export default connect(mapStateToProps, {createScenario})(Menu);
