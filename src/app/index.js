import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

import './style/global.scss';

const MOUNT_NODE = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <AppContainer />,
    MOUNT_NODE
  );
};

// This code is excluded from production bundle
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp();
      } catch (error) {
        console.error(error);
        renderError(error);
      }
    };
  }
}

render();

