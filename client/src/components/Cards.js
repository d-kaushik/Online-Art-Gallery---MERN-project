import React, { Component } from "react";
import "./CardLayout.css";
import { Card } from "react-bootstrap";
import image from "./painting.jpg";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
export class Cards extends Component {
  constructor(props) {
    super(props);
  }

  onDeleteClick = (id) => {
    alert(id);
  };
  render() {
    return (
      <Card
        style={{ width: "18rem" }}
        key={this.props.index}
        className="box  hoverable"
      >
        <img src={image} width="50%" height="50%" className="img_card"></img>
        <Card.Body className="body_style">
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.props.artist}
          </Card.Subtitle>
          <Card.Text>{this.props.desc}</Card.Text>
          <Card.Text>
            {this.props.currency} {this.props.price}
          </Card.Text>
          <div>
            {this.props.cart && (
              <button
                type="submit"
                class="btn btn-outline-primary"
                style={{ width: "100%" }}
                // onClick={alert("wishlist")}
              >
                Add to Wishlist
              </button>
            )}
            {this.props.wishlist && (
              <button
                type="submit"
                class="btn btn-outline-primary"
                style={{ width: "100%" }}
                // onClick={alert("Cart")}
              >
                Add to Cart
              </button>
            )}
            {this.props.dashboard && (
              <div class="row">
                <div class="col-sm">
                  <button
                    type="submit"
                    class="btn btn-outline-primary"
                    style={{ width: "100%" }}
                    // onClick={alert("Edit")}
                  >
                    Edit
                  </button>
                </div>
                <div class="col-sm">
                  <button
                    type="submit"
                    class="btn btn-outline-primary"
                    style={{ width: "100%" }}
                    onClick={() => this.onDeleteClick(1)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
            {this.props.explore && (
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
                      class="btn btn-outline-primary"
                      style={{ width: "100%" }}
                      // onClick={alert("Edit")}
                    >
                      Cart
                    </button>
                  </div>
                  <div class="col-sm">
                    <button
                      type="button"
                      class="btn btn-outline-primary"
                      style={{ width: "100%" }}
                      // onClick={() => this.onDeleteClick(1)}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            )}
            {this.props.explore && null}
          </div>
        </Card.Body>
      </Card>
    );
  }
}

// const mapStateToProps = (state) => ({
//   item: state.item,
// });
// export default connect(mapStateToProps, { getItems })(Cards);
export default Cards;
