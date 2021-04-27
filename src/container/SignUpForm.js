import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as Actions from 'actions';
import Button from 'components/button/Button';
import Input from 'components/input/Input';
import Label from 'components/label/Label';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
    };
  }

  componentWillUnmount() {
    const { resetStore } = this.props;
    resetStore();
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      [event.target.name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const { signup, history } = this.props;
    signup({ name, email, password }, () => {
      history.push('/');
    });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password, name } = this.state;
    const { errors } = this.props;
    const inputClasses = 'block bg-transparent border-b w-full px-5 py-2 focus:outline-none';
    return (
      <div>
        {errors && errors.length > 0
          ? errors.map((error, index) => (
            <p key={Math.random() + Math.random()}>
              {`${index + 1}. ${error}`}
            </p>
          ))
          : ''}

        <form className="w-full flex flex-col" onSubmit={this.handleSubmit}>
          <div>
            <Label htmlFor="name" className="block text-xl">
              Name
            </Label>
            <Input
              className={inputClasses}
              type="text"
              required
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Label htmlFor="email" className="block text-xl mt-10">
              Email
            </Label>
            <Input
              className={inputClasses}
              type="email"
              required
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Label htmlFor="password" className="block text-xl mt-10">
              Password
            </Label>
            <Input
              className={inputClasses}
              type="password"
              required
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <Button
            type="submit"
            className="mt-16 px-14 pt-3 pb-2 bg-black text-primary self-end hover:shadow-lg focus:outline-none active:bg-opacity-70"
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

SignUpForm.defaultProps = {
  errors: null,
};

SignUpForm.propTypes = {
  signup: PropTypes.func.isRequired,
  resetStore: PropTypes.func.isRequired,
  errors: PropTypes.instanceOf(Array),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({ errors: state.auth.errors });

export default compose(
  withRouter,
  connect(mapStateToProps, Actions),
)(SignUpForm);
