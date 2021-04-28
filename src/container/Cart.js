import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmptycartSvg from 'assets/images/empty_cart.svg';
import logo from 'assets/images/logo.png';
import Label from 'components/label/Label';
import Input from 'components/input/Input';
import Button from 'components/button/Button';

class Cart extends PureComponent {
  render() {
    const { selectedServices } = this.props;
    return (
      <div className="py-10 px-8">
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
                  <div key={service.name} className="flex mb-3">
                    <p className="w-36">{service.name}</p>
                    <p className="w-24 ml-8">{`${service.duration} mins`}</p>
                    <p className="w-24 ml-8">{`kr ${service.price}`}</p>
                  </div>
                ))}
            </div>
            <div className="border-2 w-96 ml-8 px-4 py-8">
              <div className="w-1/2 m-auto">
                <img src={logo} alt="logo" />
              </div>
              <h1 className="text-4xl text-center mt-3">Encapture</h1>
              <form className="mt-10 w-full">
                <div>
                  <Label htmlFor="date" className="block mb-2">
                    Date
                  </Label>
                  <Input type="date" className="block border-b w-full" />
                </div>
                <div className="mt-8">
                  <Label htmlFor="time" className="block mb-2">
                    Time
                  </Label>
                  <Input type="time" className="block border-b w-full" />
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
};

Cart.propTypes = {
  selectedServices: PropTypes.instanceOf(Array),
};

const mapStateToProps = (state) => ({ selectedServices: state.selectedServices });

export default connect(mapStateToProps)(Cart);
