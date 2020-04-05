import React, { FC } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { fetchUser, closeSnack, toggleDrawer, redirect_to } from './mainActions';

import HomePage from './Home/HomePage'
import { connect } from 'react-redux';
import { ReducersPool } from '../../reducers';
import { mainState } from './mainReducer';
import { getSession } from '../../shared/utils/auth';

import Snack from '../../shared/components/snack/snack';
import { CircularProgress, Container } from '@material-ui/core';
import { History } from 'history';
import ToolBar from './components/ToolBar';

import './Main.css';
import SideDrawer from './components/SideDrawer';
import NotFoundPage from './NotFound/NotFoundPage';
import { historyTesting } from '../../shared/testMocks/history';
import UserFormContainer from './Users/Form/UserFormContainer';
import useStyles from './styles';

interface Props extends mainState {
  fetchUser: Function;
  closeSnack: Function;
  toggleDrawer: Function;
  redirect_to: Function;
  history: History | historyTesting;
  store?: any;
}

const MainRouter: FC<Props> = (props: Props) => {

  const classes = useStyles();
  const {
    snackbar,
    closeSnack,
    user,
    fetchUser,
    history,
    title,
    drawer,
    toggleDrawer,
    redirect,
    redirect_to
  } = props;

  const session = getSession();

  if (session.expired) {
    return (<Redirect to="login" />)
  }

  if (!user) {
    fetchUser(session.token, history);
  }

  if (redirect) {
    redirect_to(null);
    return (<Redirect to={redirect} />)
  }

  return (
    <div className="Main">
      <ToolBar
        title={title}
        history={history}
        toggleDrawer={toggleDrawer}
      />

      <SideDrawer
        open={drawer}
        redirect_to={redirect_to}
        toggleDrawer={toggleDrawer}
      />

      {
        user
          ?
          <Container 
            maxWidth="md" 
            className={classes.container}
          >
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/users/new" exact component={UserFormContainer} />
                <Route path="**" component={NotFoundPage} />
              </Switch>
            </BrowserRouter>
          </Container>
          :
          <div className="Center-container">
            <CircularProgress size={80} />
          </div>
      }
      <Snack
        closeSnack={closeSnack}
        {...snackbar}
      />
    </div>
  );
}

const mapStateToProps = (state: ReducersPool) => {
  const { mainReducer } = state;
  return mainReducer;
};

const mapDispatchToProps = {
  fetchUser,
  closeSnack,
  toggleDrawer,
  redirect_to
};

export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);