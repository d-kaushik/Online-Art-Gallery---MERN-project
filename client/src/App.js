import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Explore from "./components/Explore";
// import ArtPost from "./components/ArtPost";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ContactUs from "./components/ContactUs";
import NavbarComp from "./components/NavbarComp";
import Dashboard from "./components/Dashboard";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Profile from "./components/myProfile/Profile";
import AddArtProfile from "./components/myProfile/AddArtProfile";
import ProductDetails from "./components/ProductDetails";
import Offers from "./components/Offers";
import EditProfile from "./components/myProfile/EditProfile";
import ChangePass from "./components/myProfile/ChangePass";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Dummy from "./components/Dummy";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavbarComp></NavbarComp>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Explore" component={Explore} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/contactUs" component={ContactUs} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/cart" component={Cart} />
            <Route path="/profile" component={Profile} />
            <Route path="/add-creativity" component={AddArtProfile} />
            <Route path="/product-details" component={ProductDetails} />
            <Route path="/offers" component={Offers} />
            <Route path="/edit-profile" component={EditProfile} />
            <Route path="/change-password" component={ChangePass} />
            <Route path="/dummy" component={Dummy} />
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
