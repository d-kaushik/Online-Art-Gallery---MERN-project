import React, { Component } from "react";
import { Card } from "react-bootstrap";
import image from "./painting.jpg";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import { Paypal } from "./payment/PayPal";
import { Link } from "react-router-dom";
export class Cart extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  renderCard = (card, index) => {
    return (
      <Card
        style={{ width: "18rem" }}
        key={card._id}
        className="box `${this.props.offers ? null : hoverable}`"
      >
        <img src={image} width="50%" height="50%" className="img_card"></img>
        <Card.Body className="body_style">
          <Card.Title data-bs-toggle="modal" data-bs-target="#exampleModal">
            {card.painting_name}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {card.category}
          </Card.Subtitle>
          <Card.Text>{card.description}</Card.Text>
          <Card.Text>Rs. {card.price}</Card.Text>
          <div>
            <div class="row">
              <div class="col-sm">
                <Link
                  to={{
                    pathname: "add-creativity",
                    state: card,
                  }}
                >
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    style={{ width: "100%" }}
                    // onClick={() => this.onUpdateClick(card._id)}
                  >
                    Add to Wishlist
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
    // }
  };
  render() {
    return (
      <div>
        {/*Section: Block Content*/}
        <section>
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-9">
              {/* Card */}
              <div className="mb-3">
                <div className="pt-4 wish-list">
                  <h5 className="mb-4">
                    Cart (<span>4</span> items)
                  </h5>
                  <hr className="mb-4" />
                  <div className="grid">
                    {this.props.items.map(this.renderCard)}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
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
                    <button type="button" className="btn btn-primary btn-block">
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

const mapStateToProps = (state) => ({
  items: state.items,
});
export default connect(mapStateToProps, { getItems })(Cart);
