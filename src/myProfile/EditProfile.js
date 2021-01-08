import React, { Component } from 'react'

import ProfileCard from './ProfileCard';
import ProfileMenu from './ProfileMenu';
import MyProfile from './MyProfileComp';

import EditProfileForm from './EditProfileForm';
export class EditProfile extends Component {


    render() {
        return (

            <div className="container">
                <br></br>
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <ProfileCard></ProfileCard>
                        <div className="card mt-3">
                            <ProfileMenu></ProfileMenu>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">

                                <div className="row">


                                    <EditProfileForm></EditProfileForm>
                                </div>
                                <div className="row">



                                </div>
                            </div></div></div>
                </div>
            </div>
        )
    }
}

export default EditProfile
