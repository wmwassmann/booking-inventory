import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import useStyles from './Style';
import './css/auth-style.css';
import Input from './Input';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes';
import { signup, signin } from '../../actions/auth'
import Mascot from './img/dwarf-mage-1.png'

import { GoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router-dom'

const initialState = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''

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
            dispatch(signup(form, history))
        } else {
            dispatch(signin(form, history))
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

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: AUTH, data: { result, token } });
            history.push('/')
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
                <img className={classes.mascot}src={Mascot} alt='mascot'/>
                <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in'}</Typography>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name='username' handleChange={handleChange} label='User Name' autoFocus half />
                            </>
                        )}
                        <Input className={classes.text} name='email' label='Email Address' handleChange={handleChange} type='email' />
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
                            <Button className={classes.text}  onClick={switchMode}>
                                { isSignup ? 'Already have an account?' : 'Don\'t have an account?' }
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