import React from 'react'
import './../css/stock-style.css'
import { TextField, Grid } from '@material-ui/core';

const MasterInventoryInput = ({ name, label, type }) => (

        <Grid item xs={12}>

            <TextField
                name={name}
                className='text-field'
                lable={label}
                variant="outlined"
                required
                fullWidth
                label={label}
                type={type}
            />
        </Grid>
    
);

export default MasterInventoryInput
