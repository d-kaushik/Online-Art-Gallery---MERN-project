import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Signup from './Signup'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {Navbar, NavDropdown, FormControl, Form, Nav, Button} from 'react-bootstrap'
import { Link,Switch } from 'react-router-dom'
export class Profile extends Component {
  
  
    render() {
      const routing = (
        <Router>
        <Route path="/signup" component={Signup}/>
        </Router>)
      
      
        return (
    
      <div className="container">
        <br></br>
        {/* <div className="main-body"> */}
          {/* Breadcrumb */}
          {/* <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li className="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav> */}
          {/* /Breadcrumb */}
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                    <div className="mt-3">
                      <h4>Kaushik Daspute</h4>
                      {/* <p className="text-secondary mb-1">Full Stack Developer</p>
                      <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
                      <button className="btn btn-outline-primary">LogOut</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item ">
                    <h6>My Profile</h6>
                  </li>
                  <li className="list-group-item ">
                    <h6>Dashboard</h6>
                  </li>
                  <li className="list-group-item ">
                    <h6>Add new Creativity</h6>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8">
            <div
              // className="container border pt-3 "
              // style={{ maxWidth: "500px" }}
              >
         

            
              <h5
                class="card-header"
                style={{ textAlign: "center", backgroundColor: "white" }}
              >
                My Profile
              </h5>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Kaushik Daspute
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      kaushik.daspute@lntinfotech.com
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      +91 7030381020
                    </div>
                  </div>
                </div>
              </div>
              <label style={{color:'red'}} ><Link to="/signup">Edit Profile</Link></label>
            </div>
            <div id="service"></div>
          </div>
        </div>
      </div>
        )
    }
}

export default Profile
