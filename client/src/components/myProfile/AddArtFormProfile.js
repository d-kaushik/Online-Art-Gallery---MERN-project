// import React, { Component } from "react";
// import { connect } from "react-redux";
// // import axios from Axios
// import {
//   addPainting,
//   updatePainting,
//   getUser,
// } from "../../actions/itemActions";

// export class AddArtFormProfile extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//       errormessage: "",
//       err_mail: "",
//       err_desc: "",
//       err_file: "",
//       err_pname: "",
//       err_dime: "",
//       err_tech: "",
//       name: "Mrunali Narkhede",
//       _id: "",
//       pname: "",
//       category: "",
//       price: "",
//       dimension: "",
//       technique: "",
//       desc: "",
//       selectedFile:null
//     };
//   }

//   componentDidMount() {
//     if (this.props.toBeUpdate != null) {
//       this.setState({
//         pname: this.props.toBeUpdate.painting_name,
//         category: this.props.toBeUpdate.category,
//         price: this.props.toBeUpdate.price,
//         dimension: this.props.toBeUpdate.dimension,
//         technique: this.props.toBeUpdate.technique,
//         desc: this.props.toBeUpdate.description,
//       });
//     }
//   }
//   FileChange = event => {
//     let err_file = "";
//     console.log(event.target.files[0])
//     this.setState({selectedFile:event.target.files[0]})
//     // if (nam === "file") {
//     //   if (!val.endsWith(".jpg")) {
//     //     console.log("ss" + val.endsWith(".jpg"));
//     //     err_file = (
//     //       <small style={{ color: "red" }}>Only JPG file Allowed</small>
//     //     );
//     //   }
//     // }
//     // this.setState({ err_file: err_file });
//   }
//   myChangeHandler = (event) => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     let err = "";
//     let err_mail = "";
//     let err_desc = "";
    
//     let err_pname = "";
//     let err_dime = "";

//     if (nam === "pname") {
//       if (!val.match(/^[a-zA-Z]+$/)) {
//         err_pname = (
//           <small style={{ color: "red" }}>Numbers are not allowed</small>
//         );
//       }
//     }
//     if (nam === "pname") {
//       if (val == "") {
//         err_pname = (
//           <small style={{ color: "red" }}>Name is compulsory field</small>
//         );
//       }
//     }
//     if (nam === "price") {
//       if (val == "" || !Number(val) || val.length < 3) {
//         err_mail = (
//           <small style={{ color: "red" }}>
//             Only Numbers Allowed and should be greater than Rs.100
//           </small>
//         );
//       }
//     }
//     if (nam === "desc") {
//       if (val.length < 50) {
//         err_desc = (
//           <small style={{ color: "red" }}>Atleast 50 characters required</small>
//         );
//       }
//     }
    
//     this.setState({ err_mail: err_mail });
//     this.setState({ err_desc: err_desc });
    
//     this.setState({ err_pname: err_pname });
//     this.setState({ err_dime: err_dime });
//     this.setState({ errormessage: err });
//     this.setState({ [nam]: val });
//   };
//   handleClick = () => {
//     const newPainting = {
//       painting_name: this.state.pname,
//       artist_name: this.props.users.name,
//       category: this.state.category,
//       price: this.state.price,
//       dimension: this.state.dimension,
//       technique: this.state.technique,
//       description: this.state.desc,
//     };

//     if (this.props.toBeUpdate != null) {
//       this.props.updatePainting(this.props.toBeUpdate._id, newPainting);
//       alert("Creativity Updated Successfully ! ");
//     } else {
//       this.props.addPainting(newPainting);

//       alert("Creativity Added Successfully ! ");
//     }

//     this.setState({
//       pname: "",
//       category: "",
//       price: "",
//       dimension: "",
//       technique: "",
//       desc: "",
//     });
//     // axios.post('')
//   };
//   render() {
//     console.log(this.props.toBeUpdate);
//     return (
//       <div>
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div style={{ maxWidth: "500px" }}>
//               <div class="card-header">
//                 <h5
//                   id="addArt"
//                   style={{ textAlign: "center", backgroundColor: "white" }}
//                 >
//                   Add your creativity
//                 </h5>
//               </div>

//               <div class="card-body">
//                 <form method="post">
//                   <div class="form-group">
//                     <label style={{ textAlign: "center" }}>
//                       <strong>Congratulations</strong> for your new painting{" "}
//                       <strong>{this.props.users.name}</strong>, We are excited
//                       to post your creativity !
//                     </label>
//                   </div>

