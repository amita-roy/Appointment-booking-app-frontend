import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    children, type, className, ...rest
  } = props;
  return (

    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
