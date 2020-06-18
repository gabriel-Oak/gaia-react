import React from 'react'
import WeekTabs from '../../../shared/components/WeekTabs/WeekTabs';
import { reduxForm } from 'redux-form';
import HomeFormTab from './homeFormTab';
import { Button, Card, CardActions, CircularProgress, LinearProgress } from '@material-ui/core';
import Menu from '../../../shared/interfaces/Menu';
import { connect } from 'react-redux';
import { ReducersPool } from '../../../reducers';
import { exchangeDish } from './homeActions';

let HomeForm: any = (props: any) => {
  const {
    handleSubmit, onSubmit, tabIndex, setTab, loading, menus, exchangeDish,
  } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {loading && !menus.length ? (
        <div className="Center-container">
          <CircularProgress size={80} />
        </div>
      ) : (
          <Card>
            {loading && <LinearProgress color="secondary" />}
            <WeekTabs index={tabIndex} onChange={setTab}>

              {
                menus.map((menu: Menu, index: number) => (
                  <HomeFormTab
                    name={`pratoPrincipal${index}`}
                    menu={menu}
                    loading={loading}
                    key={index}
                    exchangeDish={exchangeDish}
                  />
                ))
              }

            </WeekTabs>
          </Card>
        )}
    </form>
  );
}

const mapStateToProps = (state: ReducersPool) => {
  const { homeReducer: { initialFormValues } } = state;

  return ({
    initialValues: initialFormValues
  });
};

HomeForm = reduxForm({ form: 'homeForm' })(HomeForm);

HomeForm = connect(mapStateToProps, {
  exchangeDish
})(HomeForm);

export default HomeForm;
