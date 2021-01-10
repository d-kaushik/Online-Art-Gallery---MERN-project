import React, { Component } from "react";
import ArtPost from "../components/ArtPost";
import AddArtProfile from "./myProfile/AddArtProfile";
import { Graphs } from "./Graphs";
import "./CardLayout.css";
import { Card } from "react-bootstrap";
import image from "./painting.jpg";
import { connect } from "react-redux";
import { deletePainting, getItems } from "../actions/itemActions";
import { Link } from "react-router-dom";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  onDeleteClick = (id) => {
    alert(id);
    this.props.deletePainting(id);
  };
  onUpdateClick = (id) => {
    alert(id);
    // return(<AddArtProfile>);
  };
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
                    Edit
                  </button>
                </Link>
              </div>
              <div class="col-sm">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style={{ width: "100%" }}
                  onClick={() => this.onDeleteClick(card._id)}
                >
                  Delete
                </button>
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
        <div class="row">
          <div class="col">
            <br></br>
            <h3 style={{ color: "blue" }}></h3>
            <div className="grid">{this.props.items.map(this.renderCard)}</div>
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
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});
export default connect(mapStateToProps, { getItems, deletePainting })(
  Dashboard
);
