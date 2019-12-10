import React from 'react';
import { mount } from 'enzyme';

import SideDrawer from "./SideDrawer";
import { createMemoryHistory, History } from 'history';
import ToolBar from './ToolBar';
import { historyMock } from '../../../shared/testMocks/history';

describe('MainRouter Components', () => {

  describe('SideDrawer', () => {

    let component: any;
    let redirect: any;
    let toggleDrawer: any;

    beforeEach(() => {
      redirect = jest.fn();
      toggleDrawer = jest.fn();

      component = mount(
        <SideDrawer
          open={true}
          redirect_to={redirect}
          toggleDrawer={toggleDrawer}
        />
      );
    });

    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should call the redirect', () => {
      component.find('.MuiListItem-button').hostNodes().simulate('click');

      expect(redirect).toHaveBeenCalled();
    });

    it('should toggle drawer', () => {
      component.find('button').hostNodes().simulate('click');

      expect(toggleDrawer).toHaveBeenCalled();
    });
  });

  describe('ToolBar', () => {

    let component: any;
    let toggleDrawer: any;
    const history = historyMock;

    beforeEach(() => {
      history.push = jest.fn();
      toggleDrawer = jest.fn();

      component = mount(
        <ToolBar
          history={history}
          toggleDrawer={toggleDrawer}
          title='Testing is fun'
        />
      );
    });

    it('should log out', () => {
      expect(component).toMatchSnapshot();
    });

    it('should logOut', () => {
      component.find('.MuiButton-root').hostNodes().simulate('click');

      expect(history.push).toHaveBeenCalledWith('/login');
    });

    it('should toggle drawr', () => {
      component.find('.MuiIconButton-root').hostNodes().simulate('click');

      expect(toggleDrawer).toHaveBeenCalled();
    });
  });
});
