import React from 'react';

import { IconButton, List, ListItem, ListItemText, ListItemIcon, SwipeableDrawer } from '@material-ui/core';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import { History } from 'history';


interface Props {
  open: boolean
  toggleDrawer: any;
  history: History;
}

const SideDrawer = (props: Props) => {
  const { open, toggleDrawer, history } = props

  const list = [
    {
      title: 'Home',
      icon: <HomeIcon />,
      url: '/'
    }
  ];

  const navigate = (url: string) => {
    history.push(url);
    setTimeout(toggleDrawer, 380);
  }

  return (
    <SwipeableDrawer
      anchor="left"
      className="SideDrawer"
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <div className="button-container right">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="close"
          onClick={toggleDrawer}
        >
          <CloseIcon />
        </IconButton>
      </div>

      <List>
        {
          list.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => navigate(item.url)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </ListItem>
          ))
        }
      </List>
    </SwipeableDrawer>
  );
}

export default SideDrawer;

