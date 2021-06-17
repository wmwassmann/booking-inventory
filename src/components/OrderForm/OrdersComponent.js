import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import useStyles from './OrdersStyle';
// import './css/auth-style.css';
import Input from './OrdersInput';
// import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes';
import { signup, signin } from '../../actions/auth'


import { GoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router-dom'
import { Dropdown, DropdownButton } from 'react-bootstrap';

const initialState = {
    employeeUsername: '',
    email: '',
    password: '',
    passwordConfirm: '',
    employeeId: '',
    employeePosition: ''

}

const OrdersForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [position, setPosition] = useState();
    const [form, setForm] = useState(initialState);
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()
    const currentPosition = JSON.parse(localStorage.getItem('currentEmployee'))

    // let selectPosition = JSON.parse(localStorage.getItem('currentEmployee'))


    // selectPosition = currentPosition?.employee.result[1].email

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }


    // Signup and signin toggle
    const handleSubmit = (e) => {
        // Axios here
        e.preventDefault()
        console.log(form)
        if (isSignup) {
            dispatch(signup(form, history))

            console.log(initialState)
            if (currentPosition === 'Employee') {
                history.push('/employeeInventory')
            } else {
                history.push('/inventory')
            }

        } else {
            console.log(initialState)

            dispatch(signin(form))

            setPosition(currentPosition)
            console.log(position, "Here")
            if (currentPosition === 'employee') {
                history.push('/employeeInventory')
            } else {
                history.push('/inventory')
            }
        }

    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }



    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false)
    }

    return (
        <div className='auth-background'>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Typography component="h1" variant="h5">Inventory Management</Typography>

                    <form className={classes.form} onSubmit={handleSubmit}>
                        <div className={classes.formBase}>
                            <Grid container spacing={2}>
                                <Input className={classes.text} name='itemSupplier' label='Supplier' handleChange={handleChange} />
                                <Input className={classes.text} name='itemLocationInStorage' label='Location in Storage Unit' handleChange={handleChange} />
                                <Input className={classes.text} name='itemNam' label='Product Name' handleChange={handleChange} />
                            </Grid>
                        </div>
                        <div className={classes.formInfo}>
                            <Grid container spacing={2}>
                                <Input className={classes.text} name='itemQuantity' label='Quantity' handleChange={handleChange} type='Quantity' />
                                <Input className={classes.text} name='itemPrice' label='Price' handleChange={handleChange} type='Price' />
                                <Input className={classes.text} name='itemReorderPackaging' label='Re-Order Packaging Type' handleChange={handleChange} />
                                <Input className={classes.text} name='itemCostPerUnit' label='Cost Per Unit' handleChange={handleChange} />
                                <Input className={classes.text} name='itemCostPerSpareKit' label='Cost Per Spare Kit' handleChange={handleChange} />
                                <Input className={classes.text} name='itemCostPerKit' label='Cost Per Kit' handleChange={handleChange} />
                                <Input className={classes.text} name='itemLocation' label='Location in Unit' handleChange={handleChange} />


                            </Grid>
                        </div>
                        <div className={classes.formMaintenance}>
                            <Grid container spacitng={2}>

                                <Input className={classes.text} name='maintSpareKit' label='Spare Kit' handleChange={handleChange} />
                                <Input className={classes.text} name='maintItemsReOrder' label='Re-order' handleChange={handleChange} />
                                <Input className={classes.text} name='itemLocation' label='Location in Unit' handleChange={handleChange} />
                                <Input className={classes.text} name='itemLocation' label='Location in Unit' handleChange={handleChange} />
                                <Input className={classes.text} name='itemLocation' label='Location in Unit' handleChange={handleChange} />
                                <Input className={classes.text} name='itemLocation' label='Location in Unit' handleChange={handleChange} />
                                <Input className={classes.text} name='itemLocation' label='Location in Unit' handleChange={handleChange} />
                                <Input className={classes.text} name='itemLocation' label='Location in Unit' handleChange={handleChange} />
                            </Grid>
                        </div>
                        <Button type='submit' fullWidth varient='contained' color='primary' className={classes.submit}>
                            Submit
                        </Button>





                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default OrdersForm;

