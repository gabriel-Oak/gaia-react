import React, { FC, useState } from 'react';
import {
  Card,
  LinearProgress,
  Box
} from '@material-ui/core';
import WeekTabs from '../../../../shared/components/WeekTabs/WeekTabs';
import MenuForm from './MenuForm';

interface Props {
  loading?: boolean;
  menus: any[];
  saveMenu: Function;
}

const MenusFormPage: FC<Props> = (props: any) => {
  const {
    menus, saveMenu, loading
  } = props;

  const [currentTab, setTab] = useState(0);

  return (
    <Box maxWidth="800px" margin="auto">
      <Card>
        {loading && <LinearProgress />}
        <WeekTabs index={currentTab} onChange={setTab}>
          {menus.map((menu: any) => (
            <MenuForm key={menu.id} menu={menu} onSubmit={saveMenu} />
          ))}
        </WeekTabs>
      </Card >
    </Box>
  );
}

export default MenusFormPage;
