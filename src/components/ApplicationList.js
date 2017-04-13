import React, { PropTypes } from 'react';
import ApplicationListRow from './ApplicationListRow';

const ApplicationList = ({ applications }) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
        {applications.map(application => {
          console.log(application.application);
          const { info } = application.application;
          console.log(info);
          return (<ApplicationListRow key={info.dat_id} application={application.application}/>)
        })}
      </tbody>
      </table>
  );
}

ApplicationList.propTypes = {
  applications: PropTypes.array.isRequired
};

export default ApplicationList;
