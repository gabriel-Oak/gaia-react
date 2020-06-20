import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ExchangesPage from './ExchangesPage';
import { ReducersPool } from '../../../reducers';
import { setTitle } from '../mainActions';
import { getExchanges } from './actions';

interface Props {
  setTitle: Function;
  menus: any[];
  loading: boolean;
  getExchanges: Function;
}

const ExchangesContainer: React.FC<Props> = (props) => {
  const { setTitle, getExchanges } = props;

  useEffect(() => {
    setTitle('Trocas');
    getExchanges();
  }, [setTitle, getExchanges]);

  return (
    <ExchangesPage
      {...props}
    />
  );
}

const mapStateToProps = (state: ReducersPool) => ({
  ...state.exchanges,
});


export default connect(mapStateToProps, {
  setTitle,
  getExchanges,
})(ExchangesContainer);