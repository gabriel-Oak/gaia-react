import React from 'react'
import WeekTabs from '../../../shared/components/WeekTabs/WeekTabs';
import { reduxForm } from 'redux-form';
import HomeFormTab from './homeFormTab';
import { Button, Card, CardActions, CircularProgress } from '@material-ui/core';
import Menu from '../../../shared/interfaces/Menu';

const HomeForm = (props: any) => {
  const { handleSubmit, onSubmit, tabIndex, setTab, loading, menus } = props;
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        loading && !menus.length ?

          <div className="Center-container">
            <CircularProgress size={80} />
          </div> :

          <Card>

            <WeekTabs index={tabIndex} onChange={setTab}>

              {
                menus.map((menu: Menu, index: number) => (
                  <HomeFormTab
                    name={`pratoPrincipal${index}`}
                    menu={menu}
                    loading={loading}
                    key={index}
                  />
                ))
              }

            </WeekTabs>

            <CardActions className="button-container">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                Trocar
              </Button>
            </CardActions>

          </Card>
      }
    </form>
  );
}

export default reduxForm({ form: 'homeForm' })(HomeForm);
