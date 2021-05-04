import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as Actions from 'actions';
import logoSrc from 'assets/images/logo.png';

class Header extends PureComponent {
  handleSubmit = (event) => {
    event.preventDefault();
    const { signout, history } = this.props;
    history.push('/signin');
    signout();
  }

  render() {
    const { user } = this.props;
    return (
      <div className="header">
        <div className="flex justify-between items-center px-16 bg-primary h-20">
          <Link to="/" className="flex items-center">
            <img src={logoSrc} alt="logo" className="w-9 mr-1" />
            <p className="text-2xl font-400">Encapture</p>
          </Link>
          <div className="flex">

            {user ? (
              <div className="logged-in flex items-center ml-10">
                <p className="uppercase pr-3 border-r border-black">
                  {user.name}
                </p>
                <button
                  type="submit"
                  className="uppercase pl-3  focus:outline-none"
                  onClick={this.handleSubmit}
                >
                  logout
                </button>
              </div>
            ) : (
              <div className="logged-out ml-10">
                <NavLink
                  to="/signup"
                  exact
                  className="uppercase pr-3 border-r border-black"
                >
                  sign up
                </NavLink>
                <NavLink to="/signin" exact className="uppercase pl-3">
                  sign in
                </NavLink>
              </div>
            )}
          </div>
        </div>
        <div className="bg-black text-white flex justify-end items-center px-16 text-sm font-light h-12">
          <NavLink
            to="/"
            exact
            activeClassName="text-primary"
            className=" uppercase"
          >
            home
          </NavLink>
          <NavLink
            to="/services"
            exact
            className="ml-8 uppercase"
            activeClassName="text-primary"
          >
            services
          </NavLink>
          <NavLink
            to="/appointments"
            exact
            className={`ml-8 uppercase ${user ? 'inline-block' : 'hidden'}`}
            activeClassName="text-primary"
          >
            my appointments
          </NavLink>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  user: {},
};

Header.propTypes = {
  user: PropTypes.shape({ name: PropTypes.string }),
  signout: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default compose(withRouter, connect(mapStateToProps, Actions))(Header);
