import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

ReactModal.setAppElement('#root');

class Modal extends Component {
  onModelClose = () => {
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { isOpen, service } = this.props;
    const overlay = 'fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75';
    if (!service) {
      return null;
    }
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={this.onModelClose}
        contentLabel="Example Modal"
        className="absolute w-96 h-96 bg-white"
        overlayClassName={overlay}
      >
        <h1>{service.name}</h1>
      </ReactModal>
    );
  }
}

Modal.defaultProps = {
  service: null,
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  service: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    price: PropTypes.number,
    offer: PropTypes.string,
    image: PropTypes.string,
    long_desc: PropTypes.string,
  }),
};

export default Modal;
