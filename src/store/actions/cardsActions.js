//import axios from 'axios';
//import actionTypes
import {
  GET_CARDS,
  SET_VALUE_CHANGED,
  RESET_VALUE,
  TOGGLE_COLLAPSED,
  RESET_ALL_VALUES
} from './types';

const lsparms_response = {
  0: {},
  1: {},
  2: {
    "STATUS": "SUCCESS",
    "result": {
      "parameters": [
        {
          "name": "hubCapacity",
          "value": 11,
          "hub": "ATLANTA",
          "dt": "2020-10-16"
        },
        {
          "name": "hubStackingPenalty",
          "value": 900,
          "hub": "ATLANTA"
        },
        {
          "name": "AVG_TRANSIT",
          "value": "200",
          "ohub": "ATLANTA",
          "dhub": "MEMPHIS"
        },
        {
          "name": "AVG_TRANSIT",
          "value": "200",
          "ohub": "ATLANTA",
          "dhub": "SAN BERN"
        },
        {
          "name": "AVG_TRANSIT",
          "value": "200",
          "ohub": "ATLANTA",
          "dhub": "STOCKTON"
        }
      ],
      "scenario": [
        {
          "commitFlag": "N",
          "locked": "true",
          "scenarioDatetime": "2020-10-28 14:39:03",
          "scenarioName": "Testing 10/22",
          "user": "TEST"
        }
      ]
    }
  }
}

export const getCards = (scenarioId) => (dispatch, getState) => {
  const { baseline } = getState().baselineReducer;

  // eslint-disable-next-line
  const bodyRequest = { action: "lsparm", id: scenarioId };
  //request for the scenario params
  const lsparmResponse = lsparms_response[scenarioId];

  let parms = [];
  if (lsparmResponse && lsparmResponse.STATUS === 'SUCCESS') {
    parms = [...lsparmResponse.result.parameters];
  }

  dispatch({
    type: GET_CARDS,
    payload: {
      parms: [...parms],
      baseline: {
        hubs: { ...baseline.hubs },
        lanes: { ...baseline.lanes }
      }
    }
  });
};

export const setValueChanged = (value) => {
  return {
    type: SET_VALUE_CHANGED,
    payload: value
  }
};

export const resetValue = (value) => {
  return {
    type: RESET_VALUE,
    payload: value
  }
};

export const toggleCollapsed = (value) => {
  return {
    type: TOGGLE_COLLAPSED,
    payload: value
  }
};

export const resetAllValues = () => (dispatch, getState) => {
  const { baseline } = getState().baselineReducer;
  dispatch({
    type: RESET_ALL_VALUES,
    payload: {
      baseline: {
        hubs: { ...baseline.hubs },
        lanes: { ...baseline.lanes }
      }
    }
  });
};