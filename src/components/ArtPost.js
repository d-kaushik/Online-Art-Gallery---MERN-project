// import React, { Component } from 'react'


// export class ArtPost extends Component {
//     constructor(props) { 
//         super(props);  
//         this.state = { 
//         email: '',  
//         password: '',  
//         errormessage: '' ,
//         err_mail:'',
//         err_pass:''
//         }; }
        
//         myChangeHandler = (event) => 
//         { 
//             let nam = event.target.name;  
//             let val = event.target.value;  
//             let err = ''; 
//             let err_mail='';
//             let err_pass='';
//             if (nam === "email") { 
//                 if (val=="") 
//                 { 
//                     err_mail = <small style={{color:'red'}}>Enter valid email</small>
//                     //err_mail=<small class="invalid-feedback">Please provide a valid zip.</small>
//                 } 
//             }
//             if (nam === "password")
//             {
//                 if (val.length<8)
//                 {
//                     // err_pass = <strong class="alert alert-danger">Invalid email or password</strong>; 
//                     err_pass = <small style={{color:'red'}}>Enter valid password</small>
//                 }
//             }
//             this.setState({err_mail: err_mail}); 
//             this.setState({err_pass: err_pass}); 
//             this.setState({errormessage: err});  
//             this.setState({[nam]: val}); 
//         }
//     render() {
//         return (
//             <div >
//                 <br></br>
//             <div className="container-sm border pt-3" style={{maxWidth:'500px'}}>
//             <h5 class="card-header" style={{ textAlign: 'center', backgroundColor: 'white' }}>Add your creativity</h5>
                    
//             <div class="card-body">
//                         <form method="post">
//                         <div class="form-group" >
//                                 <label>Painting name:</label>
//                                 <input type="text" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter full name" onChange={this.myChangeHandler} />
//                                 {this.state.err_mail}
//                                 {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
//                             </div>
//                             <div class="form-group" >
//                                 <label>Select category:</label>
//                                 <select class="form-control">
//                                     <option value="all">Nature</option>
//                                     <option value="selected">Multi-color</option>
//                                     </select></div>
//                                     <div class="form-group" >
//                             <label>Expected selling price:</label> 
//                                 <input type="number" class="form-control" name="email"  placeholder="Enter price here" onChange={this.myChangeHandler} />
//                                 {this.state.err_mail}</div>
//                                 {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
//                                 <div class="form-group" >   
//                             <label>Description:</label>
//                             <textarea type="text" className="form-control" rows="3" /></div>
//                             <div class="form-group">
//                 <label>Upload image:  </label>
//             <input type="file" class="form-control-file border" name="file"/>
//             </div>
             
//             <div class="d-flex justify-content-center">
//                             <button type="submit" class="btn btn-outline-primary" >Add creativity</button>
//                             </div>
//                         </form>
//                 </div>



//             </div>
//         </div>




//         )
//     }
// }

// export default ArtPost

import React, { Component } from "react";

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
      name: "Mrunali Narkhede",
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
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <div>
        <br></br>
        <div
          className="container-sm border pt-3 hoverable"
          style={{ maxWidth: "500px" }}
        >
          <h5
            class="card-header"
            style={{ textAlign: "center", backgroundColor: "white" }}
          >
            Add your creativity
          </h5>

          <div class="card-body">
            <form method="post">
              <div class="form-group">
                <label style={{textAlign:'center'}}>
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
              <div class="form-group">
                <label>Select category:</label>
                <select class="form-control">
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
                  placeholder="Price should be greater than 100"
                  onChange={this.myChangeHandler}
                />
                {this.state.err_mail}
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
                <button type="submit" class="btn btn-outline-primary">
                  Add creativity
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtPost;