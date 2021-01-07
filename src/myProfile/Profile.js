import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Signup from '../components/Signup'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Navbar, NavDropdown, FormControl, Form, Nav, Button } from 'react-bootstrap'
import ProfileCard from './ProfileCard';
import ProfileMenu from './ProfileMenu';
import MyProfile from './MyProfileComp';
import AllArts from '../components/AllArts';
import Footer from '../components/Footer';
export class Profile extends Component {


  render() {
    return (
      <div>
      <div className="container">
            <br></br>
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <ProfileCard></ProfileCard>
                  <div className="card mt-3">
                    <ProfileMenu></ProfileMenu>
                  </div>
                </div>
    
                <div className="col-md-8">
                <MyProfile></MyProfile>
              </div>
            </div>
          </div>
          <Footer></Footer>
          </div>
    )
  }
}

export default Profile
