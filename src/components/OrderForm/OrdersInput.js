
import React from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const OrdersInput = ({ name, handleChange, label, autoFocus, type, handleShowPassword }) => (

  <TextField
    name={name}
    onChange={handleChange}
    className='text-box'
    variant="outlined"
    label={label}
    // autoFocus={autoFocus}
    type={type}
    
    InputProps={name === 'password' ? {
      endAdornment: (
        <InputAdornment position="end">
          <IconButton onClick={handleShowPassword}>
            {type === 'password' ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      ),
    } : null}
  />

);

export default OrdersInput;