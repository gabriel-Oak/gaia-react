import React, { PureComponent, ReactNode } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { fetchUser, closeSnack } from './mainActions';

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

interface Props extends mainState {
  fetchUser: Function;
  closeSnack: Function;
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
      title
    } = this.props;

    const session = getSession();
    console.log(this.props);

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
  closeSnack
};

export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);