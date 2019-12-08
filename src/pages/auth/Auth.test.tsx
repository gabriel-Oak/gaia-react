import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import { createStore, applyMiddleware } from 'redux';
import reducers from '../../reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import AuthPage from './AuthPage';
import AuthForm from './AuthForm';



describe('Auth', () => {
  let store: any;

  beforeEach(() => {
    store = createStore(
      reducers,
      applyMiddleware(thunk)
    )
  });

  it('should match snapshot', () => {
    const page = shallow(
      <Provider store={store}>
        <AuthPage />
      </Provider>
    );
    expect(page).toMatchSnapshot();
  });
  
  describe('Auth form', () => {
    it('should match snapshot', () => {
      const form = shallow(
        <Provider store={store}>
          <AuthForm />
        </Provider>
      );
      expect(form).toMatchSnapshot();
    });
  });
});