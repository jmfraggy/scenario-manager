import { combineReducers } from 'redux';
// Import all Reducers
import sideBarReducer from './sideBarReducer';
import cardsReducer from './cardsReducer';

export default combineReducers({
    sideBar: sideBarReducer,
    cardsReducer: cardsReducer
});