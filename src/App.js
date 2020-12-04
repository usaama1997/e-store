import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

import React,{useEffect} from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  useEffect(() => {
    document.title = "e-store"
  }, []);

  return (

    <Router>
      <div className="App">

        <Switch>

        <Route path= '/Checkout'>
          <Header />
          <Checkout />
        </Route>

        <Route path= '/'>
          <Header />
          <Home />
        </Route>
        
        </Switch>
    </div>
    </Router>
  );
}

export default App;
