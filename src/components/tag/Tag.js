import React from 'react';
import PropTypes from 'prop-types';

export const Tag = (props) => {
  const { className, children, ...rest } = props;
  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
};

Tag.defaultProps = {
  className: '',
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Tag;
