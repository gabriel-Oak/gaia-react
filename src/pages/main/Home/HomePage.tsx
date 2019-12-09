import React, { PureComponent, ReactNode } from 'react'

import { connect } from 'react-redux';
import { ReducersPool } from '../../../reducers';
import { setTitle } from '../mainActions';
import { setTab, fetchMenus } from './homeActions';
import { homeState } from './homeReducer';
import HomeForm from './HomeForm';
import { getSession } from '../../../shared/utils/auth';

import './Home.css';

interface Props extends homeState {
  setTitle: Function;
  setTab: Function;
  fetchMenus: Function;
  store?: any;
}

class HomePage extends PureComponent<Props> {

  constructor(props: Props) {
    super(props);
    this.props.setTitle('Home');
    
    this.props.fetchMenus(getSession().token)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event: any) {
    console.log(event);
  }

  render(): ReactNode {

    return (
      <main className="Home">
        <article className="Center-container-horizontal s800">
        
          <HomeForm
            {...this.props}
            onSubmit={this.onSubmit}
          />

        </article>
      </main>
    )
  }
}

const mapStateToProps = (state: ReducersPool) => {
  const { homeReducer } = state;
  return homeReducer;
};

const mapDispatchToProps = {
  setTitle,
  setTab,
  fetchMenus
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
