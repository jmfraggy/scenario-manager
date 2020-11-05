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

export const saveScenario = () => (dispatch, getState) => {
  const { cards } = getState().cardsReducer;



  //create body request based on cards
  const bodyRequest = {
    "action": "rebase",
    "id": undefined,
    "val": [

    ]
  }

  console.log(cards);
  console.log(bodyRequest);

  dispatch({
    type: SAVE_SCENARIO,
    payload: {}
  })
};