import React, { Component } from 'react'
import ChangePassComp from './ChangePassComp'
import ProfileCard from './ProfileCard';
import ProfileMenu from './ProfileMenu';
import MyProfile from './MyProfileComp';
import Footer from '../components/Footer';
export class ChangePass extends Component {
    render() {
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
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div className="row">
                                 <ChangePassComp></ChangePassComp>
                                </div>
                                <div className="row">
                                </div>
                            </div></div></div>
                </div>
            </div>

            </div>
        )
    }
}

export default ChangePass
