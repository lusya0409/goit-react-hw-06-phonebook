import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    red: '#f8456c',
    green: '#6bf3d6',
    orange: '#f39b53;',
    gray: '#cccccc',
    lightBlue: '#e4f5f7',
    blue: '#6d9cf1',
    violet: '#e26df1',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  spasing: value => `${value * 4}px`,
  shadow:
    '0px 2px 1px 0px rgba(46, 47, 66, 0.08), 0px 1px 1px 0px rgba(46, 47, 66, 0.16), 0px 1px 6px 0px rgba(46, 47, 66, 0.08)',
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
