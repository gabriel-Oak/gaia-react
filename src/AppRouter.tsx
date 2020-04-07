import React, { PureComponent, ReactNode } from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';
import AuthPage from './pages/auth/AuthPage';
import MainRouter from './pages/main/MainRouter';

interface Props { }
interface State { }

export const history: History<any> = createBrowserHistory();

class AppRouter extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  render(): ReactNode {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" exact component={AuthPage} />
          <Route path="**" component={MainRouter} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
