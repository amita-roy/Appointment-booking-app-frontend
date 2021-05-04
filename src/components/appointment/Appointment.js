import React from 'react';
import PropTypes from 'prop-types';
// import Pluralize from 'pluralize';

const Appointment = (props) => {
  const { appointment } = props;
  const { attributes } = appointment && appointment;

  return (
    <div className="mt-10 bg-white py-8 px-16 shadow-2xl">
      <div className="flex justify-between">
        <div>
          <div key={attributes.service.id} className="flex mt-4">
            <p className="w-52 lg:w-80">{attributes.service.name}</p>
            <p className="ml-4">{`${attributes.service.duration} mins`}</p>
          </div>
        </div>
        <div>
          <p className="text-right">{attributes.time}</p>
          <p className="text-right">{attributes.date}</p>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl text-right">{`Total Amount Kr ${attributes.service.price}`}</p>
      </div>
      <small className="text-black text-opacity-60">Pay at location.</small>
    </div>
  );
};

Appointment.defaultProps = {
  appointment: {},
};

Appointment.propTypes = {
  appointment: PropTypes.instanceOf(Object),
};

export default Appointment;
