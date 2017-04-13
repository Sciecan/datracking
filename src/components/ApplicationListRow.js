import React, { PropTypes } from 'react';

const ApplicationListRow = ({ application }) => {
  const {info} = application;
  return (
    <tr>
      <td>{info.dat_id}</td>
      <td>{info.description}</td>
      <td>{info.lodgement_date}</td>

    </tr>
  );
}

ApplicationListRow.propTypes = {
  application: PropTypes.object.isRequired
};

export default ApplicationListRow;
