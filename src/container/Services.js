import React, { PureComponent } from 'react';
import Service from 'components/service/Service';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingSvg from 'assets/images/loading.svg';

import Modal from 'container/modal/Modal';
import * as Actions from 'actions';

class Services extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      clickedService: null,
    };
  }

  componentDidMount() {
    const { fetchAllServices } = this.props;
    fetchAllServices();
  }

  onOpenModal = (service) => {
    this.setState({ isModalOpen: true, clickedService: service });
  };

  onCloseModal = () => {
    this.setState({ isModalOpen: false, clickedService: null });
  };

  render() {
    const { services } = this.props;
    const { isModalOpen, clickedService } = this.state;
    return (
      <div>
        <h1 className="mb-10 text-4xl">All Services</h1>

        {services && services.length > 0 ? (
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-12">
            {services.map((service) => (
              <Service
                openModal={this.onOpenModal}
                key={service.attributes.name}
                service={service}
              />
            ))}
            <Modal
              isOpen={isModalOpen}
              onClose={this.onCloseModal}
              service={clickedService}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-lg mb-10">Loading..., Wait will be over soon!</p>
            <img src={LoadingSvg} alt="loading" />
          </div>
        )}
      </div>
    );
  }
}

Services.defaultProps = {
  services: [],
};

Services.propTypes = {
  services: PropTypes.instanceOf(Array),
  fetchAllServices: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ services: state.services.items });

export default connect(mapStateToProps, Actions)(Services);
