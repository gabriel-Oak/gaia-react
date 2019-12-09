import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import { createStore, applyMiddleware } from 'redux';
import reducers from '../../reducers';
import thunk from 'redux-thunk';

import AuthPage from './AuthPage';
import AuthForm from './AuthForm';
import { clearSession, setSession } from '../../shared/utils/auth';
import { configureShallow } from '../../shared/utils/testRender';
import { Provider } from 'react-redux';



describe('Auth', () => {
  let store: any;
  let page: any;

  const onSubmitMock = jest.fn();

  beforeEach(() => {
    store = createStore(
      reducers,
      applyMiddleware(thunk)
    );

    page = configureShallow(
      <AuthPage store={store} />
    );
  });

  afterEach(() => {
    clearSession();
  });

  it('should match snapshot', () => {
    expect(page).toMatchSnapshot();
  });

  it('should redirect when sessioned', () => {

    setSession('fakeToken');
    expect(
      configureShallow(
        <AuthPage store={store} />
      ).find('article').length
    ).toBe(0);

  });

  describe('Auth form', () => {

    it('should match snapshot', () => {

      const form = shallow(
        <AuthForm onSubmit={onSubmitMock} />
      ).dive().dive();

      expect(form).toMatchSnapshot();

    });

    it('should render the form without crashing', () => {

      const div = document.createElement('div');
      ReactDOM.render(
        <Provider store={store}>
          <AuthForm
            onSubmit={onSubmitMock}
          />
        </Provider>
        , div
      );
      ReactDOM.unmountComponentAtNode(div);

    });

    it('should render loading button', () => {

      const props = { loading: true };
      const div = document.createElement('div');

      ReactDOM.render(
        <Provider store={store}>
          <AuthForm
            onSubmit={onSubmitMock}
            {...props}
          />
        </Provider>
        , div
      );

      const loading = div.querySelector('.MuiCircularProgress-root');
      expect(loading).toBeTruthy();

    });
  });
});