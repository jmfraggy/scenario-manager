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
const initialState = {
  scenarios: {
    0: {
      name: 'Visual-Style-Test',
      locked: true,
      loading: true
    },
    1: {
      name: 'Nov/4/2020-v1',
      locked: false,
      loading: false
    },
    2: {
      name: 'Nov/4/2020-v2',
      locked: false,
      loading: false
    }
  },
  current: undefined
};

//switch action type and exports
export default (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
}