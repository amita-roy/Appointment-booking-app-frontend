import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Service extends Component {
  handleClick = () => {
    const { service, openModal } = this.props;
    openModal(service);
  };

  render() {
    const { service } = this.props;
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
              {service.offer > 0 && (
                <p className="px-2 pt-2 pb-1 bg-primary mr-3 text-sm offer border border-opacity-30 border-black">
                  {`${service.offer}% Off`}
                </p>
              )}

              <p className="px-2 pt-2 pb-1 duration border border-opacity-30 border-black text-sm">
                {`${service.duration} mins`}
              </p>
            </div>
            <button
              type="submit"
              className="flex items-center uppercase focus:outline-none"
              onClick={this.handleClick}
            >
              View
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Service.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    price: PropTypes.number,
    offer: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Service;
