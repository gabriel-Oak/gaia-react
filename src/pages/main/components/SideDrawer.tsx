import React from 'react';

import { IconButton, List, ListItem, ListItemText, ListItemIcon, SwipeableDrawer } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';


interface Props {
  open: boolean
  toggleDrawer: any;
  redirect_to: Function;
}

const SideDrawer = (props: Props) => {
  const { open, toggleDrawer, redirect_to } = props

  const list = [
    {
      title: 'Home',
      icon: <HomeIcon />,
      url: '/'
    },
    {
      title: 'Usuários',
      icon: <HomeIcon />,
      url: '/user'
    },
  ];

  const navigate = (url: string) => {
    redirect_to(url)
    toggleDrawer();
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

