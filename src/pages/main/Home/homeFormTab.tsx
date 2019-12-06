import React from 'react'
import RenderTextField from '../../../shared/components/renderTextField/renderTextField';
import { Field } from 'redux-form';
import { CardContent, List, ListItem, Checkbox } from '@material-ui/core';
import Menu from '../../../shared/interfaces/Menu';

interface Props {
  name: string;
  loading?: boolean;
  menu: Menu;
}

const HomeFormTab = (props: Props) => {
  const { name, loading, menu } = props;

  return (
    <CardContent className="Home_form_tab">

      <List>

        <ListItem className="Home_form_tab_ListItem">
          <span>Prato Principal</span>

          <Field
            name={name}
            label="Prato Principal"
            component={RenderTextField}
            disabled={loading}
          />
        </ListItem>

        <ListItem className="Home_form_tab_ListItem">
          <span>Guarnição 1</span>

          <span>{menu.guarnicao1}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem">
          <span>Guarnição 2</span>

          <span>{menu.guarnicao2}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem">
          <span>Salada</span>

          <span>{menu.salada}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem">
          <span>Sobremesa</span>

          <span>{menu.sobremesa}</span>
        </ListItem>

        <ListItem className="Home_form_tab_ListItem">
          <span>Vou almoçar fora</span>

          <Checkbox />
        </ListItem>

      </List>

    </CardContent>
  );
}

export default HomeFormTab;
