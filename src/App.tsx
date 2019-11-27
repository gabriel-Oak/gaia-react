import React from 'react';
import AppRouter from './AppRouter';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import './App.css';

const App: React.FC = () => {
  const store = createStore(
    reducers,
    applyMiddleware(thunk)
  )

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
