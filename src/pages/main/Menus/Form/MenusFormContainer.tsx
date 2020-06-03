import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MenusFormPage from './MenusFormPage';
import { ReducersPool } from '../../../../reducers';
import { setTitle } from '../../mainActions';

import * as actions from './actions';
// import { History } from 'history';
interface Props {
  setTitle: Function;
  getMenus: Function;
  menus: any[];
};

const MenusFormContainer = (props: Props) => {
  const {
    setTitle,
    getMenus,
    menus
  } = props;

  useEffect(() => {
    setTitle('Cardapios');
    getMenus();
  }, [setTitle, getMenus]);


  return (
    <MenusFormPage
      menus={menus}
    />
  );
}

const mapStateToProps = (state: ReducersPool) => {
  const { menu: { form } } = state;
  return form
};

const mapDispatchToProps = {
  setTitle,
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenusFormContainer);
