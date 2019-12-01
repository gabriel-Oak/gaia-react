import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


interface Props {
  open: boolean
  toggleDrawer: any;
}

const SideDrawer = (props: Props) => {
  const { open, toggleDrawer } = props

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      Teste teste teste teste teste
    </SwipeableDrawer>
  );
}

export default SideDrawer;

