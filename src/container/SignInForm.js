import React, { Component } from 'react';

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

  render() {
    const { email, password } = this.state;
    const inputClasses = 'block bg-transparent border-b w-full px-5 py-2 focus:outline-none';
    console.log(email, password);
    return (
      <form className="w-full flex flex-col">
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
          type="button"
          className="mt-16 px-14 pt-3 pb-2 bg-black text-primary self-end focus:outline-none"
        >
          Sign In
        </button>
      </form>
    );
  }
}

export default SignInForm;
