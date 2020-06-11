import React from 'react'
import { Field } from 'redux-form';
import { CardContent, List, ListItem, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Menu from '../../../shared/interfaces/Menu';
import RenderSelectField from '../../../shared/components/renderSelectField/renderSelectField';

interface Props {
  name: string;
  loading?: boolean;
  menu: any;
}

const HomeFormTab = (props: Props) => {
  const { name, loading, menu } = props;

  return (
    <div className="Home_form_tab">

      <List disablePadding dense>

        <ListItem className="Home_form_tab_ListItem" dense>
          <span>Prato Principal</span>

          <Select
            onChange={() => { }}
            value={10}
          >
            <MenuItem value={10}>{menu.pratoPrincipal}</MenuItem>
            <MenuItem value={20}>{menu.opcao1}</MenuItem>
            <MenuItem value={30}>{menu.opcao2}</MenuItem>
          </Select>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <span>Guarnição 1</span>

          <span>{menu.guarnicao1}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <span>Guarnição 2</span>

          <span>{menu.guarnicao2}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <span>Salada 1</span>

          <span>{menu.salada1}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <span>Salada 2</span>

          <span>{menu.salada2}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <span>Sobremesa</span>

          <span>{menu.sobremesa}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem" dense>
          <span>Vou almoçar fora</span>

          <Checkbox />
        </ListItem>

      </List>

    </div>
  );
}

export default HomeFormTab;
