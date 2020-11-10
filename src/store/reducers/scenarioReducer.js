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
const initialState = {
  scenarios: {},
  current: undefined,
  modalOpen: false
};

//switch action type and exports
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SCENARIOS:
      return {
        ...state,
        scenarios: action.payload
      }
    case CREATE_SCENARIO:
      let newScenarios = { ...state.scenarios };
      newScenarios = Object.assign(newScenarios, action.payload);
      return {
        ...state,
        scenarios: newScenarios
      };
    case CURRENT_SCENARIO:
      return {
        ...state,
        current: action.payload
      }
    case SAVE_SCENARIO:
      return {
        ...state
      }
    case TOGGLE_MODAL_OPEN:
      return {
        ...state,
        modalOpen: action.payload
      }
    default:
      return state;
  }
}