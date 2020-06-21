import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import { createStore, applyMiddleware } from 'redux';
import reducers from '../../../reducers';
import thunk from 'redux-thunk';
import HomePage from './HomePage';
import HomeForm from './HomeForm';
import { menusMock } from '../../../shared/testMocks/menus';
import { Provider } from 'react-redux';
import { configureShallow } from '../../../shared/utils/testRender';

describe('NotFound', () => {
  let store: any;
  let page: any;

  const onSubmit = jest.fn();

  beforeEach(() => {
    store = createStore(
      reducers,
      applyMiddleware(thunk)
    );

    page = configureShallow(
      <HomePage store={store} />
    )
  });

  it('Should perform onSubmit()', () => {
    const instance = page.instance();
    const spy = jest.spyOn(instance, 'onSubmit');

    instance.onSubmit({ pratoPrincipal0: 'Coxinha' });

    expect(spy).toHaveBeenCalled();
  });

  describe('Home form', () => {

    it('should match snapshot', () => {
      const form = shallow(
        <HomeForm
          onSubmit={onSubmit}
          menus={menusMock}
          store={store}
        />
      ).dive().dive().dive().dive();

      expect(form).toMatchSnapshot();
    });

    it('should render the form without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <Provider store={store}>
          <HomeForm
            onSubmit={onSubmit}
            menus={menusMock}
            store={store}
          />
        </Provider>
        , div
      );

      ReactDOM.unmountComponentAtNode(div);
    });
  });
});