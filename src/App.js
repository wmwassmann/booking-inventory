
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

// Styles
import './css/base-style.css'
import 'bootstrap/dist/css/bootstrap.min.css';





const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(items())
  }, [dispatch])



  return (

    <Router>

      <Navbar/>
      <Switch>
        
      <Route exact path='/' component={MainMenu}/>
      <Route exact path='/auth' component={Auth} />
      <Route exact path='/inventory' component={Inventory} />
      </Switch>
      <Footer />
      
    </Router>
  );
}

export default App;
