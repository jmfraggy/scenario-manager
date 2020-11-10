// Import Action Types
import {
  CREATE_SCENARIO,
  CURRENT_SCENARIO,
  SAVE_SCENARIO,
  GET_SCENARIOS,
  TOGGLE_MODAL_OPEN
} from '../actions/types';

/* 
,
  DUPLICATE_SCENARIO,
  DELETE_SCENARIO,
  RUN_MODEL,
  LOCK_SCENARIO,
  LOADING_SCENARIO
**/

const ls_response = {
  "STATUS": "SUCCESS",
  "result": [
    {
      "commitFlag": "N",
      "id": 749,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:31:36",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 747,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:28:58",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 744,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:25:48",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 743,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:25:47",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 742,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:24:47",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 741,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:24:47",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 737,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:12:48",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 736,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:12:47",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 734,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:11:10",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 733,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:11:09",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 732,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:08:55",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 731,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:08:54",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 728,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:07:56",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 729,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:07:56",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 726,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:06:41",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 727,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:06:41",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 720,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:06:00",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    },
    {
      "commitFlag": "N",
      "id": 719,
      "locked": "false",
      "scenarioDatetime": "2020-11-06 09:05:59",
      "scenarioName": "Test Case Scenario",
      "user": "TEST_USER"
    }
  ]
}

export const getScenarios = () => {

  // eslint-disable-next-line
  const lsBodyRequest = { action: "ls" }
  const lsResponse = { ...ls_response };

  let scenarios = {};
  if (lsResponse && lsResponse.STATUS === 'SUCCESS') {
    scenarios = lsResponse.result.reduce((newObj, scenario) => {
      newObj[scenario.id] = {
        commitFlag: scenario.commitFlag,
        name: scenario.scenarioName,
        datetime: scenario.scenarioDatetime,
        user: scenario.user,
        locked: scenario.locked === 'true',
        loading: false

      };
      return newObj;
    }, {})
  }

  return {
    type: GET_SCENARIOS,
    payload: { ...scenarios },
  }
}

export const createScenario = (scenarioName) => (dispatch) => {
  dispatch({
    type: TOGGLE_MODAL_OPEN,
    payload: false
  })
  // eslint-disable-next-line
  const bodyCreate = {
    user: "TEST",
    action: "create",
    name: scenarioName
  }

  const createResponse = {
    "STATUS": "SUCCESS",
    "result": "1"
  }

  let scenarioId;
  if (createResponse && createResponse.STATUS === 'SUCCESS') {
    scenarioId = createResponse.result;
  }

  dispatch({
    type: CREATE_SCENARIO,
    payload: {
      [scenarioId]: {
        name: scenarioName,
        locked: false,
        loading: false
      }
    }
  })
};

export const setCurrentScenario = (card) => {
  return {
    type: CURRENT_SCENARIO,
    payload: card
  };
};

export const saveScenario = (scenarioId) => (dispatch, getState) => {
  const { cards } = getState().cardsReducer;

  const updates = [];

  Object.values(cards).forEach(type => {
    Object.values(type).forEach(item => {
      item.filter(parm => parm.valueChanged !== undefined)
        .forEach(parm => {
          let baseReturn = { "name": parm.name, "value": parm.valueChanged }
          if (parm.HUB === undefined) {
            baseReturn = { ...baseReturn, "ohub": parm.OHUB, "dhub": parm.DHUB };
          } else {
            baseReturn = { ...baseReturn, "hub": parm.HUB };
            if (parm.name === 'hubCapacity') {
              baseReturn = { ...baseReturn, "dt": parm.dt };
            }
          }
          updates.push(baseReturn);
        })
    })
  })

  // eslint-disable-next-line
  const bodyRequest = {
    action: "rebase",
    id: scenarioId,
    val: [...updates]
  }
  console.log(bodyRequest);

  dispatch({
    type: SAVE_SCENARIO,
    payload: {}
  })
};

export const toggleModalOpen = () => (dispatch, getState) => {
  const { modalOpen } = getState().scenarioReducer;
  dispatch({
    type: TOGGLE_MODAL_OPEN,
    payload: !modalOpen
  })
}