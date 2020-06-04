import React, { FC } from 'react';
import {
  Container,
  Card,
  LinearProgress,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Box,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Create, Delete } from '@material-ui/icons';

import useStyles from './styles';

interface Props {
  title: string;
  loading: boolean;
  users: any[];
  onNew: Function;
  onEdit: Function;
  onDestroy: Function;
}

const UserListPage: FC<Props> = (props: Props) => {
  const {
    title,
    loading,
    users,
    onNew,
    onEdit,
    onDestroy,
  } = props;

  const classes = useStyles();

  return (
    <Container
      className={classes.root}
      maxWidth="sm"
    >
      <Card>
        {
          loading && <LinearProgress color="secondary" />
        }

        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>

          <div className={classes.actionsContainer}>
            <Tooltip title="Criar novo">
              <IconButton onClick={() => onNew()}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={1}>
                Nome
              </TableCell>

              <TableCell colSpan={2}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              users.map((user, index: number) => (
                <TableRow key={index}>
                  <TableCell>
                    {user.name}
                  </TableCell>

                  <TableCell >
                    {user.email}
                  </TableCell>

                  <TableCell>
                    <Box textAlign="right">
                      <Tooltip title="Editar usuário">
                        <span>
                          <IconButton
                            onClick={() => onEdit(user.id)}
                            disabled={loading}
                            color="primary"
                          >
                            <Create />
                          </IconButton>
                        </span>
                      </Tooltip>

                      <Tooltip title="Excluir usuário">
                        <span>
                          <IconButton
                            onClick={() => onDestroy(user.id)}
                            disabled={loading}
                          >
                            <Delete style={{ color: '#f44336' }} />
                          </IconButton>
                        </span>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Card >
    </Container >
  );
}

export default UserListPage;
