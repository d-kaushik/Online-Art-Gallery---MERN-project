import React, { Component } from "react";
import plist from "../assests/PaintingList";
import { Cards } from "./Cards";
import { Link } from "react-router-dom";
import { Paypal } from "./payment/PayPal";

export class Cart extends Component {
  renderCard = (card, index) => {
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
          cart={true}
          wishlist={false}
          dashboard={false}
          explore={false}
        ></Cards>
      );
    }
  };
  render() {
    return (
      <div>
        {/*Section: Block Content*/}
        <section>
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-8">
              {/* Card */}
              <div className="mb-3">
                <div className="pt-4 wish-list">
                  <h5 className="mb-4">
                    Cart (<span>4</span> items)
                  </h5>
                  <hr className="mb-4" />
                  <div className="grid">{plist.map(this.renderCard)}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3" style={{ margin: "10px" }}>
              <div className="mb-3">
                <div className="pt-4">
                  <h5 className="mb-3">The total amount of</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Temporary amount
                      <span>$25.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>The total amount of</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>$53.98</strong>
                      </span>
                    </li>
                  </ul>
                  
                  <div
                    class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="grid"
                  >
                    <button type="button" className="btn btn-primary btn-block" >
                      go to checkout
                  </button>

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
                           Payment
              </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <h1>Pay using Paypal</h1>
                          <Paypal></Paypal>
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


                
                </div>
              </div>
              <div className="mb-3">
                <div className="pt-4">
                  <a
                    className="dark-grey-text d-flex justify-content-between"
                    data-toggle="collapse"
                    href="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Add a discount code (optional)
                    <span>
                      <i className="fas fa-chevron-down pt-1" />
                    </span>
                  </a>
                  <p className="text-primary mb-0">
                    <i className="fas fa-info-circle mr-1" /> Do not delay the
                    purchase, adding items to your cart does not mean booking
                    them.
                  </p>
                  <div className="mb-3">
                    <div className="pt-4">
                      <h5 className="mb-4">Expected shipping delivery</h5>
                      <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="pt-4">
                      <h5 className="mb-4">We accept</h5>
                      <img
                        className="mr-2"
                        width="45px"
                        src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa"
                      />
                      <img
                        className="mr-2"
                        width="45px"
                        src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                        alt="American Express"
                      />
                      <img
                        className="mr-2"
                        width="45px"
                        src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard"
                      />
                      <img
                        className="mr-2"
                        width="45px"
                        src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                        alt="PayPal acceptance mark"
                      />
                    </div>
                  </div>
                  <div className="collapse" id="collapseExample">
                    <div className="mt-3">
                      <div className="md-form md-outline mb-0">
                        <input
                          type="text"
                          id="discount-code"
                          className="form-control font-weight-light"
                          placeholder="Enter discount code"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Cart;