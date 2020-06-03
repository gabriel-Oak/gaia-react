import React, { FC, useState } from 'react';
import { Form, reduxForm, Field, InjectedFormProps } from 'redux-form';
import {
  Card,
  Container,
  CardHeader,
  CardContent,
  Button,
  CardActions,
  LinearProgress,
  Box
} from '@material-ui/core';
import WeekTabs from '../../../../shared/components/WeekTabs/WeekTabs';
import MenuForm from './MenuForm';

// import useStyles from './styles';

interface Props {
  loading?: boolean;
  menus: any[]
}

const MenusFormPage: FC<Props> = (props: any) => {
  const {
    menus
  } = props;
  console.log(menus);

  const [currentTab, setTab] = useState(0);

  return (
    <Box maxWidth="800px" margin="auto">
      <Card>

        <WeekTabs index={currentTab} onChange={setTab}>
          {menus.map((menu: any) => (
            <MenuForm key={menu.id} menu={menu} />
          ))}
        </WeekTabs>
      </Card >
    </Box>
  );
}

export default MenusFormPage;
