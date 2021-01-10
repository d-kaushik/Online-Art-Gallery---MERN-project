import React, { Component } from "react";
import axios from "axios";

export class ArtPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errormessage: "",
      err_mail: "",
      err_desc: "",
      err_file: "",
      err_pname: "",
      err_dime: "",
      err_tech: "",
      name: "Mrunali Narkhede",
      pname: "",
      category: "",
      price: "",
      dimension: "",
      technique: "",
      desc: "",
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    let err_mail = "";
    let err_desc = "";
    let err_file = "";
    let err_pname = "";
    let err_dime = "";
    // if (nam === "dime") {
    //   if (!val.match(/^X$/)) {
    //     err_dime = <small style={{ color: "red" }}>X reuired</small>;
    //   }
    // }
    if (nam === "pname") {
      if (!val.match(/^[a-zA-Z]+$/)) {
        err_pname = (
          <small style={{ color: "red" }}>Numbers are not allowed</small>
        );
      }
    }
    if (nam === "pname") {
      if (val == "") {
        err_pname = (
          <small style={{ color: "red" }}>Name is compulsory field</small>
        );
      }
    }
    if (nam === "price") {
      if (val == "" || !Number(val) || val.length < 3) {
        err_mail = (
          <small style={{ color: "red" }}>
            Only Numbers Allowed and should be greater than Rs.100
          </small>
        );
      }
    }
    if (nam === "desc") {
      if (val.length < 50) {
        err_desc = (
          <small style={{ color: "red" }}>Atleast 50 characters required</small>
        );
      }
    }
    if (nam === "file") {
      if (!val.endsWith(".jpg")) {
        console.log("ss" + val.endsWith(".jpg"));
        err_file = (
          <small style={{ color: "red" }}>Only JPG file Allowed</small>
        );
      }
    }
    this.setState({ err_mail: err_mail });
    this.setState({ err_desc: err_desc });
    this.setState({ err_file: err_file });
    this.setState({ err_pname: err_pname });
    this.setState({ err_dime: err_dime });
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
    console.log(`Todo Description: ${this.state.pname}`);
    console.log("e" + nam);
  };
  onSubmitForm = () => {
    // e.preventDefault();
    // console.log(this.state.pname);
    console.log(`Form submitted:`);
    console.log(`Todo Name: ${this.state.pname}`);
    console.log(`Todo category: ${this.state.category}`);
    console.log(`Todo price: ${this.state.price}`);
    console.log(`Todo dimension: ${this.state.dimension}`);
    console.log(`Todo technique: ${this.state.technique}`);
    console.log(`Todo desc: ${this.state.desc}`);

    const newTodo = {
      painting_name: this.state.pname,
      category: this.state.category,
      price: this.state.price,
      dimension: this.state.dimension,
      technique: this.state.technique,
      description: this.state.desc,
      // path: this.state.path
    };

    console.log("inFunction" + newTodo);
    axios
      .post("http://localhost:5000/artRoutes/add", newTodo)
      .then((res) => console.log(res.data));

    this.setState({
      pname: "",
      category: "",
      price: "",
      dimension: "",
      technique: "",
      desc: "",
    });
  };
  render() {
    return (
      <div>
        <div class="modal-dialog">
          <div class="modal-content">
            <div style={{ maxWidth: "500px" }}>
              <div class="modal-header">
                <h5
                  id="addArt"
                  style={{ textAlign: "center", backgroundColor: "white" }}
                >
                  Add your creativity
                </h5>{" "}
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div class="card-body">
                <div>
                  <div class="form-group">
                    <label style={{ textAlign: "center" }}>
                      <strong>Congratulations</strong> for your new painting{" "}
                      <strong>{this.state.name}</strong>, We are excited to post
                      your creativity !
                    </label>
                  </div>

                  <div class="form-group">
                    <label>Painting name:</label>
                    <input
                      type="text"
                      class="form-control"
                      name="pname"
                      aria-describedby="emailHelp"
                      placeholder="Only characters"
                      onChange={this.myChangeHandler}
                    />
                    {this.state.err_pname}
                  </div>
                  <div class="row">
                    <div class="col-sm">
                      <div class="form-group">
                        <label>Select category:</label>
                        <select class="form-control" name="category">
                          <option value="all">Nature</option>
                          <option value="selected">Multi-color</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Expected selling price:</label>
                        <input
                          type="text"
                          class="form-control"
                          name="price"
                          placeholder="Price > 100 only"
                          onChange={this.myChangeHandler}
                        />
                        {this.state.err_mail}
                      </div>
                    </div>
                    <div class="col-sm">
                      <div class="form-group">
                        <label>Dimension : </label>
                        <input
                          type="text"
                          class="form-control"
                          name="dimension"
                          aria-describedby="emailHelp"
                          // placeholder="Only characters"
                          onChange={this.myChangeHandler}
                        />
                        {this.state.err_dime}
                      </div>
                      <div class="form-group">
                        <label>Technique :</label>
                        <input
                          type="text"
                          class="form-control"
                          name="technique"
                          aria-describedby="emailHelp"
                          placeholder="Only characters"
                          onChange={this.myChangeHandler}
                        />
                        {this.state.err_tech}
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Description:</label>
                    <textarea
                      type="text"
                      className="form-control"
                      rows="3"
                      name="desc"
                      onChange={this.myChangeHandler}
                    />
                    {this.state.err_desc}
                  </div>

                  <div class="form-group">
                    <label>Upload image: </label>
                    <input
                      type="file"
                      class="form-control-file border"
                      name="file"
                      onChange={this.myChangeHandler}
                    />
                    {this.state.err_file}
                  </div>
                  <div class="d-flex justify-content-center">
                    <button
                      type="submit"
                      class="btn btn-outline-primary"
                      onClick={this.onSubmitForm}
                    >
                      Add creativity
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtPost;
