
// React Junk
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

// Redux actions
import { items } from './actions/auth';

// Routes
import Auth from './components/Auth/Auth';
import MainMenu from './pages/main';
import Inventory from './pages/inventory';
import EmployeeInventory from './pages/employeeInventory';
import Accounts from './pages/accounts';
import Orders from './pages/orderForm';
import Contacts from './pages/contacts';

// Styles
import './css/base-style.css'
import 'bootstrap/dist/css/bootstrap.min.css';





const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(items())
  }, [dispatch])



  return (
    <>
    <Router>

      <Navbar />
      <Switch>
        <Route exact path='/main' component={MainMenu} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/inventory' component={Inventory} />
        <Route exact path='/employeeInventory' component={EmployeeInventory} />
        <Route exact path='/accounts' component={Accounts} />
        <Route exact path='/orders' component={Orders} />
        <Route exact path='/Contacts' component={Contacts} />
      </Switch>
      <div className='footer'>
        <Footer className='footer'/>
      </div>


    </Router>
    </>
  );
}

export default App;
