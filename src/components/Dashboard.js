import React, { Component } from "react";
import ArtPost from "../components/ArtPost";
import Footer from "./Footer";
import { Graphs } from "./Graphs";
import { Cards } from "./Cards";
import plist from "../assests/PaintingList";

const Dashboard = () => {
  const showArtForm = () => {
    this.setState({ formActive: !this.state.formActive });
  };

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
  // render() {
  return (
    <div>
      <div class="row">
        <div class="col">
          <br></br>
          <h3 style={{ color: "blue" }}>
            <div class="row">
              <div class="col-sm">
                <h6 class="title">
                  <strong>My Arts</strong>{" "}
                </h6>
              </div>
              <div class="col-sm">
                <div class="d-flex justify-content-center">
                  <button
                    type="submit"
                    class="btn btn-outline-primary"
                    // onClick={showArtForm}
                    // class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                    data-bs-toggle="modal"
                    data-bs-target="#addArt"
                  >
                    Add new art
                  </button>
                </div>
              </div>
            </div>
          </h3>
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
    
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Information of Art
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h1>Graph Info</h1>
              <Graphs />
              <dashboardinfo></dashboardinfo>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-primary btn-md mr-1 mb-2"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="addArt"
        tabindex="-1"
        aria-labelledby="addArt"
        aria-hidden="true"
      >
        <ArtPost />
      </div>
    </div>
  );
  // }
};

export default Dashboard;