import React, { Component } from "react";
import image from "./painting.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link, useLocation } from "react-router-dom";
const ProductDetails = () => {
  let location = useLocation();
  return (
    <section className="mb-5">
      <div className="row" style={{ margin: "20px" }}>
        <div className="col-md-3 mb-2 mb-md-0" style={{ margin: "50px" }}>
          <div id="mdb-lightbox-ui" />
          <Carousel>
            <div>
              <img src={image} style={{ height: "50%" }} />
            </div>
            <div>
              <img src={image} style={{ height: "50%" }} />
            </div>
            <div>
              <img src={image} style={{ height: "50%" }} />
            </div>
          </Carousel>
        </div>
        <div className="col-md-6" style={{ margin: "50px" }}>
          <h5>{location.state.painting_name}</h5>
          <span className="mr-1">
            
            <strong>{location.state.artist_name}</strong>
          </span>
          <p className="pt-1">{location.state.description}</p>
          <div className="table-responsive">
            <table className="table table-sm table-borderless mb-0">
              <tbody>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>TECHNIQUE</strong>
                  </th>
                  <td>{location.state.technique}</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>DIMENSIONS</strong>
                  </th>
                  <td>{location.state.dimension}</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>PRICE</strong>
                  </th>
                  <td>{location.state.price}</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>OTHER DETAILS</strong>
                  </th>
                  <td>Artwork on supported wooden frame. Artwork framed.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div className="table-responsive mb-2"></div>
          <button type="button" className="btn btn-primary btn-md mr-1 mb-2">
            Buy now
          </button>
          <button type="button" className="btn btn-light btn-md mr-1 mb-2">
            <i className="fas fa-shopping-cart pr-2" />
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
  // }
};

export default ProductDetails;