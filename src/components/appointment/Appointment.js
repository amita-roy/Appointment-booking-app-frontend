import React from 'react';
import PropTypes from 'prop-types';

const Appointment = (props) => {
  const { appointment, includedServices } = props;
  const { attributes } = appointment;
  const { data } = appointment.relationships.services;

  const getServices = (ids, services) => ids.map((id) => services.find((s) => id.id === s.id));
  return (
    <div
      className="mt-10 bg-white py-8 px-16 shadow-2xl"
    >
      <p>{`Kr ${attributes['total-amount']}`}</p>
      <p>{`Total Services ${data.length}`}</p>
      <p>{attributes.date}</p>
      <p>{attributes.time}</p>
      {getServices(data, includedServices).map((service) => (
        <div key={service.attributes.name}>
          <p>{service.attributes.name}</p>
          <p>{`${service.attributes.duration} mins`}</p>
        </div>
      ))}
    </div>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.instanceOf(Object).isRequired,
  includedServices: PropTypes.instanceOf(Array).isRequired,
};

export default Appointment;
