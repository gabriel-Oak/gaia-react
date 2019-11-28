import React from 'react';
import AppRouter from './AppRouter';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import { ThemeProvider } from '@material-ui/styles';
import { theme } from './shared/theme/theme';

import './App.css';
import { CssBaseline } from '@material-ui/core';

const App: React.FC = () => {
  const store = createStore(
    reducers,
    applyMiddleware(thunk)
  )

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <AppRouter />
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
