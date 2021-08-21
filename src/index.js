import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FarmerSignUp from "./components/farmer_signup" 
import {BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Welcome from "./components/welcome"
import FarmerLogin from "./components/farmer_login"
import FarmerHome from "./components/farmer_home";

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <Switch>
      <Route path="/" exact>
        <Welcome></Welcome>
      </Route>
      <Route path="/farmer/signup" exact>
        <FarmerSignUp></FarmerSignUp>
      </Route>
      <Route path="/farmer/login" exact>
       <FarmerLogin></FarmerLogin>
      </Route>
      <Route path="/farmer" exact>
      <FarmerHome></FarmerHome>
      </Route>
    </Switch>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

