
// React Junk
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

// Redux actions
import { employee, items } from './actions/auth';

// Routes
import Auth from './components/Auth/Auth';

import MasterInventory from './pages/masterInventory';
import EmployeeInventory from './pages/employeeInventory';
import Accounts from './pages/accounts';

import Contacts from './pages/contacts';

// Styles
import './css/base-style.css'
import 'bootstrap/dist/css/bootstrap.min.css';





const App = () => {

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(employee())
    dispatch(items())
  }, [dispatch])


  return (
    <>
      <Router>
        {/* <Spinner animation="border" /> */}
        <Navbar className='navbar-page' />
        <Switch>        
          <Route exact path='/' component={Auth} />
          <Route exact path='/inventory' component={MasterInventory} />
          <Route exact path='/kit' component={EmployeeInventory}/>
         
          <Route exact path='/accounts' component={Accounts} />
          <Route exact path='/Contacts' component={Contacts} />
        </Switch>

        <div className='footer-page'>
          <Footer />
        </div> 

      </Router>
    </>
  );
}

export default App;
