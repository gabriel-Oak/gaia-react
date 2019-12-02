import React, { PureComponent, ReactNode } from 'react'

import { setTitle } from '../mainActions';
import { ReducersPool } from '../../../reducers';

interface Props {
  setTitle: Function;
}

class NotFoundPage extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  render(): ReactNode {
    return (
      <main className="NotFound">
        Not found:
      </main>
    );
  }
}

const mapStateToProps = (state: ReducersPool) => {
  return {};
};

const mapDispatchToProps = {
  setTitle,
};

export default NotFoundPage
