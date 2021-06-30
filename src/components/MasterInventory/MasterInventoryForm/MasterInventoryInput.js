import React from 'react'
import './../css/stock-style.css'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

const MasterInventoryInput = ({ name, label, type }) => {
    return (
        <Grid item xs={12}>

            <TextField
                className='text-field'
                name={name}
                lable={label}
                variant="outlined"
                required
                fullWidth
                label={label}
                type={type}
            />
        </Grid>
    )
}

export default MasterInventoryInput
