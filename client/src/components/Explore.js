import React, { Component } from "react";
import "./CardLayout.css";
import image from "./painting.jpg";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";

export class Explore extends Component {
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
        <Link
          to={{
            pathname: "product-details",
            state: card,
          }}
        >
          <Card.Body className="body_style">
            <Card.Title data-bs-toggle="modal" data-bs-target="#exampleModal">
              {card.painting_name}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {card.artist_name}
            </Card.Subtitle>
            <Card.Text>{card.description}</Card.Text>
            <Card.Text>Rs. {card.price}</Card.Text>
            <div>
              <div className="options">
                <div>
                  <i class="far fa-thumbs-up"></i>
                </div>
                <div>
                  <i className="options" class="far fa-heart"></i>
                </div>
              </div>
              <div class="row">
                <div class="col-sm">
                  <button
                    type="submit"
                    className="btn btn-light btn-md mr-1 mb-2"
                    style={{ width: "100%" }}
                    // onClick={alert("Edit")}
                  >
                    <i className="fas fa-shopping-cart pr-2" />
                    Cart
                  </button>
                </div>
                <div class="col-sm">
                  <button
                    type="button"
                    className="btn btn-primary btn-md mr-1 mb-2"
                    style={{ width: "100%" }}
                    // onClick={() => this.onDeleteClick(1)}
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Link>
      </Card>
    );
    // }
  };
  render() {
    return (
      <div>
        <div class="row">
          <aside class="col-sm-2" style={{}}>
            <br></br>
            <div class="card">
              <article class="card-group-item">
                <header class="card-header">
                  <h6 class="title">
                    <strong>Categories</strong>{" "}
                  </h6>
                </header>
                <div class="filter-content">
                  <div class="card-body">
                    <form>
                      <label class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span class="form-check-label">Nature</span>
                      </label>
                      <label class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span class="form-check-label">Landscape</span>
                      </label>
                      <label class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span class="form-check-label">Black and white</span>
                      </label>
                    </form>
                  </div>
                </div>
              </article>

              <article class="card-group-item">
                <header class="card-header">
                  <h6 class="title">
                    <strong>Artist</strong>{" "}
                  </h6>
                </header>
                <div class="filter-content">
                  <div class="card-body">
                    <form>
                      <label class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span class="form-check-label">Andy Warhol</span>
                      </label>
                      <label class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span class="form-check-label">Vincent van Gogh</span>
                      </label>
                      <label class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span class="form-check-label">Henri Matisse</span>
                      </label>
                    </form>
                  </div>
                </div>
              </article>

              <article class="card-group-item">
                <header class="card-header">
                  <h6 class="title">
                    <strong>Rating</strong>
                  </h6>
                </header>
                <div class="filter-content">
                  <div class="card-body">
                    <label class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadio"
                        value=""
                      />
                      <span class="form-check-label">Five star</span>
                    </label>
                    <label class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadio"
                        value=""
                      />
                      <span class="form-check-label">Four star</span>
                    </label>
                    <label class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadio"
                        value=""
                      />
                      <span class="form-check-label">Three star</span>
                    </label>
                  </div>{" "}
                </div>
              </article>

              <article class="card-group-item">
                <header class="card-header">
                  <h6 class="title">
                    <strong>Discount range</strong>{" "}
                  </h6>
                </header>
                <div class="filter-content">
                  <div class="card-body">
                    <label class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadio"
                        value=""
                      />
                      <span class="form-check-label">10% and above</span>
                    </label>
                    <label class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadio"
                        value=""
                      />
                      <span class="form-check-label">20% and above</span>
                    </label>
                    <label class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadio"
                        value=""
                      />
                      <span class="form-check-label">30% and above</span>
                    </label>
                  </div>{" "}
                </div>
              </article>
            </div>
          </aside>
          <aside class="col-sm-9">
            <br></br>
            {/* <Link to="/product-details"> */}

            <div className="grid">{this.props.items.map(this.renderCard)}</div>
            {/* </Link> */}
          </aside>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});
export default connect(mapStateToProps, { getItems })(Explore);