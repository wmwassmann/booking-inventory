
import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useStyles from './css/Style';
import { NavLink } from 'react-router-dom'
import './css/nav-style.css'


const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentEmployee')))
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();


    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/')        
        setUser(null)
    }
    useEffect(() => {
     
        setUser(JSON.parse(localStorage.getItem('currentEmployee')))
    }, [location])



    return (
        <div className='nav-wrapper'>
          
            
            <AppBar className={classes.appBar} position="static" color="inherit">
            <NavLink to='/main' exact>Back</NavLink>     
                <div className={classes.brandContainer}>
                    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center"></Typography>
                    

                </div>
                <Toolbar className={classes.toolbar}>
                    {user?.result ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user?.result.employeeUsername}></Avatar>
                            <Typography className={classes.userName} variant="h6">{user?.result.employeeUsername}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    )}
                    
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Navbar
