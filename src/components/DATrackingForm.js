import React from 'react';
import PropTypes from 'prop-types';
import ApplicationList from './ApplicationList';


const DATrackingForm = ( {applications, count, pagination} ) => {
  return (
    <div>
      <h2>Applications</h2>
      <hr/>
         <ApplicationList applications={applications}/>
      <hr/>
    </div>
  );
};

DATrackingForm.propTypes = {
  applications: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  pagination: PropTypes.object.isRequired
};

export default DATrackingForm;
