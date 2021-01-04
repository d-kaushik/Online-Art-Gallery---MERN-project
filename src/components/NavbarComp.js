import React, { Component } from 'react'
import {Navbar, NavDropdown, FormControl, Form, Nav, Button} from 'react-bootstrap'
import { Link,Switch } from 'react-router-dom'
export class NavbarComp extends Component {
    // constructor(props) { 
    //     super(props);  
    //     this.state = { 
    //     drop:''
    //     }; }
    // myChangeHandler = (event) => 
    //     {
    //         let drop='';
    //         drop=
    //       this.setState({drop:drop}); 
    //     }
    render() {
        return (
            <Navbar expand="lg" style={{padding:'15px'}} class="navbar-expand">
            <Navbar.Brand>KMPR</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link style={{marginLeft:'30px',marginRight:'30px'}}><Link to="/"><strong>Home</strong></Link></Nav.Link>
                  <Nav.Link style={{marginLeft:'30px', marginRight:'30px'}}> <Link to="/dashboard"><strong>Dashboard</strong></Link></Nav.Link>
                  {/* <NavDropdown title="ArtWorks" id="basic-nav-dropdown" >
                    <NavDropdown.Item><Link to='/art-works'>Top Artist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/art-works'>Abstrsact</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Link to='/art-works'>Other</Link></NavDropdown.Item>
                  </NavDropdown> */}
                  <Nav.Link style={{marginLeft:'30px', marginRight:'30px'}}> <Link to="/explore"><strong>Explore</strong></Link></Nav.Link>
                  <Nav.Link style={{marginLeft:'30px'}}> <Link to="/contactUs"><strong>Contact us</strong></Link></Nav.Link>
                  </Nav>
                  <input
                  type="search"
                  class="form-control"
                  placeholder="Search"
                  style={{width:"20%", marginRight:'30px'}}
                  />
                  <Nav>
                  <Nav.Link><Link><i class="fas fa-user" ></i></Link></Nav.Link> 
                  <NavDropdown >
            <NavDropdown.Item><Link to='/art-works' >My Profile</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to='/art-works'>Settings</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item><Link to='/art-works'>Sign out</Link></NavDropdown.Item>
          </NavDropdown>
         

                  <Nav.Link><Link to="/cart"><i class="fas fa-shopping-cart"></i></Link></Nav.Link>
                  <Nav.Link><Link to="/wishlist"><i class="fas fa-heart"></i></Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>
              
            </Navbar>
        
            
        )
    }
}

export default NavbarComp
