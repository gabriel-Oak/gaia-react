import React, { PureComponent, ReactNode } from 'react'

import { ReducersPool } from '../../../reducers';
import { setTitle } from '../mainActions';
import { connect } from 'react-redux';
import WeekTabs from '../../../shared/components/WeekTabs/WeekTabs';

interface Props {
  setTitle: Function;
}

class HomePage extends PureComponent<Props> {

  constructor(props: Props) {
    super(props);
    this.props.setTitle('Home');
  }

  render(): ReactNode {
    return (
      <main className="Home">
        <article className="Center-container-horizontal s800">
          <WeekTabs index={2} onChange={() => 1 + 2} />
        </article>
      </main>
    )
  }
}

const mapStateToProps = (state: ReducersPool) => {
  return {};
};

const mapDispatchToProps = {
  setTitle,
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
