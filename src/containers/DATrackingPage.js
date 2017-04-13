import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/daTrackingActions';
import DATrackingForm from '../components/DATrackingForm';

class DATrackingPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { applications, count, pagination } = this.props;

    return (
        <DATrackingForm
          applications={applications}
          count={count}
          pagination={pagination}
        />
    );
  }
}

DATrackingPage.propTypes = {
  actions: PropTypes.object.isRequired,
  applications: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  pagination: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { applications, count, pagination } = state.applications;

  return {
    actions: {},
    applications: applications,
    count: count,
    pagination: pagination,
    stateProp: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DATrackingPage);
