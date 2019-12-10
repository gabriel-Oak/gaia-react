import React from 'react';

import WeekTabs from './WeekTabs';
import { mount, ReactWrapper } from 'enzyme';

describe('WeekTabs', () => {
  let component: ReactWrapper;
  let onChange: any;

  beforeEach(() => {
    onChange = jest.fn();

    component = mount(
      <WeekTabs
        index={0}
        onChange={onChange}
      >
        <div>panel 1</div>
        <div>panel 2</div>
        <div>panel 3</div>
        <div>panel 4</div>
        <div>panel 5</div>
      </WeekTabs>
    );
  });

  it('shold match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('shold change tab by tabs', () => {
    component.find('.weektab0').hostNodes().simulate('click');

    expect(onChange).toHaveBeenCalledWith(0);
  });

  it('shold change tab by swipplable view', () => {
    component
      .find({ enableMouseEvents: true })
      .props()
      .onChangeIndex(2);
      expect(onChange).toHaveBeenCalledWith(2);
  });
});