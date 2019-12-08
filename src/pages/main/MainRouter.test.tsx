import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import reducers from '../../reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MainRouter from './MainRouter';
import { History } from 'history';
import { createMemoryHistory } from "history";
import { BrowserRouter } from 'react-router-dom';

describe('MainRouter', () => {
  let store: any;
  const history: History = createMemoryHistory();

  beforeEach(() => {
    store = createStore(
      reducers,
      applyMiddleware(thunk)
    )
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <MainRouter history={history} />
        </BrowserRouter>
      </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});