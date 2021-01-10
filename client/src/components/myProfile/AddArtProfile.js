import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import ProfileMenu from "./ProfileMenu";
import AddArtFormProfile from "./AddArtFormProfile";
import { Link, useLocation } from "react-router-dom";
const AddArtProfile = () => {
  let location = useLocation();

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
            <AddArtFormProfile toBeUpdate={location.state}></AddArtFormProfile>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default AddArtProfile;