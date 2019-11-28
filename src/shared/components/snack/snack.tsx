import React from 'react';
import { Snackbar, Button } from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

interface Props {
  open: boolean;
  type?: 'success' | 'error' | 'info' | 'warning';
  message?: string;
  duration?: number;
  closeSnack: any;
}

const Snack = (props: Props) => {
  const {
    open,
    type,
    message,
    duration,
    closeSnack
  } = props

  const icons = {
    success: <CheckCircleIcon />,
    error: <ErrorIcon />,
    warning: <WarningIcon />,
    info: <InfoIcon />
  }

  return (
    <Snackbar
      className={'snack snack_' + type}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={duration}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={
        <span id="message-id">
          {icons[type || 'info']}
          <span className="message_text"> {message} </span>
        </span>
      }
      action={[
        <Button key="undo" color="secondary" size="small" onClick={closeSnack}>
          Fechar
        </Button>
      ]}
    />
  )
}

export default Snack
