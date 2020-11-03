import React from 'react';
// Redux
import { setValueChanged, resetValue } from '../../../store/actions/cardsActions';
import { connect } from 'react-redux';
//Components
import CardInput from './CardInput'
//Utils
import { uniqueId } from 'lodash-es';

const LABELS_DICTIONARY = {
  hubIlodAvg: 'ILOD AVG',
  hubBumpshift: 'BUMPSHIFT',
  hubStackingPenalty: 'STACKING PENALTY',
  hubForecastBufferIB: 'FCST BUFFER IB',
  hubForecastBufferOB: 'FCST BUFFER OB',
  hubCapacityConstrained: 'CAP CONSTRAINED',
  hubTierBonus: 'TIER BONUS',
  AVG_TRANSIT: 'AVG TRANSIT',
  PRICE: 'PRICE',
  ACTIVE: 'ACTIVE',
  laneTransitOverride: 'TRANSIT OVERRIDE',
  WEEKLY_CAP: 'WEEKLY CAP'
}

const CardItem = ({ title, hub, lanes, setValueChanged, resetValue }) => {
  const cardKey = uniqueId();

  const handleChange = event => {
    setValueChanged({
      "valueChanged": event.target.value,
      "name": event.target.dataset.name,
      "dt": event.target.dataset.dt,
      "cardName": event.target.dataset.parent
    });
  }

  const handleReset = event => {
    resetValue({
      "name": event.target.dataset.name,
      "dt": event.target.dataset.dt,
      "cardName": event.target.dataset.parent
    });
  }

  const displayHubCapacityInputs = (hub) => (
    hub.filter(({ name }) => name === 'hubCapacity')
      .map(({ HUB, name, dt, value, valueChanged }) =>
        <CardInput
          key={uniqueId()}
          label={dt}
          value={Number(valueChanged ? valueChanged : value).toFixed(2)}
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
    hub.filter(({ name }) => name !== 'hubCapacity')
      .map(({ HUB, name, value, valueChanged }) =>
        <CardInput
          key={uniqueId()}
          label={LABELS_DICTIONARY[name]}
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
            <input type="checkbox" name="collapse" id={laneKey} />
            <h2 className="handle">
              <label className="card-title" htmlFor={laneKey}>{laneName}</label>
            </h2>
            <div className="accordion-content">
              <div className="card-dates-grid">
                {lane.map(({ name, value, valueChanged }) =>
                  <CardInput
                    key={uniqueId()}
                    label={LABELS_DICTIONARY[name]}
                    value={valueChanged ? valueChanged : value}
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

  return (
    <div className="card accordion">
      <input type="checkbox" name="collapse" id={cardKey} defaultChecked />
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

export default connect(null, { setValueChanged, resetValue })(CardItem);
