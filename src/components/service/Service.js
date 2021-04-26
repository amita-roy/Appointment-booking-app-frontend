import React from 'react';
import PropTypes from 'prop-types';

const Service = (props) => {
  const { service } = props;
  return (
    <div className="w-80 border-2 py-4 px-5 lg:w-96 border-opacity-50 border-black shadow-xl bg-white cursor-pointer transition duration-300 hover:transform hover:scale-105">
      <div className="flex justify-center image-wrapper">
        <div className="h-36 w-36 object-cover object-center rounded-full overflow-hidden">
          <img
            src={service.image}
            alt="skin care"
            className="h-full w-auto"
          />
        </div>
      </div>
      <div className="card-content mt-3 ">
        <div className="top-content flex justify-between items-start">
          <div className="top-left-content">
            <p className="title text-xl">{service.name}</p>
            <p className="description text-sm text-opacity-40 text-black">
              {service.description}
            </p>
          </div>
          <p className="price text-xl">{`${service.price} SEK`}</p>
        </div>

        <div className="bottom-content flex justify-between items-end mt-2">
          <div className="tags flex">
            <p className="px-2 pt-2 pb-1 bg-primary mr-3 text-sm offer border border-opacity-30 border-black">
              {`${service.offer}% Off`}
            </p>
            <p className="px-2 pt-2 pb-1 duration border border-opacity-30 border-black text-sm">
              {`${service.duration} mins`}
            </p>
          </div>
          <button
            type="button"
            className="bg-black text-white px-4 py-2 shadow-md focus:outline-none active:bg-opacity-80"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    price: PropTypes.number,
    offer: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Service;
