// Action Types
import {
    SET_FILTERS,
    SET_VIEW_TYPE,
    SET_SORTING
  } from './types';

// Declare Initial State
const initialState = {
    filters: {
        hubs: {
        }
    },
    sorted: 'alpha-asc',
    viewType: 'cards'
  };