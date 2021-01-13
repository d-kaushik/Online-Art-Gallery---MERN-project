import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from '../Firebase'
import { Link } from "react-router-dom";
import {
  addPainting,
  updatePainting,
  getUser,
} from "../../actions/itemActions";

export class AddArtFormProfile extends Component {
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
      err_price:'',
      _id: "",
      pname: "",
      category: "Nature",
      price: "",
      dimension: "",
      technique: "",
      desc: "",
      selectedFile: null,
      nameCheck: false,
      priceCheck: false,
      techCheck: false,
      descCheck: false,
      fileCheck:true 
    };
  }
  componentDidMount() {
    if (this.props.toBeUpdate != null) {
      this.setState({
        pname: this.props.toBeUpdate.painting_name,
        category: this.props.toBeUpdate.category,
        price: this.props.toBeUpdate.price,
        dimension: this.props.toBeUpdate.dimension,
        technique: this.props.toBeUpdate.technique,
        desc: this.props.toBeUpdate.description,
      });
    }
  }
  FileChange = (event) => {
    let err_file = "";
    let val = event.target.value;
    console.log(event.target.files[0]);
    
      if (!val.endsWith(".jpg")) {
        console.log("ss" + val.endsWith(".jpg"));
        err_file = (
          <small style={{ color: "red" }}>Only JPG file Allowed</small>
        );
        this.setState({fileCheck:false})
      }
      else {
        this.setState({ fileCheck: true })
        this.setState({ selectedFile: event.target.files[0] });
    }
    
    this.setState({ err_file: err_file });
  };
  myNameChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err_pname = "";
    if (val === "") {
        err_pname = (
          <small style={{ color: "red" }}>Name is compulsory field</small>
        );
      this.setState({nameCheck:false});
    }
    else if (!isNaN(val)) {
        err_pname = (
          <small style={{ color: "red" }}>Numbers are not allowed</small>
        );
      this.setState({nameCheck:false});
    }
    else {
      this.setState({nameCheck:true});
    }
    
    this.setState({ err_pname: err_pname });
    this.setState({ [nam]: val });
  }
  myTechChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err_tech = "";
    if (val === "") {
        err_tech = (
          <small style={{ color: "red" }}>Technique is compulsory field</small>
        );
      this.setState({techCheck:false});
    }
    else if (!isNaN(val)) {
        err_tech = (
          <small style={{ color: "red" }}>Numbers are not allowed</small>
        );
      this.setState({techCheck:false});
    }
    else {
      this.setState({techCheck:true});
    }
    
    this.setState({ err_tech: err_tech });
    this.setState({ [nam]: val });
  }
  myPriceChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err_price = "";
     if (val === "") {
        err_price = (
          <small style={{ color: "red" }}>Price is compulsory field</small>
        );
      this.setState({priceCheck:false});
    }
    else if (isNaN(val)) {
        err_price = (
          <small style={{ color: "red" }}>Letters are not allowed</small>
        );
      this.setState({priceCheck:false});
    }
    else if (val.length < 3) {
      err_price = (
          <small style={{ color: "red" }}>Price should be greater than $100</small>
        );
      this.setState({priceCheck:false});
    }
    else {
      this.setState({priceCheck:true});
    }
    
    this.setState({ err_price: err_price });
    this.setState({ [nam]: val });
  }
  myDimChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err_desc = "";
 
    if (val.length < 50) {
      err_desc = (
        <small style={{ color: "red" }}>Atleast 50 characters required</small>
      );
      this.setState({ descCheck: false });
    }
    else {
      this.setState({descCheck:true});
    }
    this.setState({ err_desc: err_desc });
    this.setState({ [nam]: val });
  };

  handleClick = () => {
    const newPainting = {
      painting_name: this.state.pname,
      artist_name: this.props.users.name,
      category: this.state.category,
      price: this.state.price,
      dimension: this.state.dimension,
      technique: this.state.technique,
      description: this.state.desc,
    };

    if (this.props.toBeUpdate != null) {
      this.props.updatePainting(this.props.toBeUpdate._id, newPainting);
      alert("Creativity Updated Successfully ! ");
    } else {
      this.props.addPainting(newPainting);

      alert("Creativity Added Successfully ! ");
    }

    this.setState({
      pname: "",
      category: "",
      price: "",
      dimension: "",
      technique: "",
      desc: "",
    });
    let bucketName = 'images'
    let file = this.state.selectedFile;
    let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`)
    let uploadTask = storageRef.put(file)
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        let downloadURL = uploadTask.snapshot.downloadURL;
    })
  };
  render() {
    console.log(this.props.toBeUpdate);
    return (
      <div>
        <div class="modal-dialog">
          <div class="modal-content">
            <div style={{ maxWidth: "500px" }}>
              <div class="card-header">
                <h5
                  id="addArt"
                  style={{ textAlign: "center", backgroundColor: "white" }}
                >
                  Add your creativity
                </h5>
              </div>

              <div class="card-body">
                <form method="post">
                  <div class="form-group">
                    <label style={{ textAlign: "center" }}>
                      <strong>Congratulations</strong> for your new painting{" "}
                      <strong>{this.props.users.name}</strong>, We are excited
                      to post your creativity !
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
                      onChange={this.myNameChangeHandler}
                      value={this.state.pname}
                    />
                    {this.state.err_pname}
                  </div>
                  <div class="row">
                    <div class="col-sm">
                      <div class="form-group">
                        <label>Select category:</label>
                        <select
                          class="form-control"
                          name="category"
                          value={this.state.category}
                          defaultValue={this.state.category}
                          onChange={this.myDimChangeHandler}
                        >
                          <option value="Nature">Nature</option>
                          <option value="Multi-color">Multi-color</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Expected selling price:</label>
                        <input
                          type="text"
                          class="form-control"
                          name="price"
                          placeholder="Price > 100 only"
                          onChange={this.myPriceChangeHandler}
                          value={this.state.price}
                        />
                        {this.state.err_price}
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
                          onChange={this.myDimChangeHandler}
                          value={this.state.dimension}
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
                          onChange={this.myTechChangeHandler}
                          value={this.state.technique}
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
                      value={this.state.desc}
                    />
                    {this.state.err_desc}
                  </div>
                  <div class="form-group">
                    <label>Upload image: </label>
                    <input
                      type="file"
                      accept=".jpg"
                      class="form-control-file border"
                      name="file"
                      onChange={this.FileChange}
                    />
                    {this.state.err_file}
                  </div>
                  <div class="d-flex justify-content-center">
                    {/* <Link to="/dashboard"> */}
                    <button
                      type="button"
                      class="btn btn-outline-primary"
                      onClick={() => {
                        this.handleClick();
                      }}
                        //disabled={this.state.nameCheck && this.state.priceCheck && this.state.descCheck && this.state.techCheck && this.state.fileCheck ? false: true}
                    >
                        Add / Update
                    </button>
                    {/* </Link> */}
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
    users: state.users,
  };
};

export default connect(mapStateToProps, {
  addPainting,
  updatePainting,
  getUser,
})(AddArtFormProfile);



