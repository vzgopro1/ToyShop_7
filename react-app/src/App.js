import React, {useState, useEffect} from 'react';
import './App.css';
import Coruselapp from './components/Coruselapp';
import Productapp from './components/Productapp';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Login from './components/Login';

// import Button from 'react-bootstrap/Button';

function App() {
    // axios.defaults.xsrfCookieName = 'csrftoken'
    // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
    // const [people, setPeople] = useState([])
      return (
        <BrowserRouter>
          <div className="App">
              <Route exact path="/" component={Coruselapp}></Route>
              <Route exact path="/" component={Productapp}></Route>
              <Route component={Navbar}></Route>
              <Route path="/login" component={Login}></Route> 
          </div>
        </BrowserRouter>
      );
  }

  export default App;