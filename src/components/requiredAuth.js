import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const requireAuth = (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      const { auth, history } = this.props;
      if (!auth) {
        history.push('/');
      }
    }

    render() {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ChildComponent {...this.props} />;
    }
  }

  ComposedComponent.propTypes = {
    auth: PropTypes.string.isRequired,
    history: PropTypes.instanceOf(Array).isRequired,
  };

  const mapStateToProps = (state) => ({ auth: state.auth.authenticated });
  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
