import React, { Component } from 'react'
import axios from "axios";
export class ContactUsForm extends Component {
    constructor(props) {
        super(props); 
        this.state = {
          mail: '',
          err_mail: '',
          err_name: '',
          name:'',
          mail:'',
          message:'',
          value:'',
          subject:''
        };
      }
      
 
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err_mail = "";
        let err_name = "";
        if (nam === "name") {
          if (!isNaN(val)) {
            err_name = (
              <small style={{ color: "red" }}>Numbers are not allowed</small>
            );
          }
        }
        if (nam === "name") {
          if (val == "") {
            err_name = (
              <small style={{ color: "red" }}>Name is compulsory field</small>
            );
          }
        }
        if (nam === "mail") {
          if (val == "") {
            err_mail = (
              <small style={{ color: "red" }}>Email is compulsory field</small>
            );
          }
        }
        if (nam === "mail") {
          let lastAtPos = val.lastIndexOf("@");
          let lastDotPos = val.lastIndexOf(".");
          if (
            !(
              lastAtPos < lastDotPos &&
              lastAtPos > 0 &&
              val.indexOf("@@") == -1 &&
              lastDotPos > 2 &&
              val.length - lastDotPos > 2
            )
          ) {
            err_mail = <small style={{ color: "red" }}>Invalid Email</small>;
          }
        }
        this.setState({ err_mail: err_mail });
        this.setState({ err_name: err_name });
        this.setState({[nam]:val});
    //     console.log(`Todo Description: ${this.state.name}`);
    // console.log("e" + nam);
      }
      onSubmitForm = () => {
        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Mail: ${this.state.mail}`);
        console.log(`Message: ${this.state.message}`);
    
        const newFeedback = {
          name: this.state.name,
          mail: this.state.mail,
          message:this.state.message
        };
    
        axios
          .post("http://localhost:5000/feedbackRoutes/send",newFeedback)
          .then((res) => console.log(res.data));
    
        this.setState({
            name: "",
            mail: "",
            message: ""
        });
      };
    render() {
        return (
            <div
            class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInRight"
            data-wow-delay=".2s"
          >
            <div className="container-sm  pt-3" style={{ maxWidth: "500px" }}>
              <h5
                class="card-header"
                style={{ textAlign: "center", backgroundColor: "white" }}
              >
                Love to Hear From You
              </h5>
              <div class="card-body">
                {/* <form > */}
                  <div class="form-group" >
                    <label>Name:</label>
                    <input type="text" 
                      value={this.state.name}
                      class="form-control"
                      name="name"
                      placeholder="Enter name"
                      onChange={this.myChangeHandler} 
                    />
                    {this.state.err_name}
                  </div>
                  <div class="form-group">
                    <label>Email address:</label>
                    <input
                      type="text"
                      class="form-control"
                      name="mail"
                      value={this.state.mail} 
                      placeholder="Enter email"
                      onChange={this.myChangeHandler} 
                    />
                    {this.state.err_mail}
                  </div>
                  <div class="form-group">
                    <label>Review</label>
                    <textarea type="text" 
                    className="form-control" 
                    rows="3" 
                    name="message"
                    onChange={this.myChangeHandler} 
                    value={this.state.message} 
                   />
                  </div>
                  <button type="submit" 
                  class="btn btn-outline-primary"
                  onClick={this.onSubmitForm} 
                  >
                    Submit
                  </button>
                {/* </form> */}
              </div>
            </div>
          </div>
        )
    }
}

export default ContactUsForm
