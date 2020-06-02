import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MenusFormPage from './MenusFormPage';
import { ReducersPool } from '../../../../reducers';
import { setTitle } from '../../mainActions';

// import * as actions from './actions';
import { History } from 'history';
interface Props {
  setTitle: Function;
};

const MenusFormContainer = (props: Props) => {
  const {
    setTitle,
  } = props;

  useEffect(() => {
    setTitle('Cardapios');
  }, [setTitle]);


  return (
    <MenusFormPage />
  );
}

const mapStateToProps = (state: ReducersPool) => {
  const { user: { form } } = state;
  return form
};

const mapDispatchToProps = {
  setTitle,
  // ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenusFormContainer);
