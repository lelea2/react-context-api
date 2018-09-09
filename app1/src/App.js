import React, { Component } from 'react';
import ButtonA from './components/ButtonA';
import ButtonB from './components/ButtonB';
import { SharedSnackbarProvider } from './components/SharedSnackBar.context';

const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <SharedSnackbarProvider>
          <ButtonA />
          <ButtonB />
        </SharedSnackbarProvider>
      </div>
    );
  }
}

export default App;