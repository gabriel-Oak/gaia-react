import React from 'react'
import WeekTabs from '../../../shared/components/WeekTabs/WeekTabs';
import { reduxForm } from 'redux-form';
import HomeFormTab from './homeFormTab';
import { Button, Card, CardActions } from '@material-ui/core';

const HomeForm = (props: any) => {
  const { handleSubmit, onSubmit, tabIndex, setTab, loading } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>

        <WeekTabs index={tabIndex} onChange={setTab}>

          <HomeFormTab name='troca0' loading={loading} />
          <HomeFormTab name='troca1' loading={loading} />
          <HomeFormTab name='troca2' loading={loading} />
          <HomeFormTab name='troca3' loading={loading} />
          <HomeFormTab name='troca4' loading={loading} />

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
    </form>
  );
}

export default reduxForm({ form: 'homeForm' })(HomeForm);
