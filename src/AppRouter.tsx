import React, { PureComponent, ReactNode } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthPage from './pages/auth/AuthPage';
import MainRouter from './pages/main/MainRouter';

interface Props { }
interface State { }

class AppRouter extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  render(): ReactNode {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={AuthPage} />
          <Route path="**" component={MainRouter} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRouter;
