import React, { SyntheticEvent, useState } from 'react';
import {
  CardContent, TextField, Grid, Box, Button, CardActions
} from '@material-ui/core';

interface Props {
  menu: any
  onSubmit: Function
}

const MenuForm: React.FC<Props> = ({
  menu,
  onSubmit
}) => {
  const [form, setForm]: any[] = useState(menu);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const dishes = Object.keys(form)
      .filter(key => !['date', 'id'].includes(key))
      .map(key => ({
        name: form[key],
        type: +key.substring(0, 1)
      }));
    onSubmit({
      ...menu,
      dishes
    })
  }

  const handleChange = ({ target }: any) => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              onChange={handleChange}
              value={form['1-pratoPrincipal']}
              name="1-pratoPrincipal"
              required
              variant="outlined"
              fullWidth
              label="Prato Principal"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              onChange={handleChange}
              value={form['5-opcao1']}
              name="5-opcao1"
              required
              variant="outlined"
              fullWidth
              label="Opção 1"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              onChange={handleChange}
              value={form['5-opcao2']}
              name="5-opcao2"
              required
              variant="outlined"
              fullWidth
              label="Opção 2"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              onChange={handleChange}
              value={form['2-guarnicao1']}
              name="2-guarnicao1"
              required
              variant="outlined"
              fullWidth
              label="Guarnição 1"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              onChange={handleChange}
              value={form['2-guarnicao2']}
              name="2-guarnicao2"
              required
              variant="outlined"
              fullWidth
              label="Guarnição 2"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              onChange={handleChange}
              value={form['3-salada1']}
              name="3-salada1"
              required
              variant="outlined"
              fullWidth
              label="Salada 1"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              onChange={handleChange}
              value={form['3-salada2']}
              name="3-salada2"
              required
              variant="outlined"
              fullWidth
              label="Salada 2"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              onChange={handleChange}
              value={form['4-sobremesa']}
              name="4-sobremesa"
              required
              variant="outlined"
              fullWidth
              label="Sobremesa"
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Box ml="auto">
          <Button color="primary" variant="contained" type="submit">
            Salvar
          </Button>
        </Box>
      </CardActions>
    </form>
  );
}

export default MenuForm;