import React, { Component } from "react";
import "./CardLayout.css";
import Footer from "./Footer";
import { Cards } from "./Cards";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";

export class Explore extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  renderCard = (card, index) => {
    return (
      <Cards
        index={index}
        title={card.painting_name}
        artist={card.category}
        currency="RS"
        price={card.price}
        desc={card.description}
        carted={card.carted}
        wishlisted={card.wishlisted}
        cart={false}
        wishlist={false}
        dashboard={false}
        explore={true}
      ></Cards>
    );
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
            <Link to="/product-details">
              <div className="grid">
                {this.props.items.map(this.renderCard)}
              </div>
            </Link>
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
