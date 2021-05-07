import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
  const { children, className, ...rest } = props;
  return (
    <label className={className} {...rest}>
      {children}
    </label>
  );
};

Label.defaultProps = {
  className: '',
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Label;
