// Import action types
import {
    CURRENT_PAGE
} from '../actions/types';

// Declare Initial State
const initialState = {
    page: undefined
};

// State is unmutable, do logic here
export default (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_PAGE: 
            return {
                ...state,
                page: action.payload
            };
        default:
            return state;
    }
}
