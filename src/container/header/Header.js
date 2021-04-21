import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

class Header extends PureComponent {
  render() {
    const activeStyle = {
      color: '#d3ae6b',
    };
    return (
      <div className="header">
        <div className={styles.headerTop}>Top</div>
        <div className={styles.headerBottom}>
          <NavLink
            to="/"
            exact
            className={styles.bottomNavFont}
            activeStyle={activeStyle}
          >
            HOME
          </NavLink>
          <NavLink
            to="/services"
            exact
            className={`${styles.bottomNavFont} ml-8`}
            activeStyle={activeStyle}
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/appointments"
            exact
            className={`${styles.bottomNavFont} ml-8`}
            activeStyle={activeStyle}
          >
            MY APPOINTMENTS
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
