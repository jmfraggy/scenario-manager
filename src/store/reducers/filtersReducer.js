// Action Types
import {
  SET_FILTERS
} from '../actions/types';
/**
 * ,
  SET_VIEW_TYPE,
  SET_SORTING
 */
// Declare Initial State
const initialState = {
  filters: {
    hubs: {
    }
  },
  sorted: 'alpha-asc',
  viewType: 'cards'
};

//switch action type and exports
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state
      };
    default:
      return state;
  }
}