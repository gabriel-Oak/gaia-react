import React, { FC } from 'react'
import { Switch, Route, Redirect, } from 'react-router-dom'
import { fetchUser, closeSnack, toggleDrawer, redirect_to } from './mainActions';

import HomePage from './Home/HomePage'
import { connect } from 'react-redux';
import { ReducersPool } from '../../reducers';
import { mainState } from './mainReducer';
import { getSession } from '../../shared/utils/auth';

import Snack from '../../shared/components/snack/snack';
import { CircularProgress, Container } from '@material-ui/core';
import ToolBar from './components/ToolBar';
import { History } from 'history';

import SideDrawer from './components/SideDrawer';
import NotFoundPage from './NotFound/NotFoundPage';
import { historyTesting } from '../../shared/testMocks/history';
import UserFormContainer from './Users/Form/UserFormContainer';
import ProfileContainer from './Profile/ProfileContainer';

import useStyles from './styles';
import './Main.css';
import UserListContainer from './Users/List/UserListContainer';
import MenusFormContainer from './Menus/Form/MenusFormContainer';
import ExchangesContainer from './Exchanges/ExchangesContainer';

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
    title,
    drawer,
    toggleDrawer,
    redirect,
    redirect_to,
    history
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
        user={user || { admin: false, }}
      />

      {
        user
          ?
          <Container
            maxWidth="md"
            className={classes.container}
          >
            <Switch>
              <Route path="/" exact component={HomePage} />
              {user.admin && (
                <>
                  <Route path="/users" exact component={UserListContainer} />
                  <Route path="/users/new" exact component={UserFormContainer} />
                  <Route path="/users/:userId/edit" exact component={UserFormContainer} />
                  <Route path="/profile/edit" exact component={ProfileContainer} />
                  <Route path="/menus/" exact component={MenusFormContainer} />
                  <Route path="/trocas" exact component={ExchangesContainer} />
                </>
              )}
              <Route path="**" component={NotFoundPage} />
            </Switch>
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