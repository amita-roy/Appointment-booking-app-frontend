import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SelectedServices extends PureComponent {
  render() {
    const { selectedServices } = this.props;
    return (
      <div>
        {selectedServices
          && selectedServices.map((service) => (
            <p key={service.name}>{service.name}</p>
          ))}
      </div>
    );
  }
}

SelectedServices.propTypes = {
  selectedServices: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  selectedServices: state.selectedServices,
});

export default connect(mapStateToProps)(SelectedServices);
