import React from 'react';
import ReactDOM from 'react-dom';

import { mount } from 'enzyme';

import { createStore, applyMiddleware } from 'redux';
import reducers from '../../../reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import HomePage from './HomePage';

describe('NotFound', () => {
  let store: any;

  beforeEach(() => {
    store = createStore(
      reducers,
      applyMiddleware(thunk)
    );
  });

  it('Should render and match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <HomePage />
      </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});