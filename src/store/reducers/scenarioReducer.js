// Import Action Types
import {
    CREATE_SCENARIO,
    CURRENT_SCENARIO
} from '../actions/types';
/*
,
    DUPLICATE_SCENARIO,
    DELETE_SCENARIO,
    SAVE_SCENARIO,
    RUN_MODEL,
    LOCK_SCENARIO,
    LOADING_SCENARIO
**/
const initialState = {
    scenarios: {
        0: {
            name: 'Visual-Style-Test',
            locked: true,
            loading: true,
            "hubs": {},
            "lanes": {}
        }
    },
    current: undefined
};

//switch action type and exports
export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SCENARIO:
            let newScenarios = {...state.scenarios};
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
        default:
            return state;
    }
}