import React from 'react';
// import Home from './Home'
import Login from './Login/Login'

import logo from './logo.svg';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import './App.css';   

class App extends React.Component  {
  
 render(){ 
   return ( 
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={()=>
          <Login/>}/>
        </Switch>
        
      </Router>
      
    </div>
  );
 }
}

export default App;