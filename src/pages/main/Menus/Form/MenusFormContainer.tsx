import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MenusFormPage from './MenusFormPage';
import { ReducersPool } from '../../../../reducers';
import { setTitle } from '../../mainActions';

import * as actions from './actions';
interface Props {
  setTitle: Function;
  getMenus: Function;
  getDishes: Function;
  menus: any[];
  dishes: any[];
  saveMenu: Function;
  loading: boolean;
};

const MenusFormContainer = (props: Props) => {
  const {
    setTitle,
    getMenus,
    getDishes,
    menus,
    saveMenu,
    loading
  } = props;

  useEffect(() => {
    setTitle('Cardapios');
    getMenus();
    getDishes();
  }, [setTitle, getMenus, getDishes]);


  return (
    <MenusFormPage
      menus={menus}
      saveMenu={saveMenu}
      loading={loading}
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
