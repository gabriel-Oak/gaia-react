import React from 'react';

import { mount, shallow } from 'enzyme';

import { createStore, applyMiddleware } from 'redux';
import reducers from '../../../reducers';
import thunk from 'redux-thunk';
import NotFoundPage from './NotFoundPage';
import { matchMock, historyMock } from '../../../shared/testMocks/history';

describe('NotFound', () => {
  let store: any;
  let page: any;

  const redirect = jest.fn();

  beforeEach(() => {
    store = createStore(
      reducers,
      applyMiddleware(thunk)
    );

    historyMock.goBack = redirect;

    page = mount(
      <NotFoundPage
        match={matchMock}
        history={historyMock}
        store={store}
      />
    ).childAt(0);
  });

  it('Should render and match snapshot', () => {
    expect(page).toMatchSnapshot();
  });

  it('should redirect in button click', () => {
    page.find('button').simulate('click');
    expect(redirect.mock.calls.length).toBe(1);
  });
});