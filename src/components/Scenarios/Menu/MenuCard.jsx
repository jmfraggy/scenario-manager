import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { setCurrentScenario } from '../../../store/actions/scenarioActions';
import { connect } from 'react-redux';

const MenuCard = ({ id, title, loading, locked, setCurrentScenario, current}) => {

  const onClick = () => {
    setCurrentScenario(id);
  };

  return (
    <div className={`scenario-card ${current === id ? "current": ""}`} onClick={onClick}>
      {title}
      {locked === true ? <i className="fas fa-lock"></i> : null}
      {loading === true ? 
        <div className="loader">
          <div className="loaderBar"></div>
        </div> : null
      }
    </div>
  );
};

MenuCard.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  locked: PropTypes.bool.isRequired
};

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = state => ({
  scenarios: state.scenarioReducer.scenarios,
  current: state.scenarioReducer.current
});

export default connect(mapStateToProps, { setCurrentScenario })(MenuCard);
