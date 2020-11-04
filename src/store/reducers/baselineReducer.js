import { GET_BASELINE } from '../actions/types';

const initialState = {
  baseline: {
    hubs: {},
    lanes: {}
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BASELINE:
      return {
        ...state,
        baseline: action.payload
      }
    default:
      return state;
  }
}