import React from 'react';

import { Tabs, Tab } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';

import './WeekTabs.css';

interface Props {
  index: number;
  onChange: any;
  children: React.ReactNode;
}

const WeekTabs = (props: Props) => {
  const {
    index,
    onChange,
    children
  } = props;

  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const theme = useTheme();

  const handleChangeView = (index: number) => onChange(index);
  const handleChangeTabs = (event: React.ChangeEvent<{}>, newValue: number) => onChange(newValue);

  return (
    <section className="WeekTabs">
      <Tabs
        onChange={handleChangeTabs}
        value={index}
        indicatorColor="primary"
        textColor="primary"
        aria-label="week tabs"
        variant="fullWidth"
        scrollButtons="auto"
      >
        {
          days.map((day, index) => (
            <Tab label={day} key={index} />
          ))
        }
      </Tabs>

      <SwipeableViews
        enableMouseEvents
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={index}
        onChangeIndex={handleChangeView}
      >
        {children}
      </SwipeableViews>
    </section>
  )
}

export default WeekTabs
