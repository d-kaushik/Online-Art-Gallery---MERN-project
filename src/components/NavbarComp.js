import React, { Component } from 'react'
import { Navbar, NavDropdown, FormControl, Form, Nav, Button, NavbarBrand } from 'react-bootstrap'
import { Link, Switch } from 'react-router-dom'
export class NavbarComp extends Component {
  render() {
    return (


      <Nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: 'white', padding: '15px' }} >
        <a class="navbar-brand" href="$"><Link to="/">

          <img
            src={"/assets/logo.png"}
            style={{ maxWidth: '100px', marginTop: '-10px', marginBottom: '-10px', maxHeight: '70px' }}
          />

        </Link></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

            <li class="nav-item ">
              <a class="nav-link" style={{ marginLeft: '30px', marginRight: '30px' }}><Link to="/"><h6 style={{ color: "black" }}><strong>HOME</strong></h6></Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ marginLeft: '30px', marginRight: '30px' }}> <Link to="/dashboard"><h6 style={{ color: "black" }}><strong>DASHBOARD</strong></h6></Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ marginLeft: '30px', marginRight: '30px' }}> <Link to="/explore"><h6 style={{ color: "black" }}><strong>EXPLORE</strong></h6></Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ marginLeft: '30px', marginRight: '30px' }}> <Link to="/contactUs"><h6 style={{ color: "black" }}><strong>CONTACT US</strong></h6></Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ marginLeft: '30px', marginRight: '30px' }}> <Link to="/offers"><h6 style={{ color: "black" }}><strong>OFFERS</strong></h6></Link></a>
            </li>




          </ul>
          <form class="input-group w-auto my-auto d-none d-sm-flex">
            <input
              autocomplete="off"
              type="search"
              class="form-control rounded"
              placeholder="Search"
              style={{ minWidth: '125px', color: 'black' }}
            />
            <span class="input-group-text border-0 d-none d-lg-flex"
            ><i class="fas fa-search" style={{ color: "black" }}></i
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
              <Nav.Link><Link to="/cart"><i class="fas fa-shopping-cart" style={{ color: "black" }}></i>
                <span class="badge rounded-pill badge-notification bg-danger">1</span></Link></Nav.Link>
            </li>
            <li class="nav-item me-3 me-lg-1">
              <Nav.Link><Link to="/wishlist"><i class="fas fa-heart" style={{ color: "black" }}></i>
                <span class="badge rounded-pill badge-notification bg-danger">2</span></Link></Nav.Link>
            </li>

          </ul>
        </div>
      </Nav>



    )
  }
}

export default NavbarComp
