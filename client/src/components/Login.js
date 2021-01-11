import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../actions/itemActions";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errormessage: "",
      err_mail: "",
      err_pass: "",
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    let err_mail = "";
    let err_pass = "";
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
    if (nam === "password") {
      if (val.length < 6) {
        err_pass = <small style={{ color: "red" }}>Enter valid password</small>;
      }
    }
    this.setState({ err_mail: err_mail });
    this.setState({ err_pass: err_pass });
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
  };
  handleClick = () => {
    const verifyUser = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.getUser(verifyUser);
    alert("Successfully Login ! ");
    console.log("this.props.users.name" + this.props.users.name);
    console.log("this.props.users" + this.props.users.email);
    this.setState({
      email: this.props.users.name,
      password: this.props.users.name,
    });
  };
  render() {
    return (
      <div>
        <br></br>
        <div className="container-sm border pt-3" style={{ maxWidth: "500px" }}>
          <div>
            <h5
              class="card-header"
              style={{ textAlign: "center", backgroundColor: "white" }}
            >
              LOGIN
            </h5>
            <div class="card-body">
              <div>
                <div class="form-group">
                  <label>Email address:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.myChangeHandler}
                    value={this.state.email}
                  />
                  {this.state.err_mail}
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={this.myChangeHandler}
                    value={this.state.password}
                  />

                  {this.state.err_pass}
                </div>
                <div className="row md-4">
                  <div class="col">
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>
                <br></br>
                <div class="d-flex justify-content-center">
                  <button
                    type="submit"
                    class="btn btn-outline-primary btn-block mb-2"
                    onClick={() => {
                      this.handleClick();
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>

              <br></br>
              <div class="text-center">
                <p>
                  Not a member?{" "}
                  <a>
                    <Link to="/signup">
                      <u style={{ color: "#007BFF" }}>
                        <strong style={{ color: "#007BFF" }}>Register</strong>
                      </u>
                    </Link>
                  </a>
                </p>
                <p>or sign up with:</p>
                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { getUser })(Login);
