import React, { Component } from "react";

export class ProfileCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="Admin"
              className="rounded-circle"
              width={150}
            />
            <div className="mt-3">
              <h4>{this.props.username}</h4>
              <button className="btn btn-outline-primary">LogOut</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;