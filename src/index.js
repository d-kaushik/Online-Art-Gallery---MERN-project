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
import Profile from './components/Profile';
import NotFound from './components/NotFound';

const routing = (
  <Router>
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
  <Route path="/profile" component={Profile}/>
  <Route component={NotFound}/>
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
