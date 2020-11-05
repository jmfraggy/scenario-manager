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
  //request for the scenario params
  dispatch({
    type: GET_CARDS,
    payload: {
      params: {},
      baseline: {
        hubs: { ...baseline.hubs },
        lanes: { ...baseline.lanes }
      }
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

export const resetAllValues = () => (dispatch, getState) => {
  const { baseline } = getState().baselineReducer;
  dispatch({
    type: RESET_ALL_VALUES,
    payload: {
      baseline: {
        hubs: { ...baseline.hubs },
        lanes: { ...baseline.lanes }
      }
    }
  });
};