import React from 'react';

import { Tabs, Tab } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';

import './WeekTabs.css';

interface Props {
  index: number;
  onChange: any;
}

const WeekTabs = (props: Props) => {
  const {
    index,
    onChange
  } = props;

  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const theme = useTheme();

  const handleChangeIndex = (index: number) => onChange(index);

  return (
    <section className="WeekTabs">
      <Tabs
        onChange={onChange}
        value={index}
        indicatorColor="primary"
        textColor="primary"
        aria-label="week tabs"
        variant="scrollable"
        scrollButtons="auto"
      >
        {
          days.map((day, index) => (
            <Tab label={day} key={index} />
          ))
        }
      </Tabs>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={index}
        onChangeIndex={handleChangeIndex}
      >
        <div>teste</div>
        <div>teste</div>
        <div>teste</div>
        <div>teste</div>
        <div>teste</div>
      </SwipeableViews>
    </section>
  )
}

export default WeekTabs