//                   <div class="form-group">
//                     <label>Painting name:</label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       name="pname"
//                       aria-describedby="emailHelp"
//                       placeholder="Only characters"
//                       onChange={this.myChangeHandler}
//                       value={this.state.pname}
//                     />
//                     {this.state.err_pname}
//                   </div>
//                   <div class="row">
//                     <div class="col-sm">
//                       <div class="form-group">
//                         <label>Select category:</label>
//                         <select
//                           class="form-control"
//                           name="category"
//                           value={this.state.category}
//                         >
//                           <option value="Nature">Nature</option>
//                           <option value="Multi-color">Multi-color</option>
//                         </select>
//                       </div>
//                       <div class="form-group">
//                         <label>Expected selling price:</label>
//                         <input
//                           type="text"
//                           class="form-control"
//                           name="price"
//                           placeholder="Price > 100 only"
//                           onChange={this.myChangeHandler}
//                           value={this.state.price}
//                         />
//                         {this.state.err_mail}
//                       </div>
//                     </div>
//                     <div class="col-sm">
//                       <div class="form-group">
//                         <label>Dimension : </label>
//                         <input
//                           type="text"
//                           class="form-control"
//                           name="dimension"
//                           aria-describedby="emailHelp"
//                           // placeholder="Only characters"
//                           onChange={this.myChangeHandler}
//                           value={this.state.dimension}
//                         />
//                         {this.state.err_dime}
//                       </div>
//                       <div class="form-group">
//                         <label>Technique :</label>
//                         <input
//                           type="text"
//                           class="form-control"
//                           name="technique"
//                           aria-describedby="emailHelp"
//                           placeholder="Only characters"
//                           onChange={this.myChangeHandler}
//                           value={this.state.technique}
//                         />
//                         {this.state.err_tech}
//                       </div>
//                     </div>
//                   </div>
//                   <div class="form-group">
//                     <label>Description:</label>
//                     <textarea
//                       type="text"
//                       className="form-control"
//                       rows="3"
//                       name="desc"
//                       onChange={this.myChangeHandler}
//                       value={this.state.desc}
//                     />
//                     {this.state.err_desc}
//                   </div>
//                   <div class="form-group">
//                     <label>Upload image: </label>
//                     <input
//                       type="file"
//                       accept=".jpg"
//                       class="form-control-file border"
//                       name="file"
//                       onChange={this.FileChange}
//                     />
//                     {this.state.err_file}
//                   </div>
//                   <div class="d-flex justify-content-center">
//                     <button
//                       type="button"
//                       class="btn btn-outline-primary"
//                       onClick={() => {
//                         this.handleClick();
//                       }}
//                     >
//                       {/* {this.props.toBeUpdate !== null
//                         ? "Update Creativity"
//                         : "Add Creativity"} */}
//                       Add / Update
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     items: state.items,
//     users: state.users,
//   };
// };

// export default connect(mapStateToProps, {
//   addPainting,
//   updatePainting,
//   getUser,
// })(AddArtFormProfile);


import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from Axios
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
      name: "Mrunali Narkhede",
      _id: "",
      pname: "",
      category: "Nature",
      price: "",
      dimension: "",
      technique: "",
      desc: "",
      selectedFile: null,
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
    console.log(event.target.files[0]);
    this.setState({ selectedFile: event.target.files[0] });
    // if (nam === "file") {
    //   if (!val.endsWith(".jpg")) {
    //     console.log("ss" + val.endsWith(".jpg"));
    //     err_file = (
    //       <small style={{ color: "red" }}>Only JPG file Allowed</small>
    //     );
    //   }
    // }
    // this.setState({ err_file: err_file });
  };
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    console.log(nam + " " + val);
    let err = "";
    let err_mail = "";
    let err_desc = "";

    let err_pname = "";
    let err_dime = "";

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

    this.setState({ err_mail: err_mail });
    this.setState({ err_desc: err_desc });

    this.setState({ err_pname: err_pname });
    this.setState({ err_dime: err_dime });
    this.setState({ errormessage: err });
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
    // axios.post('')
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
                      onChange={this.myChangeHandler}
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
                          onChange={this.myChangeHandler}
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
                          onChange={this.myChangeHandler}
                          value={this.state.price}
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
                          onChange={this.myChangeHandler}
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
                    <button
                      type="button"
                      class="btn btn-outline-primary"
                      onClick={() => {
                        this.handleClick();
                      }}
                    >
                      {/* {this.props.toBeUpdate !== null
                        ? "Update Creativity"
                        : "Add Creativity"} */}
                      Add / Update
                    </button>
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