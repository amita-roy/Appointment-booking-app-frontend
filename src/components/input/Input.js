import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { type, className, ...rest } = props;
  return (
    <input type={type} className={className} {...rest} />
  );
};

Input.defaultProps = {
  className: '',
  type: 'text',
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
