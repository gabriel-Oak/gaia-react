import React, { PureComponent, ReactNode } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { fetchUser, closeSnack, toggleDrawer } from './mainActions';

import HomePage from './Home/HomePage'
import { connect } from 'react-redux';
import { ReducersPool } from '../../reducers';
import { mainState } from './mainReducer';
import { getSession } from '../../shared/utils/auth';

import Snack from '../../shared/components/snack/snack';
import { CircularProgress } from '@material-ui/core';
import { History } from 'history';
import ToolBar from './components/ToolBar';

import './Main.css';
import SideDrawer from './components/SideDrawer';

interface Props extends mainState {
  fetchUser: Function;
  closeSnack: Function;
  toggleDrawer: Function;
  history: History;
}

class MainRouter extends PureComponent<Props> {

  render(): ReactNode {
    const {
      snackbar,
      closeSnack,
      user,
      fetchUser,
      history,
      title,
      drawer,
      toggleDrawer
    } = this.props;

    const session = getSession();

    if (session.expired) {
      return <Redirect to="login" />
    }

    if (!user) {
      fetchUser(session.token, history);
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
          history={history}
          toggleDrawer={toggleDrawer}
        />

        {
          user ?

            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={HomePage} />
              </Switch>
            </BrowserRouter> :

            <div className="Center-container">
              <CircularProgress size={80} />
            </div>
        }
        <Snack
          closeSnack={closeSnack}
          {...snackbar}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: ReducersPool) => {
  const { mainReducer } = state;
  return mainReducer;
};

const mapDispatchToProps = {
  fetchUser,
  closeSnack,
  toggleDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);