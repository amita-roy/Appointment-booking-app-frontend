import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from 'actions';

class Appointments extends Component {
  componentDidMount() {
    const { fetchAppointments } = this.props;
    fetchAppointments();
  }

  render() {
    const { appointments } = this.props;
    return (
      <div>
        {appointments
          && appointments.map((appointment) => (
            <div key={appointment.id}>
              <p>{appointment.attributes['total-amount']}</p>
            </div>
          ))}
      </div>
    );
  }
}

Appointments.defaultProps = {
  appointments: null,
};

Appointments.propTypes = {
  appointments: PropTypes.instanceOf(Array),
  fetchAppointments: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ appointments: state.allAppointments });

export default connect(mapStateToProps, Actions)(Appointments);
