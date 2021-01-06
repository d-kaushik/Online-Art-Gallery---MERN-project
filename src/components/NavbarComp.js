import React, { Component } from 'react'
import {Navbar, NavDropdown, FormControl, Form, Nav, Button, NavbarBrand} from 'react-bootstrap'
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
          //   <Navbar expand="lg" style={{padding:'15px'}} class="navbar-expand">
          //   <Navbar.Brand>KMPR</Navbar.Brand>
          //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
          //     <Navbar.Collapse id="basic-navbar-nav">
          //       <Nav className="mr-auto">
          //         <Nav.Link style={{marginLeft:'30px',marginRight:'30px'}}><Link to="/"><strong>Home</strong></Link></Nav.Link>
          //         <Nav.Link style={{marginLeft:'30px', marginRight:'30px'}}> <Link to="/dashboard"><strong>Dashboard</strong></Link></Nav.Link>
          //         {/* <NavDropdown title="ArtWorks" id="basic-nav-dropdown" >
          //           <NavDropdown.Item><Link to='/art-works'>Top Artist</Link></NavDropdown.Item>
          //           <NavDropdown.Item><Link to='/art-works'>Abstrsact</Link></NavDropdown.Item>
          //           <NavDropdown.Divider />
          //           <NavDropdown.Item><Link to='/art-works'>Other</Link></NavDropdown.Item>
          //         </NavDropdown> */}
          //         <Nav.Link style={{marginLeft:'30px', marginRight:'30px'}}> <Link to="/explore"><strong>Explore</strong></Link></Nav.Link>
          //         <Nav.Link style={{marginLeft:'30px'}}> <Link to="/contactUs"><strong>Contact us</strong></Link></Nav.Link>
          //         </Nav>
          //         <input
          //         type="search"
          //         class="form-control"
          //         placeholder="Search"
          //         style={{width:"20%", marginRight:'30px'}}
          //         />
          //         <Nav>
          //         <Nav.Link><Link><i class="fas fa-user" ></i></Link></Nav.Link> 
          //         <NavDropdown >
          //   <NavDropdown.Item><Link to='/art-works' >My Profile</Link></NavDropdown.Item>
          //   <NavDropdown.Item><Link to='/art-works'>Settings</Link></NavDropdown.Item>
          //   <NavDropdown.Divider />
          //   <NavDropdown.Item><Link to='/signup'>SignIn</Link></NavDropdown.Item>
          // </NavDropdown>
         

          //         <Nav.Link><Link to="/cart"><i class="fas fa-shopping-cart"></i></Link></Nav.Link>
          //         <Nav.Link><Link to="/wishlist"><i class="fas fa-heart"></i></Link></Nav.Link>
          //       </Nav>
          //     </Navbar.Collapse>
              
          //   </Navbar>

<Nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'white', padding:'15px'}} >
<a class="navbar-brand" href="$"><Link to="/">
  
  <img 
            src={"/assets/logo.png"}
            height="50"
            alt=""
            loading="lazy"
          />
    
      </Link></a>
  
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
      <Nav.Link style={{marginLeft:'30px',marginRight:'30px'}}><Link to="/"><strong>HOME</strong></Link></Nav.Link> 
      </li>
      <li class="nav-item">
      <Nav.Link style={{marginLeft:'30px', marginRight:'30px'}}> <Link to="/dashboard"><strong>DASHBOARD</strong></Link></Nav.Link>
      </li>
      <li class="nav-item">
      <Nav.Link style={{marginLeft:'30px', marginRight:'30px'}}> <Link to="/explore"><strong>EXPLORE</strong></Link></Nav.Link>
      </li>
      <li class="nav-item">
      <Nav.Link style={{marginLeft:'30px'}}> <Link to="/contactUs"><strong>CONTACT US</strong></Link></Nav.Link>
      </li>
      
      
      
      
    </ul>
    <form class="input-group w-auto my-auto d-none d-sm-flex">
        <input
          autocomplete="off"
          type="search"
          class="form-control rounded"
          placeholder="Search"
          style={{minWidth: '125px'}}
        />
        <span class="input-group-text border-0 d-none d-lg-flex"
          ><i class="fas fa-search"></i
        ></span>
      </form>
    
    <ul class="navbar-nav flex-row">
      
      <li class="nav-item dropdown me-3 me-lg-1">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
            class="rounded-circle"
            height="30"
            alt=""
            loading="lazy"
          />
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="#"><Link to='/profile' >My profile</Link></a></li>
          <li><a class="dropdown-item" href="#"><Link to='/signup' >Settings</Link></a></li>
          <div class="dropdown-divider"></div>
          <li><a class="dropdown-item" ><Link to='/signup' >Logout</Link></a></li>
        </ul>
      </li>
      </li>
      <li class="nav-item me-3 me-lg-1">
      <Nav.Link><Link to="/cart"><i class="fas fa-shopping-cart"></i>
      <span class="badge rounded-pill badge-notification bg-danger">1</span></Link></Nav.Link>
      </li>
      <li class="nav-item me-3 me-lg-1">
      <Nav.Link><Link to="/wishlist"><i class="fas fa-heart"></i>
      <span class="badge rounded-pill badge-notification bg-danger">2</span></Link></Nav.Link>
      </li>
      
    </ul>
  </div>
</Nav>

        
            
        )
    }
}

export default NavbarComp
