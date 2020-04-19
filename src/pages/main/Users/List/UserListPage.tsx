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
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import useStyles from './styles';

interface Props {
  title: string;
  loading: boolean;
  users: any[];
  onNew: Function;
}

const UserListPage: FC<Props> = (props: Props) => {
  const {
    title,
    loading,
    users,
    onNew,
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
            <IconButton onClick={() => onNew()}>
              <AddIcon />
            </IconButton>
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

                  <TableCell>
                    {user.email}
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
