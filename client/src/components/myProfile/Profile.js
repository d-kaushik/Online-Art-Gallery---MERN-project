import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import ProfileMenu from "./ProfileMenu";
import MyProfile from "./MyProfileComp";
import { Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../actions/itemActions";

// import Footer from "../components/Footer";
export class Profile extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <br></br>
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <ProfileCard username={this.props.users.name}></ProfileCard>
              <div className="card mt-3">
                <ProfileMenu></ProfileMenu>
              </div>
            </div>
            <div className="col-md-8">
              <MyProfile></MyProfile>
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

export default connect(mapStateToProps, { getUser })(Profile);