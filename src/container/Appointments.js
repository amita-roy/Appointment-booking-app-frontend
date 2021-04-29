import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from 'actions';

class Appointments extends Component {
  componentDidMount() {
    const { fetchAppointments } = this.props;
    fetchAppointments();
  }

  getServices = (ids, services) => ids.map((id) => services.find((s) => id.id === s.id));

  render() {
    const { appointments, includedServices } = this.props;
    return (
      <div>
        {appointments.map((appointment) => {
          const { attributes } = appointment;
          const { data } = appointment.relationships.services;
          return (
            <div
              key={appointment.id}
              className="mt-10 bg-white py-8 px-16 shadow-2xl"
            >
              <p>{`Kr ${attributes['total-amount']}`}</p>
              <p>{`Total Services ${data.length}`}</p>
              <p>{attributes.date}</p>
              <p>{attributes.time}</p>
              {this.getServices(data, includedServices).map((service) => (
                <div key={service.attributes.name}>
                  <p>{service.attributes.name}</p>
                  <p>{`${service.attributes.duration} mins`}</p>
                </div>
              ))}
            </div>
          );
        })}
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
