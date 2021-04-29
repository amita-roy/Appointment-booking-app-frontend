import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from 'actions';
import Appointment from 'components/appointment/Appointment';

class Appointments extends Component {
  componentDidMount() {
    const { fetchAppointments } = this.props;
    fetchAppointments();
  }

  render() {
    const { appointments, includedServices } = this.props;
    return (
      <div>
        {appointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            includedServices={includedServices}
          />
        ))}
      </div>
    );
  }
}

Appointments.defaultProps = {
  appointments: [],
};

Appointments.propTypes = {
  appointments: PropTypes.instanceOf(Array),
  fetchAppointments: PropTypes.func.isRequired,
  includedServices: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  appointments: state.allAppointments.appointments,
  includedServices: state.allAppointments.included,
});

export default connect(mapStateToProps, Actions)(Appointments);
