import React, { FC } from 'react'

import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { History } from 'history';
import { clearSession } from '../../../../shared/utils/auth';
import { historyTesting } from '../../../../shared/testMocks/history';
import useStyles from './styles';

interface Props {
  title: string;
  history: History | historyTesting;
  toggleDrawer: any;
}

const ToolBar: FC<Props> = (props: Props) => {
  const { title, history, toggleDrawer } = props;
  const classes = useStyles();

  const logOut = () => {
    clearSession();
    history.push('/login');
  }

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton 
          edge="start" 
          color="inherit" 
          aria-label="menu"
          onClick={toggleDrawer}
        >
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
