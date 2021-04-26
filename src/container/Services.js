import Service from 'components/service/Service';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as Actions from 'actions';

class Services extends PureComponent {
  componentDidMount() {
    const { fetchAllServices } = this.props;
    fetchAllServices();
  }

  render() {
    const { services } = this.props;
    return (
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-12">
        {services && services.map((service) => <Service key={service.name} service={service} />)}

      </div>
    );
  }
}

Services.propTypes = {
  services: PropTypes.instanceOf(Array).isRequired,
  fetchAllServices: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ services: state.allServices.services });

export default connect(mapStateToProps, Actions)(Services);
