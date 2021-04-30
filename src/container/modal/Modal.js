import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import * as Actions from 'actions';
import Tag from 'components/tag/Tag';
import Button from 'components/button/Button';
import styles from './modal.module.css';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');

export class Modal extends Component {
  onModelClose = () => {
    const { onClose } = this.props;
    onClose();
  };

  handleClick = () => {
    const { serviceSelected, service, onClose } = this.props;
    serviceSelected(service);
    onClose();
  }

  render() {
    const {
      isOpen, service, isAdded,
    } = this.props;
    const overlay = 'fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80';

    if (!service) {
      return null;
    }
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={this.onModelClose}
        closeTimeoutMS={200}
        className={`absolute bg-white ${styles.modal} outline-none`}
        overlayClassName={overlay}
      >
        <div className="h-64 w-64  mb-8 mx-auto object-cover object-center rounded-full overflow-hidden">
          <img
            src={service.attributes.image}
            alt={service.attributes.name}
            className="w-full"
          />
        </div>
        <div className="content">
          <div className="top-content flex justify-between items-start">
            <div className="top-left-content">
              <p className="title text-xl">{service.attributes.name}</p>
              <p className="description text-sm text-opacity-40 text-black">
                {service.attributes.description}
              </p>
            </div>
            <p className="price text-xl">{`${service.attributes.price} SEK`}</p>
          </div>
          <div className="bottom-content mt-8">
            <div className="tags flex">
              {service.attributes.offer > 0 && (
                <Tag className="px-2 pt-2 pb-1 bg-primary mr-3 text-sm offer border border-opacity-30 border-black">
                  {`${service.attributes.offer}% Off`}
                </Tag>
              )}

              <Tag className="px-2 pt-2 pb-1 duration border border-opacity-30 border-black text-sm">
                {`${service.attributes.duration} mins`}
              </Tag>
            </div>
            <p className="mt-6">{service.attributes['long-desc']}</p>
          </div>
          <div className="flex justify-end">
            {isAdded ? (
              <Button
                disabled
                type="button"
                className="mt-16 px-14 pt-3 pb-2 bg-black text-primary bg-opacity-70 uppercase"
              >
                Added
              </Button>
            ) : (
              <Button
                onClick={this.handleClick}
                type="submit"
                className="mt-16 px-14 pt-3 pb-2 bg-black text-primary self-end hover:shadow-lg focus:outline-none active:bg-opacity-70 uppercase"
              >
                Reserve
              </Button>
            )}
          </div>
        </div>
      </ReactModal>
    );
  }
}

Modal.defaultProps = {
  service: null,
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  serviceSelected: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  service: PropTypes.shape({
    attributes: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      duration: PropTypes.number,
      price: PropTypes.number,
      offer: PropTypes.string,
      image: PropTypes.string,
      'long-desc': PropTypes.string,
    }),
  }),
  isAdded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { selectedServices } = state;
  const { service } = ownProps;
  const isAdded = selectedServices.filter(
    (item) => item.attributes.name === (service && service.attributes.name),
  );
  return { isAdded: isAdded.length > 0, selectedServices };
};

export default connect(mapStateToProps, Actions)(Modal);
