import React from 'react';
import PropTypes from 'prop-types';
// Redux
import {
  setValueChanged,
  resetValue,
  toggleCollapsed
} from '../../../store/actions/cardsActions';
import { connect } from 'react-redux';
//Components
import CardInput from './CardInput'
//Utils
import { uniqueId } from 'lodash-es';

const CARD_INPUTS = {
  hubCapacity: {
    label: 'HUB CAPACITY',
    isNumeric: true
  },
  hubIlodAvg: {
    label: 'ILOD AVG',
    isNumeric: true
  },
  hubBumpshift: {
    label: 'BUMPSHIFT',
    isNumeric: false
  },
  hubStackingPenalty: {
    label: 'STACKING PENALTY',
    isNumeric: true
  },
  hubForecastBufferIB: {
    label: 'FCST BUFFER IB',
    isNumeric: true
  },
  hubForecastBufferOB: {
    label: 'FCST BUFFER OB',
    isNumeric: true
  },
  hubCapacityConstrained: {
    label: 'CAP CONSTRAINED',
    isNumeric: false
  },
  hubTierBonus: {
    label: 'TIER BONUS',
    isNumeric: true
  },
  AVG_TRANSIT: {
    label: 'AVG TRANSIT',
    isNumeric: true
  },
  PRICE: {
    label: 'PRICE',
    isNumeric: true
  },
  ACTIVE: {
    label: 'ACTIVE',
    isNumeric: false
  },
  laneTransitOverride: {
    label: 'TRANSIT OVERRIDE',
    isNumeric: false
  },
  WEEKLY_CAP: {
    label: 'WEEKLY CAP',
    isNumeric: true
  }
}

const CardItem = ({ title, hub, lanes, setValueChanged, resetValue, toggleCollapsed }) => {
  const cardKey = uniqueId();

  const handleChange = event => {
    setValueChanged({
      "valueChanged": event.target.value,
      "name": event.target.dataset.name,
      "dt": event.target.dataset.dt,
      "cardName": event.target.dataset.parent
    });
  };

  const handleReset = event => {
    resetValue({
      "name": event.target.dataset.name,
      "dt": event.target.dataset.dt,
      "cardName": event.target.dataset.parent
    });
  };

  const handleToggle = event => {
    toggleCollapsed({
      "checkedValue": event.target.checked,
      "cardName": event.target.dataset.card
    })
  }

  const displayHubCapacityInputs = (hub) => (
    hub.filter(({ name }) => name === 'hubCapacity')
      .map(({ HUB, name, dt, value, valueChanged }) =>
        <CardInput
          key={uniqueId()}
          isNumeric={CARD_INPUTS[name].isNumeric}
          label={dt}
          value={Number(valueChanged ? valueChanged : value)}
          handleChange={handleChange}
          handleReset={handleReset}
          hasChanged={valueChanged ? true : false}
          parent={HUB}
          name={name}
          dt={dt}
        />
      )
  );

  const displayHubInputs = (hub) => (
    hub.filter(({ name }) => name !== 'hubCapacity' &&
      CARD_INPUTS.hasOwnProperty(name))
      .map(({ HUB, name, value, valueChanged }) =>
        <CardInput
          key={uniqueId()}
          isNumeric={CARD_INPUTS[name].isNumeric}
          label={CARD_INPUTS[name].label}
          value={valueChanged ? valueChanged : value}
          hasChanged={valueChanged ? true : false}
          handleChange={handleChange}
          handleReset={handleReset}
          parent={HUB}
          name={name}
        />
      )
  );

  const displayHubLanes = (lanes) => (
    lanes.map(([laneName, lane]) => {
      const laneKey = uniqueId();
      return (
        <div key={uniqueId()} className="grid-item">
          <div className="card accordion">
            <input
              type="checkbox"
              name="collapse"
              id={laneKey}
              data-card={laneName}
              checked={isOpen(lane)}
              onChange={handleToggle}
            />
            <h2 className="handle">
              <label className="card-title" htmlFor={laneKey}>{laneName}</label>
            </h2>
            <div className="accordion-content">
              <div className="card-dates-grid">
                {lane.filter(({ name }) => CARD_INPUTS.hasOwnProperty(name))
                  .map(({ name, value, valueChanged }) =>
                    <CardInput
                      key={uniqueId()}
                      isNumeric={CARD_INPUTS[name].isNumeric}
                      label={CARD_INPUTS[name].label}
                      value={valueChanged ? valueChanged : (value === null ? '' : value)}
                      hasChanged={valueChanged ? true : false}
                      handleChange={handleChange}
                      handleReset={handleReset}
                      parent={laneName}
                      name={name}
                    />
                  )}
              </div>
            </div>
          </div>
        </div>
      )
    })
  );

  const isOpen = (arr) => {
    const el = arr.find(arr => arr.hasOwnProperty('isOpen'));
    return el ? el.isOpen : false;
  }

  return (
    <div className="card accordion">
      <input
        type="checkbox"
        name="collapse"
        id={cardKey}
        data-card={title}
        checked={isOpen(hub)}
        onChange={handleToggle}
      />
      <h2 className="handle">
        <label className="card-title" htmlFor={cardKey}>{title}</label>
      </h2>
      <div className="accordion-content">
        <p className="card-subtitle">Hub Capacity</p>
        <div className="card-dates-grid">
          {displayHubCapacityInputs(hub)}
        </div>
        <div className="card-inputs-grid">
          {displayHubInputs(hub)}
        </div>
        <div className="card-childs-grid">
          {displayHubLanes(lanes)}
        </div>
      </div>
    </div>
  );
}

CardItem.protoTypes = {
  title: PropTypes.string.isRequired,
  hub: PropTypes.object.isRequired,
  lanes: PropTypes.object.isRequired,
  setValueChanged: PropTypes.func.isRequired,
  resetValue: PropTypes.func.isRequired,
  toggleCollapsed:  PropTypes.func.isRequired
}

export default connect(null, { setValueChanged, resetValue, toggleCollapsed })(CardItem);
