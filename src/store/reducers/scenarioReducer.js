// Import Action Types
import {
    GET_SCENARIO,
    CURRENT_SCENARIO,
    DUPLICATE_SCENARIO,
    DELETE_SCENARIO,
    SAVE_SCENARIO,
    RUN_MODEL,
    LOCK_SCENARIO,
    LOADING_SCENARIO
} from '../actions/types';

const initialState = {
    scenarios: {
        name: {
            locked: false,
            loading: false,
            hubs: {
            },
            lanes: {
            }
        }
    },
    current: undefined
};