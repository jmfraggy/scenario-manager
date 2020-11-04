import { combineReducers } from 'redux';
// Import all Reducers
import sideBarReducer from './sideBarReducer';
import cardsReducer from './cardsReducer';
import filtersReducer from './filtersReducer';
import scenarioReducer from './scenarioReducer';
import baselineReducer from './baselineReducer';

export default combineReducers({
  sideBar: sideBarReducer,
  cardsReducer: cardsReducer,
  filtersReducer: filtersReducer,
  scenarioReducer: scenarioReducer,
  baselineReducer: baselineReducer
});