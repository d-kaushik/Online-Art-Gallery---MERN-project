import React, { Component } from 'react'
import Footer from './Footer'
import { Cards } from "./OfferCards";
import plist from "../assests/PaintingList";

export class Offers extends Component {
    // renderCard = (card, index) => {
    //     if (card.carted) {
    //       return (
    //         <Cards
    //           index={index}
    //           title={card.title}
    //           artist={card.artist}
    //           currency={card.currency}
    //           price={card.price}
    //           //desc={card.desc}
    //           carted={card.carted}
    //           wishlisted={card.wishlisted}
    //           cart={false}
    //           wishlist={false}
    //           dashboard={false}
    //           explore={true}
    //         ></Cards>
    //       );
    //     }
    //   };
    render() {
        return (
            <div>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="listing listing-radius listing-default">
                    <div className="shape">
                      <div className="shape-text">buy</div>
                    </div>
                    <div className="listing-content">
                      <h3 className="lead">Painting 1</h3>
                      <Cards
                    index="100"
                    artist="James Bond"
                    currency="Rs"
                    price="1000"
                    ></Cards>

<div className="table-responsive mb-2" style={{textAlign:'center'}}>
            <button type="button" className="btn btn-primary ">
              Buy now
            </button>
            <button type="button" className="btn btn-light  ">
              <i className="fas fa-shopping-cart pr-2" />
              Add to cart
            </button></div>
                      <p>Buy items on normal prices. No discounts available for this listing.</p>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="listing listing-radius listing-default">
                    <div className="shape">
                      <div className="shape-text">buy</div>
                    </div>
                    <div className="listing-content">
                      <h3 className="lead">Painting 2</h3>
                      <Cards
                    index="100"
                    artist="James Bond"
                    currency="Rs"
                    price="1000"
                    ></Cards>
                    
                    <div className="table-responsive mb-2" align="center"></div>
            <button type="button" className="btn btn-primary btn-md mr-1 mb-2">
              Buy now
            </button>
            <button type="button" className="btn btn-light btn-md mr-1 mb-2">
              <i className="fas fa-shopping-cart pr-2" />
              Add to cart
            </button>
                      <p>Buy items on normal prices. No discounts available for this listing.</p>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="listing listing-radius listing-default">
                    <div className="shape">
                      <div className="shape-text">buy</div>
                    </div>
                    <div className="listing-content">
                      <h3 className="lead">Painting 3</h3>
                      <Cards
                    index="100"
                    artist="James Bond"
                    currency="Rs"
                    price="1000"
                    ></Cards>

<div className="table-responsive mb-2" align="center"></div>
            <button type="button" className="btn btn-primary btn-md mr-1 mb-2">
              Buy now
            </button>
            <button type="button" className="btn btn-light btn-md mr-1 mb-2">
              <i className="fas fa-shopping-cart pr-2" />
              Add to cart
            </button>
                      <p>Buy items on normal prices. No discounts available for this listing.</p>
                    </div>
                  </div>
                </div>



                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="listing listing-radius listing-success">
                    <div className="shape">
                      <div className="shape-text">50%</div>
                    </div>
                    <div className="listing-content">
                      <h3 className="lead">Discount listing</h3>
                      <Cards
                    index="100"
                    artist="James Bond"
                    currency="Rs"
                    price="1000"
                    ></Cards>
                    <div className="table-responsive mb-2" align="center"></div>
            <button type="button" className="btn btn-primary btn-md mr-1 mb-2">
              Buy now
            </button>
            <button type="button" className="btn btn-light btn-md mr-1 mb-2">
              <i className="fas fa-shopping-cart pr-2" />
              Add to cart
            </button>
                      <p>Buy now - 50% off.</p>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="listing listing-radius listing-success">
                    <div className="shape">
                      <div className="shape-text">50%</div>
                    </div>
                    <div className="listing-content">
                      <h3 className="lead">Discount listing</h3>
                      <Cards
                    index="100"
                    artist="James Bond"
                    currency="Rs"
                    price="1000"
                    ></Cards>

<div className="table-responsive mb-2" align="center"></div>
            <button type="button" className="btn btn-primary btn-md mr-1 mb-2">
              Buy now
            </button>
            <button type="button" className="btn btn-light btn-md mr-1 mb-2">
              <i className="fas fa-shopping-cart pr-2" />
              Add to cart
            </button>
                      <p>Buy now - 50% off.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="listing listing-radius listing-success">
                    <div className="shape">
                      <div className="shape-text">50%</div>
                    </div>
                    <div className="listing-content">
                      <h3 className="lead">Discount listing</h3>
                      <Cards
                    index="100"
                    artist="James Bond"
                    currency="Rs"
                    price="1000"
                    ></Cards>

<div className="table-responsive mb-2" align="center"></div>
            <button type="button" className="btn btn-primary btn-md mr-1 mb-2">
              Buy now
            </button>
            <button type="button" className="btn btn-light btn-md mr-1 mb-2">
              <i className="fas fa-shopping-cart pr-2" />
              Add to cart
            </button>
                      <p>Buy now - 50% off.</p>
                    </div>
                  </div>
                </div> 

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="listing listing-radius listing-danger">
                    <div className="shape">
                      <div className="shape-text">hot</div>
                    </div>
                    <div className="listing-content">
                      <h3 className="lead">Hot Offer</h3>
                      <Cards
                    index="100"
                    artist="James Bond"
                    currency="Rs"
                    price="1000"
                    ></Cards>

<div className="table-responsive mb-2" align="center"></div>
            <button type="button" className="btn btn-primary btn-md mr-1 mb-2">
              Buy now
            </button>
            <button type="button" className="btn btn-light btn-md mr-1 mb-2">
              <i className="fas fa-shopping-cart pr-2" />
              Add to cart
            </button>
                      <p>Best selling for this period.</p>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="listing  listing-radius listing-danger">
                    <div className="shape">
                      <div className="shape-text">hot</div>
                    </div>
                    <div className="listing-content">
                      <h3 className="lead">Hot Offer</h3>
                      <Cards
                    index="100"
                    artist="James Bond"
                    currency="Rs"
                    price="1000"
                    ></Cards>
                    <div className="table-responsive mb-2" align="center"></div>
            <button type="button" className="btn btn-primary btn-md mr-1 mb-2">
              Buy now
            </button>
            <button type="button" className="btn btn-light btn-md mr-1 mb-2">
              <i className="fas fa-shopping-cart pr-2" />
              Add to cart
            </button>
                      <p>Best selling for this period.</p>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="listing  listing-radius listing-danger">
                    <div className="shape">
                      <div className="shape-text">hot</div>
                    </div>
                    <div className="listing-content">
                      <h3 className="lead">Hot Offer</h3>
                      <Cards
                    index="100"
                    artist="James Bond"
                    currency="Rs"
                    price="1000"
                    ></Cards>
                    <div className="table-responsive mb-2" align="center"></div>
            <button type="button" className="btn btn-primary btn-md mr-1 mb-2">
              Buy now
            </button>
            <button type="button" className="btn btn-light btn-md mr-1 mb-2">
              <i className="fas fa-shopping-cart pr-2" />
              Add to cart
            </button>
                      <p>Best selling for this period.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: "\n.shape {\n    border-style: solid;\n    border-width: 0 70px 40px 0;\n    float: right;\n    height: 0px;\n    width: 0px;\n    -ms-transform: rotate(360deg); /* IE 9 */\n    -o-transform: rotate(360deg); /* Opera 10.5 */\n    -webkit-transform: rotate(360deg); /* Safari and Chrome */\n    transform: rotate(360deg);\n}\n.listing {\n    background: #fff;\n    border: 1px solid #ddd;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n    margin: 15px 0;\n    overflow: hidden;\n}\n.listing:hover {\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    transform: rotate scale(1.1);\n    -webkit-transition: all 0.4s ease-in-out;\n    -moz-transition: all 0.4s ease-in-out;\n    -o-transition: all 0.4s ease-in-out;\n    transition: all 0.4s ease-in-out;\n}\n.shape {\n    border-color: rgba(255,255,255,0) #d9534f rgba(255,255,255,0) rgba(255,255,255,0);\n}\n.listing-radius {\n    border-radius: 7px;\n}\n.listing-danger {\n    border-color: #d9534f;\n}\n.listing-danger .shape {\n    border-color: transparent #d9533f transparent transparent;\n}\n.listing-success {\n    border-color: #5cb85c;\n}\n.listing-success .shape {\n    border-color: transparent #5cb75c transparent transparent;\n}\n.listing-default {\n    border-color: #999999;\n}\n.listing-default .shape {\n    border-color: transparent #999999 transparent transparent;\n}\n.listing-primary {\n    border-color: #428bca;\n}\n.listing-primary .shape {\n    border-color: transparent #318bca transparent transparent;\n}\n.listing-info {\n    border-color: #5bc0de;\n}\n.listing-info .shape {\n    border-color: transparent #5bc0de transparent transparent;\n}\n.listing-warning {\n    border-color: #f0ad4e;\n}\n.listing-warning .shape {\n    border-color: transparent #f0ad4e transparent transparent;\n}\n.shape-text {\n    color: #fff;\n    font-size: 12px;\n    font-weight: bold;\n    position: relative;\n    right: -40px;\n    top: 2px;\n    white-space: nowrap;\n    -ms-transform: rotate(30deg); /* IE 9 */\n    -o-transform: rotate(360deg); /* Opera 10.5 */\n    -webkit-transform: rotate(30deg); /* Safari and Chrome */\n    transform: rotate(30deg);\n}\n.listing-content {\n    padding: 0 20px 10px;\n}\n" }} />
         <Footer></Footer>
         
          </div>
        )
    }
}

export default Offers
