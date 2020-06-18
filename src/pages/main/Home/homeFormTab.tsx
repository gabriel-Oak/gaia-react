import React, { useState } from 'react'
import { List, ListItem, Checkbox, Select, MenuItem } from '@material-ui/core';

interface Props {
  name: string;
  loading?: boolean;
  menu: any;
  exchangeDish: Function;
}

const HomeFormTab = (props: Props) => {
  const { loading, menu, exchangeDish } = props;
  const [value, setValue] = useState(menu.exchange || menu.pratoPrincipal.id);
  console.log(menu);

  const handleChange = ({ target }: any) => {
    setValue(target.value);
    exchangeDish({
      menuId: menu.id,
      dishId: target.value
    });
  };

  const handleCheck = () => {
    setValue(value !== 1 ? 1 : menu.pratoPrincipal.id);
    exchangeDish({
      menuId: menu.id,
      dishId: value !== 1 ? 1 : menu.pratoPrincipal.id
    })
  };

  return (
    <div className="Home_form_tab">

      <List disablePadding dense>

        <ListItem className="Home_form_tab_ListItem" dense>
          <div>Prato Principal</div>

          <Select
            onChange={handleChange}
            value={value}
            disabled={loading}
          >
            <MenuItem
              value={menu.pratoPrincipal.id}
              style={{ display: menu.pratoPrincipal.id === value ? 'none' : 'static' }}
            >
              {menu.pratoPrincipal.name}
            </MenuItem>
            <MenuItem
              value={menu.opcao1.id}
              style={{ display: menu.opcao1.id === value ? 'none' : 'static' }}
            >
              {menu.opcao1.name}
            </MenuItem>
            <MenuItem
              value={menu.opcao2.id}
              style={{ display: menu.opcao2.id === value ? 'none' : 'static' }}
            >
              {menu.opcao2.name}
            </MenuItem>
          </Select>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <div>Guarnição 1</div>

          <div>{menu.guarnicao1.name}</div>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <div>Guarnição 2</div>

          <div>{menu.guarnicao2.name}</div>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <div>Salada 1</div>

          <div>{menu.salada1.name}</div>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <div>Salada 2</div>

          <div>{menu.salada2.name}</div>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <div>Sobremesa</div>

          <div>{menu.sobremesa.name}</div>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <div>Vou almoçar fora</div>

          <Checkbox onClick={handleCheck} checked={value === 1} color="primary" />
        </ListItem>

      </List>

    </div>
  );
}

export default HomeFormTab;
