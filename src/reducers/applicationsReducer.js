import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function applicationsReducer(state = initialState.applications, action) {

  switch (action.type) {
    case types.LOAD_APPLICATIONS_SUCCESS:
      return objectAssign({}, state, {applications: action.applications, count: action.count, pagination: action.pagination});

    default:
      return state;
  }
}
