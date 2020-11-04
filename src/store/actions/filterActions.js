// Action Types
import {
    SET_FILTERS,
    SET_VIEW_TYPE,
    SET_SORTING
  } from './types';
  
// export functions and dispatchers (backend integration)

// View Type
export const setViewType = (type) => {
    return {
      type: SET_VIEW_TYPE,
      payload: type
    }
};

// Set Filters
export const setFilters = (filters) => {
    return {
      type: SET_FILTERS,
      payload: filters
    }
};

// Set Sorting
export const setSorting = (sort) => {
    return {
      type: SET_SORTING,
      payload: sort
    }
};


