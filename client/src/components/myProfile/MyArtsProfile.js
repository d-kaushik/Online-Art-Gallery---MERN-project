import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import ProfileMenu from "./ProfileMenu";
import { Cards } from "../components/Cards";
// import plist from "../assests/PaintingList";
import Footer from "../components/Footer";

const MyArtsProfile = () => {
  const renderCard = (card, index) => {
    if (card.carted) {
      return (
        <Cards
          index={index}
          title={card.title}
          artist={card.artist}
          currency={card.currency}
          price={card.price}
          desc={card.desc}
          carted={card.carted}
          wishlisted={card.wishlisted}
          cart={false}
          wishlist={false}
          dashboard={true}
          explore={false}
        ></Cards>
      );
    }
  };

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
            <div
              class="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="grid"
            >
              {plist.map(renderCard)}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyArtsProfile;
