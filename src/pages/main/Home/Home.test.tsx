import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import { createStore, applyMiddleware } from 'redux';
import reducers from '../../../reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import HomePage from './HomePage';
import HomeForm from './HomeForm';
import { menusMock } from '../../../shared/testMocks/menus';

describe('NotFound', () => {
  let store: any;

  beforeEach(() => {
    store = createStore(
      reducers,
      applyMiddleware(thunk)
    );
  });

  it('Should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <HomePage />
      </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('Home form', () => {
    it('should match snapshot', () => {
      const onSubmit = jest.fn(() => { });

      const form = shallow(
        <Provider store={store}>
          <HomeForm onSubmit={onSubmit} menus={menusMock} />
        </Provider>
      );
      expect(form).toMatchSnapshot();
    });
  });
});