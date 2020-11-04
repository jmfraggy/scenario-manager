//import axios from 'axios';
//import actionTypes
import {
  GET_CARDS,
  SET_VALUE_CHANGED,
  RESET_VALUE,
  TOGGLE_COLLAPSED,
  RESET_ALL_VALUES
} from './types';

export const getCards = () => (dispatch, getState) => {
  const { baseline } = getState().baselineReducer;
  //if baseline is undefined, request to the backend

  //request for the scenario params

  dispatch({
    type: GET_CARDS,
    payload: {
      params: {},
      baseline,
    }
  });
};

export const setValueChanged = (value) => {
  return {
    type: SET_VALUE_CHANGED,
    payload: value
  }
};

export const resetValue = (value) => {
  return {
    type: RESET_VALUE,
    payload: value
  }
};

export const toggleCollapsed = (value) => {
  return {
    type: TOGGLE_COLLAPSED,
    payload: value
  }
};

export const resetAllValues = () => {
  return {
    type: RESET_ALL_VALUES
  }
};