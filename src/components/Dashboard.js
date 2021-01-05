import React, { Component } from "react";
import ArtPost from "../components/ArtPost";
import Footer from "./Footer";
import { Graphs } from "./Graphs";
import MyArts from "./MyArts"
export class Dashboard extends Component {
  constructor() {
    super();
    this.state = { formActive: false };
  }

  showArtForm = () => {
    this.setState({ formActive: !this.state.formActive });
  };

  render() {
    return (
      <div>
        <div class="row">
          <aside class="col-sm-3">
            <br></br>
            <div class="card">
              <div class="d-flex justify-content-center">
                <button
                  type="submit"
                  class="btn btn-outline-primary"
                  onClick={this.showArtForm}
                >
                  Add new art
              </button>
              </div>
              <article class="card-group-item">
                <header class="card-header">
                  <h6 class="title">
                    <strong>Your Arts</strong>{" "}
                  </h6>
                </header>
                <div class="filter-content">
                  <div class="card-body">
                    <form>

                      <div class="card">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light" data-bs-toggle="modal"
                          data-bs-target="#exampleModal">
                          <img
                            src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                            class="img-fluid"
                          />
                          <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title" style={{ textAlign: 'center' }}>Art 1</h5>
                        </div>
                      </div>

                      <div class="card">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light" data-bs-toggle="modal"
                          data-bs-target="#exampleModal">
                          <img
                            src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                            class="img-fluid"
                          />
                          <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title" style={{ textAlign: 'center' }}>Art 2</h5>
                        </div>
                      </div>



                    </form>
                  </div>
                </div>
              </article>
            </div>
          </aside>


          {this.state.formActive ? (
            <aside class="col">
              <ArtPost />

            </aside>
          ) : (
              <aside class="col">

                <MyArts></MyArts>
              </aside>
            )}
          <div>
            {/* <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              See Art Information
            </button> */}

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
                      class="btn btn-secondary"
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
        <Footer></Footer>
      </div>
    );
  }
}

export default Dashboard;