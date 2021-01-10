import React, { Component } from 'react'
import { Link,Switch } from 'react-router-dom'
export class MyProfile extends Component {
    render() {
        return (
            <div>
         
          <div style={{textAlign:'center'}}>
         <img 
    src={"/assets/logo.png"} 
    style={{ maxWidth: '200px',   maxHeight: '200px' }}/></div>
    <hr></hr>
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
            <label style={{color:'red'}} ><Link to="/edit-profile">Edit Profile</Link></label>
          </div>
        )
    }
}

export default MyProfile
