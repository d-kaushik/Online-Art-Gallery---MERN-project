import React, { Component } from "react";
import ChangePassComp from "./ChangePassComp";
import ProfileCard from "./ProfileCard";
import ProfileMenu from "./ProfileMenu";
import { connect } from "react-redux";
import { getUser } from "../../actions/itemActions";
export class ChangePass extends Component {
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
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div className="row">
                    <ChangePassComp></ChangePassComp>
                  </div>
                  <div className="row"></div>
                </div>
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

export default connect(mapStateToProps, { getUser })(ChangePass);