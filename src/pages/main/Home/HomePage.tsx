import React, { PureComponent, ReactNode } from 'react'

import { ReducersPool } from '../../../reducers';
import { setTitle } from '../mainActions';
import { connect } from 'react-redux';

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
      <div>Home Page</div>
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
