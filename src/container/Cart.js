import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmptycartSvg from 'assets/images/empty_cart.svg';
import logo from 'assets/images/logo.png';
import Label from 'components/label/Label';
import Input from 'components/input/Input';
import Button from 'components/button/Button';
import * as Actions from 'actions';

class Cart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      time: '',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      [event.target.name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      totalItemsPrice,
      history,
      authenticated,
      createAppointment,
      selectedServices,
    } = this.props;
    const { date, time } = this.state;
    const services = selectedServices && selectedServices;
    if (authenticated === null) {
      history.push('/signin');
    }
    createAppointment(
      {
        date,
        time,
        services,
        total_amount: totalItemsPrice,
      },
      () => {
        history.push('/appointments');
      },
    );
  };

  render() {
    const { date, time } = this.state;
    const { selectedServices } = this.props;
    return (
      <div className="py-10 px-8 ">
        {selectedServices && selectedServices.length > 0 ? (
          <div
            className="flex justify-between m-auto"
            style={{ maxWidth: '1024px' }}
          >
            <div>
              <p className="text-4xl mb-10">Your Cart</p>
              <div className="flex mb-8">
                <p className="w-36 font-bold text-xl">Service</p>
                <p className="w-24 ml-8 font-bold text-xl">Duration</p>
                <p className="w-24 ml-8 font-bold text-xl">Price</p>
              </div>
              {selectedServices
                && selectedServices.map((service) => (
                  <div key={service.attributes.name} className="flex mb-3">
                    <p className="w-36">{service.attributes.name}</p>
                    <p className="w-24 ml-8">{`${service.attributes.duration} mins`}</p>
                    <p className="w-24 ml-8">{`kr ${service.attributes.price}`}</p>
                  </div>
                ))}
            </div>
            <div className="w-96 ml-8 px-4 py-8 bg-white shadow-lg">
              <div className="w-1/2 m-auto">
                <img src={logo} alt="logo" />
              </div>
              <h1 className="text-4xl text-center mt-3">Encapture</h1>
              <form className="mt-10 w-full" onSubmit={this.handleSubmit}>
                <div>
                  <Label htmlFor="date" className="block mb-2">
                    Date
                  </Label>
                  <Input
                    name="date"
                    type="date"
                    className="block border-b w-full px-5 py-2 focus:outline-none cursor-pointer"
                    value={date}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="mt-8">
                  <Label htmlFor="time" className="block mb-2">
                    Time
                  </Label>
                  <Input
                    name="time"
                    type="time"
                    className="block border-b w-full px-5 py-2 focus:outline-none cursor-pointer"
                    value={time}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="mt-16 bg-primary px-4 pt-3 pb-2 w-full"
                >
                  Book Appointment
                </Button>
              </form>
            </div>
          </div>
        ) : (
          <div className="w-1/2 m-auto">
            <p className="text-lg mb-10">
              let us add some services to
              <span className="ml-1 uppercase">enhance your beauty</span>
            </p>
            <img src={EmptycartSvg} alt="empty cart" />
          </div>
        )}
      </div>
    );
  }
}

Cart.defaultProps = {
  selectedServices: null,
  authenticated: null,
};

Cart.propTypes = {
  selectedServices: PropTypes.instanceOf(Array),
  authenticated: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  createAppointment: PropTypes.func.isRequired,
  totalItemsPrice: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  const { selectedServices } = state;
  const totalItemsPrice = selectedServices.length > 0
    ? selectedServices.reduce((acc, curr) => acc + curr.attributes.price, 0)
    : 0;
  return {
    selectedServices,
    authenticated: state.auth.authenticated,
    totalItemsPrice,
  };
};

export default compose(withRouter, connect(mapStateToProps, Actions))(Cart);
