import React, { PureComponent, ReactNode } from 'react'

import { setTitle } from '../mainActions';
import { ReducersPool } from '../../../reducers';
import { connect } from 'react-redux';
import { History } from 'history';
import { Typography, Button } from '@material-ui/core';
import { historyTesting } from '../../../shared/testMocks/history';

interface Props {
  setTitle: Function;
  match: {
    isExact: boolean,
    params: any,
    path: string,
    url: string
  };
  history: History | historyTesting;
}

class NotFoundPage extends PureComponent<Props> {
  
  constructor(props: Props) {
    super(props);
    this.props.setTitle('Não Encontrado');
  }

  render(): ReactNode {
    const { match, history } = this.props;

    return (
      <main
        className="NotFound Center-container"
        style={{ textAlign: 'center' }}
      >
        <Typography variant="h1"> 404 </Typography >
        <Typography variant="h3" gutterBottom>{match.url}</Typography>
        <Button
          variant="contained"
          onClick={() => history.goBack()}
        >
          Voltar
        </Button>
      </main >
    );
  }
}

const mapStateToProps = (state: ReducersPool) => {
  return {};
};

const mapDispatchToProps = {
  setTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundPage);
