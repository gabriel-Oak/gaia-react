import React from 'react';

import { mount } from 'enzyme';

import { createStore, applyMiddleware } from 'redux';
import reducers from '../../../reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import NotFoundPage from './NotFoundPage';
import { matchMock, historyMock } from '../../../shared/testMocks/history';
import { Button } from '@material-ui/core';

describe('NotFound', () => {
  let store: any;
  let page: any;

  const redirect = jest.fn(() => undefined);

  beforeEach(() => {
    store = createStore(
      reducers,
      applyMiddleware(thunk)
    );

    historyMock.goBack = redirect;

    page = mount(
      <Provider store={store}>
        <NotFoundPage match={matchMock} history={historyMock} />
      </Provider>
    );
  });

  it('Should render and match snapshot', () => {
    expect(page).toMatchSnapshot();
  });

  it('should redirect in button click', () => {
    page.find('button').simulate('click')
    expect(redirect.mock.calls.length).toBe(1);
  });
});