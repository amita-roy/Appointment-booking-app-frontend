import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import logoSrc from 'assets/images/logo.png';

class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <div className="flex justify-between items-center px-16 bg-primary h-header">
          <div className="flex items-center">
            <img src={logoSrc} alt="logo" className="w-9 mr-1" />
            <p className="text-2xl font-400">Encapture</p>
          </div>
          <div className="flex">
            <div className="cart-price flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="pr-3 border-black border-r">
                <span>0</span>
                <span className="ml-1">Item</span>
              </p>
              <p className="pl-3">
                <span>$</span>
                <span className="ml-1">0.00</span>
              </p>
            </div>
            <div className="logged-in flex items-center ml-10">
              <p className="uppercase pr-3 border-r border-black">john doe</p>
              <p className="uppercase pl-3">logout</p>
            </div>
            <div className="logged-out ml-10 hidden">
              <p className="uppercase pr-3 border-r border-black">sign up</p>
              <p className="uppercase pl-3">sign in</p>
            </div>
          </div>
        </div>
        <div className="bg-black text-white flex justify-end items-center px-16 text-sm font-light h-subHeader">
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
            className="ml-8 uppercase"
            activeClassName="text-primary"
          >
            my appointments
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
