import React, { Component } from "react";
import { Link } from "react-router-dom";
export class ProfileMenu extends Component {
  render() {
    return (
      <div className="card mt-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item ">
            <h6>
              <Link to="/profile">My Profile</Link>
            </h6>
          </li>

          <li className="list-group-item ">
            <h6>
              <Link to="/add-creativity">Add new Creativity</Link>
            </h6>
          </li>
          <li className="list-group-item ">
            <h6>
              <Link to="/change-password">Change Password</Link>
            </h6>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProfileMenu;
