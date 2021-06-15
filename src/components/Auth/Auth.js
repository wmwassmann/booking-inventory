import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import useStyles from './Style';
import './css/auth-style.css';
import Input from './Input';
import Icon from './Icon';
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

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [form, setForm] = useState(initialState);
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }


    // Signup and signin toggle
    const handleSubmit = (e) => {
        // Axios here
        e.preventDefault()
        console.log(form)
        if (isSignup) {
            dispatch(signup(form))
            history.push('/main')
        } else {
            dispatch(signin(form))
            history.push('/main')
        }

    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }

    const handleManager = () => {
        setForm({ ...form, employeePosition: 'Manager' })

    }
    const handleEmployee = () => {
        setForm({ ...form, employeePosition: 'Employee' })

    }
    const handlePurchaser = () => {
        setForm({ ...form, employeePosition: 'Purchaser' })

    }

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: AUTH, data: { result, token } });
            history.push('/main')
        } catch (error) {
            console.log(error)
        }

        console.log(res)
    }
    const googleFailure = (error) => {
        console.log(error);
        console.log('Google sign in was unsuccessful')
    }

    return (
        <div className='auth-background'>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>

                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignup && (
                                <>
                                    <Input name='employeeUsername' label='User Name' handleChange={handleChange}  autoFocus half />                                    
                                    <Input className={classes.text} name='email' label='Email Address' handleChange={handleChange} type='email' />
                                    <DropdownButton id="dropdown-basic-button"  title="Dropdown button">
                                        <Dropdown.Item name='employeePosition' onSelect={handleManager}>Manager</Dropdown.Item>
                                        <Dropdown.Item name='employeePosition' onSelect={handleEmployee}>Employee</Dropdown.Item>
                                        <Dropdown.Item name='employeePosition' onSelect={handlePurchaser}>Purchaser</Dropdown.Item>                                       
                                    </DropdownButton>
                                </>
                            )}
                            <Input name='employeeId' label='Employee Id' handleChange={handleChange} type='id' />
                            <Input className={classes.text} name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : "password"} handleShowPassword={handleShowPassword} />
                            {isSignup && <Input name='passwordConfirm' label='Repeat Password' handleChange={handleChange} type='password' />}
                        </Grid>
                        <Button type='submit' fullWidth varient='contained' color='primary' className={classes.submit}>
                            {isSignup ? 'Sign Up' : "Sign In"}
                        </Button>

                        <GoogleLogin
                            clientId='176000713176-nuslq6vnk8tej0oe30hlie8ctb0k65vi.apps.googleusercontent.com'
                            render={(renderProps) => (
                                <Button
                                    className={classes.googleButton}
                                    color='primary'
                                    fullWidth
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    startIcon={
                                        <Icon />
                                    }
                                >
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy='single_host_origin'
                        />

                        <Grid container justify={'flex-end'}>
                            <Grid item>
                                <Button className={classes.text} onClick={switchMode}>
                                    {isSignup ? 'Already have an account?' : 'Don\'t have an account?'}
                                </Button>

                            </Grid>
                        </Grid>


                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default Signup;