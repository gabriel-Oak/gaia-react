import React, { PureComponent, ReactNode } from 'react'

import { connect } from 'react-redux';
import { ReducersPool } from '../../../reducers';
import { setTitle } from '../mainActions';
import { setTab } from './homeActions';
import WeekTabs from '../../../shared/components/WeekTabs/WeekTabs';
import { homeState } from './homeReducer';

interface Props extends homeState {
  setTitle: Function;
  setTab: Function;
}

class HomePage extends PureComponent<Props> {

  constructor(props: Props) {
    super(props);
    this.props.setTitle('Home');
  }

  render(): ReactNode {
    const { setTab, tabIndex } = this.props;

    return (
      <main className="Home">
        <article className="Center-container-horizontal s800">
          <WeekTabs index={tabIndex} onChange={setTab}>
            <div>tab 1<br /> tab 1<br /> tab 1<br /> tab 1</div>
            <div>tab 2<br /> tab 2<br /> tab 2<br /> tab 2</div>
            <div>tab 3<br /> tab 3<br /> tab 3<br /> tab 3</div>
            <div>tab 4<br /> tab 4<br /> tab 4<br /> tab 4</div>
            <div>tab 5<br /> tab 5<br /> tab 5<br /> tab 5</div>
          </WeekTabs>
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
  setTab
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
