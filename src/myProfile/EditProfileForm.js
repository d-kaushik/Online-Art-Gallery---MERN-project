import React, { Component } from "react";
import { Link } from "react-router-dom";
import dummy from "../components/dummyAvatar.png";
import "../components/Signup.css";
export class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err_mail: "",
      err_pass1: "",
      err_pass2: "",
      err_name: "",
      err_phone: "",
      pass1: "",
      profileImg: dummy,
    };
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    let err_mail = "";
    let err_name = "";
    let err_phone = "";
    if (nam === "name") {
      if (!val.match(/^[a-zA-Z]+$/)) {
        err_name = (
          <small style={{ color: "red" }}>Numbers are not allowed</small>
        );
      }
    }
    if (nam === "name") {
      if (val == "") {
        err_name = (
          <small style={{ color: "red" }}>Name is compulsory field</small>
        );
      }
    }
    if (nam === "email") {
      if (val == "") {
        err_mail = (
          <small style={{ color: "red" }}>Email is compulsory field</small>
        );
      }
    }
    if (nam === "email") {
      let lastAtPos = val.lastIndexOf("@");
      let lastDotPos = val.lastIndexOf(".");
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          val.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          val.length - lastDotPos > 2
        )
      ) {
        err_mail = <small style={{ color: "red" }}>Invalid Email</small>;
      }
    }
    if (nam === "phone") {
      if (val == "") {
        err_phone = (
          <small style={{ color: "red" }}>
            Mobile number is compulsory field
          </small>
        );
      } else if (val.length != 10) {
        err_phone = (
          <small style={{ color: "red" }}>Invalid mobile number</small>
        );
      }
      if (val.match(/^[a-zA-Z]+$/)) {
        err_phone = (
          <small style={{ color: "red" }}>Letters are not allowed</small>
        );
      }
    }
    let err_pass1 = "";
    if (nam === "pass1") {
      if (val.length < 6) {
        err_pass1 = (
          <small style={{ color: "red" }}>
            Minimum six letters are require
          </small>
        );
      } else if (val.length > 10) {
        err_pass1 = (
          <small style={{ color: "red" }}>Password is too long</small>
        );
      }
      this.setState({ pass1: val });
    }
    this.setState({ err_mail: err_mail });
    this.setState({ err_name: err_name });
    this.setState({ err_pass1: err_pass1 });
    this.setState({ errormessage: err });
    this.setState({ err_phone: err_phone });
    this.setState({ [nam]: val });
  };



  render() {
    const profileImg = this.state.profileImg;
    return (
      <div>
        <div
          className="container-sm border pt-3 hoverable"
          style={{ maxWidth: "500px" }}
        >
          <h5
            class="card-header"
            style={{ textAlign: "center", backgroundColor: "white" }}
          >
            Create Account
          </h5>
          <div>
            <div className="container_profile">
              <div className="img-holder">
                <img src={profileImg} alt="" id="img" className="img" />
              </div>
              <input
                type="file"
                accept="image/*"
                name="image-upload"
                id="input"
                onChange={this.imageHandler}
              />
              <label className="image-upload" htmlFor="input">
                <span class="badge bg-primary">Change Photo</span>
              </label>
            </div>
          </div>
          <div class="card-body">
            <form method="post">
              <div class="form-group">
                <label>Full name:</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  onChange={this.myChangeHandler}
                />
                {this.state.err_name}
              </div>
              <div class="form-group">
                <label>Email address:</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  onChange={this.myChangeHandler}
                />
                {this.state.err_mail}
              </div>
              <div class="form-group">
                <label>Mobile number:</label>
                <div class="form-group input-group">
                  <input
                    type="text"
                    value="+91"
                    disabled
                    style={{
                      width: "10%",
                      borderRadius: "3px",
                      paddingLeft: "5px",
                    }}
                  />
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    onChange={this.myChangeHandler}
                  />
                </div>
                {this.state.err_phone}
             
              

                  
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-outline-primary">
                 SAVE CHANGES
                </button>
              </div>
            </form>

            <br></br>
           
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfileForm ;