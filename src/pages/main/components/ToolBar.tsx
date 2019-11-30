import React from 'react'

import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { History } from 'history';
import { clearSession } from '../../../shared/utils/auth';

interface Props {
  title: string;
  history: History;
}

const ToolBar = (props: Props) => {
  const { title, history } = props;

  const logOut = () => {
    clearSession();
    history.push('/login');
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className="title">
          {title}
        </Typography>

        <Button
          color="inherit"
          onClick={logOut}
        >
          Sair
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default ToolBar;
