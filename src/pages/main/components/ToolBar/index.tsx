import React, { FC, useRef, useState } from 'react'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import CreateIcon from '@material-ui/icons/Create';

import { History } from 'history';
import { clearSession } from '../../../../shared/utils/auth';
import { historyTesting } from '../../../../shared/testMocks/history';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { ReducersPool } from '../../../../reducers';

interface Props {
  title: string;
  history: History | historyTesting;
  toggleDrawer: any;
}

const ToolBar: FC<Props> = (props: Props) => {
  const { title, history, toggleDrawer } = props;
  const classes = useStyles();
  const { user } = useSelector((state: ReducersPool) => state.mainReducer);
  const nameRef = useRef();
  const [open, setOpen] = useState(false);

  const logOut = () => {
    clearSession();
    history.push('/login');
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const handleEditProfile = () => {
    handleClose();
    history.push('/profile/edit');
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

        <Typography
          variant="subtitle1"
          component="span"
          className={classes.username}
          ref={nameRef}
          onClick={handleOpen}
        >
          {user && user.name}
        </Typography>

      </Toolbar>

      <Menu
        id="long-menu"
        anchorEl={nameRef.current}
        keepMounted
        open={open}
        onClose={handleClose}
      >

        <MenuItem onClick={handleEditProfile}>
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <Typography variant="inherit">
            Editar meus dados
          </Typography>
        </MenuItem>

        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <PowerSettingsNewIcon />
          </ListItemIcon>
          <Typography variant="inherit">
            Desconectar
          </Typography>
        </MenuItem>

      </Menu>
    </AppBar >
  );
}

export default ToolBar;
