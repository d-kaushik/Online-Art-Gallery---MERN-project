import React, { Component } from 'react'
import ArtPost from '../components/ArtPost'
import ProfileCard from './ProfileCard';
import ProfileMenu from './ProfileMenu';
import AddArtFormProfile from './AddArtFormProfile';
import Footer from '../components/Footer';
export class AddArtProfile extends Component {
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
    
                <div className="col-md-8">
                <AddArtFormProfile></AddArtFormProfile>
              </div>
            </div>
          </div>
         
          </div>
        )
    }
}

export default AddArtProfile
