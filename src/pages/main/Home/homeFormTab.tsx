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
    setValue(1);
    exchangeDish({
      menuId: menu.id,
      dishId: 1
    })
  };

  return (
    <div className="Home_form_tab">

      <List disablePadding dense>

        <ListItem className="Home_form_tab_ListItem" dense>
          <span>Prato Principal</span>

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
          <span>Guarnição 1</span>

          <span>{menu.guarnicao1.name}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <span>Guarnição 2</span>

          <span>{menu.guarnicao2.name}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <span>Salada 1</span>

          <span>{menu.salada1.name}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <span>Salada 2</span>

          <span>{menu.salada2.name}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <span>Sobremesa</span>

          <span>{menu.sobremesa.name}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <span>Vou almoçar fora</span>

          <Checkbox onClick={handleCheck} checked={value === 1} />
        </ListItem>

      </List>

    </div>
  );
}

export default HomeFormTab;
