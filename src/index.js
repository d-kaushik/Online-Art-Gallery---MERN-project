import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {Navbar, NavDropdown, FormControl, Form, Nav, Button} from 'react-bootstrap'
import { Link,Switch } from 'react-router-dom'
import Explore from './components/Explore';
import ArtPost from './components/ArtPost';
import Login from './components/Login';
import Signup from './components/Signup';
import ContactUs from './components/ContactUs';
import NavbarComp from './components/NavbarComp';
import Dashboard from './components/Dashboard';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';

const routing = (
  <Router>


      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        
          <ul class="navbar-nav">
            
            <li class="nav-item active">
              <a class="nav-link">
              <Link to="/">Home</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link">
              <Link to="/Add-Art">Add Art</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link">
              <Link to="/contactUs">Contactus</Link></a>
            </li>
            <li class="nav-item"><a class="nav-link"><Link to="/login">
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
              LOGIN / SIGNUP</button></Link></a></li>
             <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Profile
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            
          <a class="dropdown-item">
          <li class="nav-item"><a class="nav-link"><Link to="/Login">
           
              LOGIN / SIGNUP</Link></a></li></a>

          <a class="dropdown-item"><Link to="/Add-Art">Add Art</Link></a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" ><Link to="/Add-Art">Add Art</Link></a>
        </div>
        </a></li>
          </ul>
        </div>
      </nav> */}
  <NavbarComp></NavbarComp>
  <Switch>
  <Route exact path="/" component={App} />
  <Route path="/Add-Art" component={ArtPost} />
  <Route path="/Explore" component={Explore}/>
  <Route path="/login" component={Login}/>
  <Route path="/signup" component={Signup}/>
  <Route path="/contactUs" component={ContactUs}/>
  <Route path="/dashboard" component={Dashboard}/>
  <Route path="/wishlist" component={Wishlist}/>
  <Route path="/cart" component={Cart}/>
  </Switch>
  </Router>)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
