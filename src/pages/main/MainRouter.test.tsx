import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from '../../reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import MainRouter from './MainRouter';
import { BrowserRouter } from 'react-router-dom';
import { clearSession, setSession } from '../../shared/utils/auth';
import { configureShallow } from '../../shared/utils/testRender';

import { historyMock } from '../../shared/testMocks/history';

describe('MainRouter', () => {
  let store: any;
  let mockedStore: any;

  const redirectStore = configureStore([thunk])({
    mainReducer: {
      user: true,
      redirect: 'test'
    }
  });

  beforeEach(() => {
    store = createStore(
      reducers,
      applyMiddleware(thunk)
    );

    mockedStore = configureStore([thunk])({
      mainReducer: {
        title: 'Gaia',
        drawer: false,
        snackbar: {
          open: false,
        },
        user: {
          admin: true,
          email: 'test@email.cone',
          nome: 'Jorginho',
          user: 'string'
        },
      }
    });
  });

  afterEach(() => {
    clearSession();
  });

  it('redirect to login', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <MainRouter history={historyMock} />
        </BrowserRouter>
      </Provider>
      , div
    );

    expect(div.querySelector('.Main')).toBeFalsy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    setSession('yolooooooo');
    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={mockedStore}>
        <BrowserRouter>
          <MainRouter history={historyMock} />
        </BrowserRouter>
      </Provider>
      , div
    );

    expect(div.querySelector('.Main')).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    setSession('yolooooooo');

    const page = configureShallow(
      <MainRouter history={historyMock} store={mockedStore} />
    );

    expect(page).toMatchSnapshot();
  });

  it('should try to fetch user data', () => {
    setSession('yolooooooo');

    const page = configureShallow(
      <MainRouter history={historyMock} store={store} />
    );
    expect(page.find('.Main')).toBeTruthy();
  });

  it('should perform a redirect', () => {
    setSession('yolooooooo');
    

    const page = configureShallow(
      <MainRouter history={historyMock} store={redirectStore} />
    );
    expect(page.find('.Main')).toBeTruthy();
  });
});