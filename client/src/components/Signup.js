import React, { Component } from "react";
import { Link } from "react-router-dom";
import dummy from "./dummyAvatar.png";
import "./Signup.css";

import { connect } from "react-redux";
import { addUser } from "../actions/itemActions";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err_mail: "",
      err_pass1: "",
      err_pass2: "",
      err_name: "",
      err_phone: "",
      pass1: "",
      user_name: "",
      email: "",
      password: "",
      phone: "",
      nameCheck: false,
      emailCheck: false,
      phoneCheck: false,
      passCheck: false,
      pass1Check:false,
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
  myNameChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err_name = "";
    if (!isNaN(val)) {
        err_name = (
          <small style={{ color: "red" }}>Numbers are not allowed</small>
        );
    }
    else {
      this.setState({nameCheck:true});
    }
    if (val == "") {
        err_name = (
          <small style={{ color: "red" }}>Name is compulsory field</small>
        );
    }
    this.setState({ err_name: err_name });
    this.setState({ [nam]: val });
  }
  myPhoneChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err_phone = "";
    if (val == "") {
        err_phone = (
          <small style={{ color: "red" }}>
            Mobile number is compulsory field
          </small>
        );
    }
    else if (val.length != 10 ) {
        err_phone = (
          <small style={{ color: "red" }}>Invalid mobile number</small>
        );
    }
    else if (val.match(/^[a-zA-Z]+$/)) {
        err_phone = (
          <small style={{ color: "red" }}>Letters are not allowed</small>
        );
    }
    else {
      this.setState({phoneCheck:true})
    }
    this.setState({ [nam]: val });
    this.setState({ err_phone: err_phone });
    
  }

  myEmailChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err_mail = "";
    if (val == "") {
        err_mail = (
          <small style={{ color: "red" }}>Email is compulsory field</small>
        );
    }
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
      )
      {
        err_mail = <small style={{ color: "red" }}>Invalid Email</small>;
      }
      else {
        this.setState({emailCheck:true})
    }
    this.setState({ [nam]: val });
    this.setState({ err_mail: err_mail });
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
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
      else {
        this.setState({pass1Check:true})
      }
      this.setState({ pass1: val });
    }
    this.setState({ err_pass1: err_pass1 });
    
  };

  verifyPassword = (event) => {
    let val = event.target.value;
    let err_pass2 = "";

    if (this.state.pass1 === val) {
      err_pass2 = <small style={{ color: "green" }}>Matched</small>;
      this.setState({passCheck:true})
    } else {
      err_pass2 = <small style={{ color: "red" }}>Password not matching</small>;
    }
    this.setState({ err_pass2: err_pass2, password: val });
  };

  handleClick = () => {
    if (this.state.user_name === "") {
      alert('Name is compulsory field')
    }
    else if (!isNaN(this.state.user_name)) {
      alert('Numbers are not allowed in Name field')
    }
    else if (this.state.email === "") {
      alert('Email is compulsory')
    }

    const newUser = {
      name: this.state.user_name,
      email: this.state.email,
      number: this.state.phone,
      password: this.state.password,
    };

    this.props.addUser(newUser);

    console.log("user" + this.props.users);
    alert("User Added Successfully ! ");
    

    this.setState({
      user_name: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  render() {
    const profileImg = this.state.profileImg;
    return (
      <div>
        <br></br>
        <div
          className="container-sm border pt-3 shadow"
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
                <span class="badge bg-primary">Upload Image</span>
              </label>
            </div>
          </div>
          <div class="card-body">
            <div>
              <div class="form-group">
                <label>Full name:</label>
                <input
                  type="text"
                  class="form-control"
                  name="user_name"
                  id="name"
                  onChange={this.myNameChangeHandler}
                  value={this.state.user_name}
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
                  onChange={this.myEmailChangeHandler}
                  value={this.state.email}
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
                    onChange={this.myPhoneChangeHandler}
                    value={this.state.phone}
                  />
                </div>
                {this.state.err_phone}
              </div>
              <div class="row" style={{ marginBottom: "20px" }}>
                <div class="col-sm">
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control"
                    name="pass1"
                    placeholder="Only 6-10 characters"
                    onChange={this.myChangeHandler}
                  />

                  {this.state.err_pass1}
                </div>
                <div class="col-sm">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    name="pass2"
                    onChange={this.verifyPassword}
                  />

                  {this.state.err_pass2}
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button
                  type="submit"
                  class="btn btn-outline-primary"
                  onClick={() => {
                    this.handleClick();
                  }}
                disabled={this.state.nameCheck && this.state.emailCheck && this.state.passCheck && this.state.phoneCheck && this.state.pass1Check? false: true}
                >
                  Create Account
                </button>
              </div>
            </div>

            <br></br>
            <label>
              Already have an account?{" "}
              <Link to="/login">
                <u style={{ color: "#007BFF" }}>
                  <strong style={{ color: "#007BFF" }}>LOGIN</strong>
                </u>
              </Link>
            </label>
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { addUser })(Signup);