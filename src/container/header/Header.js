import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <div className="flex justify-between h-20 items-center px-16 bg-primary">
          <div className="brand-name">Encapture</div>
          <div className="brand-name">Right Items</div>
        </div>
        <div className="h-12 bg-black text-white flex justify-end items-center px-16 text-sm font-light">
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
