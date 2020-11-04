//import action types
import {
    GET_CARDS,
    SET_VALUE_CHANGED,
    RESET_VALUE
  } from '../actions/types';
  //declare initalState
  const initialState = {
    cards: {
      hubs: {},
      lanes: {}
    },
    order: 'asc',
    orderBy: 'HUB'
  };
  
  const isLane = (cardName) => (
    cardName.split("-").length === 2
  );
  
  const getInputIndex = (state, payload) => (
    state.cards[isLane(payload.cardName) ? "lanes" : "hubs"][payload.cardName]
      .findIndex(({ name, dt }) => name === 'hubCapacity' ?
        (name === payload.name && dt === payload.dt) :
        (name === payload.name))
  );
  
  //switch action type and exports
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_CARDS:
        return {
          ...state,
          cards: action.payload
        };
      case SET_VALUE_CHANGED:
        const setValueType = isLane(action.payload.cardName) ? "lanes" : "hubs";
  
        const setChangedState = {
          ...state,
          cards: {
            ...state.cards,
            [setValueType]: {
              ...state.cards[setValueType],
              [action.payload.cardName]: [
                ...state.cards[setValueType][action.payload.cardName].map((v, i) => {
                  if (i === getInputIndex(state, action.payload) &&
                    Number(v.value).toFixed(2) !== action.payload.valueChanged) {
                    v.valueChanged = action.payload.valueChanged;
                  }
                  return v;
                })
              ]
            }
          }
        };
  
        return setChangedState;
      case RESET_VALUE:
        const resetValueType = isLane(action.payload.cardName) ? "lanes" : "hubs";
  
        const resetValueState = {
          ...state,
          cards: {
            ...state.cards,
            [resetValueType]: {
              ...state.cards[resetValueType],
              [action.payload.cardName]: [
                ...state.cards[resetValueType][action.payload.cardName].map((v, i) => {
                  if (i === getInputIndex(state, action.payload)) {
                    delete v.valueChanged
                  }
                  return v;
                })
              ]
            }
          }
        };
  
        return resetValueState;
      default:
        return state;
    }
  }