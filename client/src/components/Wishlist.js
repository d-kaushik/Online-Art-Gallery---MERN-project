import React, { Component } from "react";
import { Card } from "react-bootstrap";
import image from "./painting.jpg";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import { Link } from "react-router-dom";
import { Cards } from "./Cards";
export class Wishlist extends Component {
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
                    Add to Cart
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
        <div className="grid">{this.props.items.map(this.renderCard)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});
export default connect(mapStateToProps, { getItems })(Wishlist);
