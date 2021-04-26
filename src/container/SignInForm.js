import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as Actions from 'actions';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state;
    const { signin, history } = this.props;
    signin({ email, password }, () => {
      history.push('/');
    });
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    const { errors } = this.props;
    const inputClasses = 'block bg-transparent border-b w-full px-5 py-2 focus:outline-none';
    return (
      <div>
        {errors && errors.length > 0
          ? errors.map((error, index) => (
            <p key={Math.random() + Math.random()}>{`${index + 1}. ${error}`}</p>
          ))
          : ''}

        <form className="w-full flex flex-col" onSubmit={this.handleSubmit}>
          <div>
            {' '}
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="email" className="block text-xl">
              Email
            </label>
            <input
              className={inputClasses}
              type="email"
              required
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            {' '}
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="password" className="block text-xl mt-10">
              Password
            </label>
            <input
              className={inputClasses}
              type="passowrd"
              required
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="mt-16 px-14 pt-3 pb-2 bg-black text-primary self-end focus:outline-none"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

SignInForm.defaultProps = {
  errors: [],
};

SignInForm.propTypes = {
  signin: PropTypes.func.isRequired,
  errors: PropTypes.instanceOf(Array),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({ errors: state.auth.errors });

export default compose(
  withRouter,
  connect(mapStateToProps, Actions),
)(SignInForm);
