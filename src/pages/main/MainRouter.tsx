import React, { PureComponent, ReactNode } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { authenticate } from './mainActions';

import HomePage from './Home/HomePage'
import { connect } from 'react-redux';
import { ReducersPool } from '../../reducers';
import { mainState } from './mainReducer';
import { getSession } from '../../shared/utils/auth';

interface Props extends mainState {
  authenticate: Function;
}

class MainRouter extends PureComponent<Props> {

  render(): ReactNode {
    // const { token } = this.props;
    const session = getSession();

    if (!session.token || session.expired) {
      return <Redirect to="login" />
    }

    return (
      <div className="Main">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = (state: ReducersPool) => {
  const { mainReducer } = state;
  return mainReducer;
};

const mapDispatchToProps = {
  authenticate
};

export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);