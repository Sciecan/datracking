import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import applications from './applicationsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  applications,
  routing: routerReducer
});

export default rootReducer;
