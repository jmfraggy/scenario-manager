// Import Action Types
import {
  CREATE_SCENARIO,
  CURRENT_SCENARIO,
  SAVE_SCENARIO
} from '../actions/types';

/* 
,
  DUPLICATE_SCENARIO,
  DELETE_SCENARIO,
  RUN_MODEL,
  LOCK_SCENARIO,
  LOADING_SCENARIO
**/

//export functions and dispatchers (backend integration)
export const createScenario = () => {
  return {
    type: CREATE_SCENARIO,
    payload: {
      3: {
        name: 'Nov/3/2020-v3',
        locked: false,
        loading: false
      }
    }
  };
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

  dispatch({
    type: SAVE_SCENARIO,
    payload: {}
  })
};