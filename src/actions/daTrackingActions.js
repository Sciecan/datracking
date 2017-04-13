import * as types from '../constants/actionTypes';
import applicationsApi from '../api/applicationsApi';

export function loadApplications() {
  return function(dispath) {
    return applicationsApi.getAllApplications().then(applications => {
      dispath(loadApplicationsSuccess(applications.response, applications.count, applications.pagination ));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadApplicationsSuccess(applications, count, pagination) {
  return { type: types.LOAD_APPLICATIONS_SUCCESS, applications, count, pagination };
}
