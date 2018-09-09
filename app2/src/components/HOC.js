import React from 'react';
import PropTypes from 'prop-types';

const withColor = (WrappedComponent) => {
  class ColorHOC extends React.Component {
    render() {
      const { color } = this.context;
      return <WrappedComponent style={{color: color}} {...this.props} />
    }
  }

  ColorHOC.contextTypes = {
    color: PropTypes.string
  };

  return ColorHOC;
};


export const Button = (props)=> <button {...props}>Button</button>

// ColoredButton will render with whatever color is currently in context with a style prop
export const ColoredButton = withColor( Button );

