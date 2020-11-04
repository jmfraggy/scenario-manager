import { combineReducers } from 'redux';
// Import all Reducers
import sideBarReducer from './sideBarReducer';
import cardsReducer from './cardsReducer';
import filtersReducer from './filtersReducer';
import scenarioReducer from './scenarioReducer';

export default combineReducers({
    sideBar: sideBarReducer,
    cardsReducer: cardsReducer,
    filtersReducer: filtersReducer,
    scenarioReducer: scenarioReducer
});