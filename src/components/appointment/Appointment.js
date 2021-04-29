import React from 'react';
import PropTypes from 'prop-types';
import Pluralize from 'pluralize';

const Appointment = (props) => {
  const { appointment, includedServices } = props;
  const { attributes } = appointment && appointment;
  const { data } = appointment && appointment.relationships.services;

  const getServices = (ids, services) => ids.map((id) => services.find((s) => id.id === s.id));
  return (
    <div className="mt-10 bg-white py-8 px-16 shadow-2xl">
      <div className="flex justify-between">
        <div>
          {getServices(data, includedServices).map((service) => (
            <div key={service.attributes.name} className="flex">
              <p className="w-52 lg:w-80">{service.attributes.name}</p>
              <p className="ml-4">{`${service.attributes.duration} mins`}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-right">{attributes.time}</p>
          <p className="text-right">{attributes.date}</p>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl">{`Total ${Pluralize('Service', data.length)} ${data.length}`}</p>
        <p className="text-xl text-right">{`Total Amount Kr ${attributes['total-amount']}`}</p>
      </div>
      <small className="text-black text-opacity-60">Pay at location.</small>
    </div>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.instanceOf(Object).isRequired,
  includedServices: PropTypes.instanceOf(Array).isRequired,
};

export default Appointment;
