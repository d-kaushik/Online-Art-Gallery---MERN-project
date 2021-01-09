import React, { Component } from "react";
import image from "./painting.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export class ProductDetails extends Component {
  render() {
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
            <h5>Painting 1</h5>
            <span className="mr-1">
              <strong>Rs 1000</strong>
            </span>
            <p className="pt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              sapiente illo. Sit error voluptas repellat rerum quidem, soluta
              enim perferendis voluptates laboriosam. Distinctio, officia quis
              dolore quos sapiente tempore alias.
            </p>
            <div className="table-responsive">
              <table className="table table-sm table-borderless mb-0">
                <tbody>
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>TECHNIQUE</strong>
                    </th>
                    <td>Acrylic on Canvas</td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>DIMENSIONS</strong>
                    </th>
                    <td>120x90cm</td>
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
  }
}

export default ProductDetails;
