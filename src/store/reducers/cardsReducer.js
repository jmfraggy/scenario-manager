import {
  GET_CARDS,
  SET_VALUE_CHANGED,
  RESET_VALUE,
  TOGGLE_COLLAPSED,
  RESET_ALL_VALUES
} from '../actions/types';

const initialState = {
  cards: {
    hubs: {},
    lanes: {}
  }
};

const isLane = (cardName) => (
  cardName.split("-").length === 2
);

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      Object.keys(action.payload.baseline.hubs)
        .forEach(hub => {
          action.payload.baseline.hubs[hub] = [
            ...action.payload.baseline.hubs[hub],
            { "isOpen": true }
          ]
        });

      Object.keys(action.payload.baseline.lanes)
        .forEach(lane => {
          action.payload.baseline.lanes[lane] = [
            ...action.payload.baseline.lanes[lane],
            { "isOpen": false }
          ]
        });

      return {
        ...state,
        cards: action.payload.baseline
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
              ...state.cards[setValueType][action.payload.cardName].map(v => {
                if (v.name === 'hubCapacity' ?
                  v.name === action.payload.name && v.dt === action.payload.dt :
                  v.name === action.payload.name) {
                  let newValue;
                  if (typeof v.value === 'number') {
                    if (v.value !== Number(action.payload.valueChanged)) {
                      newValue = Number(action.payload.valueChanged);
                    }
                  } else {
                    if (v.value !== action.payload.valueChanged) {
                      newValue = action.payload.valueChanged;
                    }
                  }
                  return { ...v, valueChanged: newValue };
                } else {
                  return { ...v };
                }
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
                if (v.name === 'hubCapacity' ?
                  v.name === action.payload.name && v.dt === action.payload.dt :
                  v.name === action.payload.name) {
                  delete v.valueChanged;
                }
                return { ...v };
              })
            ]
          }
        }
      };
      return resetValueState;
    case TOGGLE_COLLAPSED:
      const toggleType = isLane(action.payload.cardName) ? "lanes" : "hubs";

      const toggleState = {
        ...state,
        cards: {
          ...state.cards,
          [toggleType]: {
            ...state.cards[toggleType],
            [action.payload.cardName]: [
              ...state.cards[toggleType][action.payload.cardName].map((v, i) => {
                if (v.hasOwnProperty('isOpen')) {
                  v.isOpen = action.payload.checkedValue;
                }
                return v;
              })
            ]
          }
        }
      };

      return toggleState;
    case RESET_ALL_VALUES:
      Object.keys(action.payload.baseline.hubs)
        .forEach(hub => {
          action.payload.baseline.hubs[hub] = [
            ...action.payload.baseline.hubs[hub],
            { "isOpen": true }
          ]
        });

      Object.keys(action.payload.baseline.lanes)
        .forEach(lane => {
          action.payload.baseline.lanes[lane] = [
            ...action.payload.baseline.lanes[lane],
            { "isOpen": false }
          ]
        });

      return {
        ...state,
        cards: action.payload.baseline
      };
    default:
      return state;
  }
}