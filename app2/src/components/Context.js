import React from 'react';

const ColorContext = React.createContext('color');

class ColorProvider extends React.Component {
  render() {
    return (
      <ColorContext.Provider value={'red'}>
        { this.props.children }
      </ColorContext.Provider>
    );
  }
}

class Parent extends React.Component {
  render() {
    // Wrap 'Child' with our color provider
    return (
      <ColorProvider>
        <Child />
      </ColorProvider>
    );
  }
}

class Child extends React.Component {
  render() {
    return <GrandChild />
  }
}

class GrandChild extends React.Component {
  render() {
    // Consume our context and pass the color into the style attribute
    return (
      <ColorContext.Consumer>
        {/* 'color' is the value from our Provider */}
        {
          color => (
            <div style={{color: color}}>
              Yep, I'm still the GrandChild
            </div>
          )
        }
      </ColorContext.Consumer>
    );
  }
}

export default Parent;

