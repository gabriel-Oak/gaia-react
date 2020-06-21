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
          user={{ admin: true }}
        />
      );
    });

    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should toggle drawer', () => {
      component.find('button').hostNodes().simulate('click');

      expect(toggleDrawer).toHaveBeenCalled();
    });
  });
});
