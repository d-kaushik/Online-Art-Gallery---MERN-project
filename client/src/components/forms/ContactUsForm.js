import React, { Component } from 'react'
import axios from "axios";

export class ContactUsForm extends Component {
    constructor(props) {
        super(props); 
        this.state = {
          mail: '',
          err_mail: '',
          err_name: '',
          err_message:'',
          name:'',
          mail:'',
          message:'',
          value:'',
          subject: '',
          nameCheck: false,
          emailCheck: false,
          messageCheck:false
        };
      }
    myNameChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err_name = "";
    if (!isNaN(val)) {
        err_name = (
          <small style={{ color: "red" }}>Numbers are not allowed</small>
      );
      this.setState({nameCheck:false});
    }
    else {
      this.setState({nameCheck:true});
    }
    if (val == "") {
        err_name = (
          <small style={{ color: "red" }}>Name is compulsory field</small>
      );
      this.setState({nameCheck:false});
    }
    this.setState({ err_name: err_name });
    this.setState({ [nam]: val });
  }
  myEmailChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err_mail = "";
    if (val == "") {
        err_mail = (
          <small style={{ color: "red" }}>Email is compulsory field</small>
      );
      this.setState({emailCheck:false})
    }
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
      )
      {
        err_mail = <small style={{ color: "red" }}>Invalid Email</small>;
        this.setState({emailCheck:false})
      }
      else {
        this.setState({emailCheck:true})
    }
    this.setState({ [nam]: val });
    this.setState({ err_mail: err_mail });
  }
  myMessageChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err_message = "";
     
    if (val == "") {
        err_message = (
          <small style={{ color: "red" }}>Message is compulsory field</small>
          
      );
      this.setState({messageCheck:false});
    }
    else {
      this.setState({messageCheck:true});
    }
    this.setState({ err_message: err_message });
    this.setState({ [nam]: val });

  }
      onSubmitForm = () => {
        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        // if (this.state.name === "") {
        //   alert('Name is compulsory')
        // }
        // else if (!isNaN(this.state.name)) {
        //   alert('Numbers are not allowed in name field')
        // }
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
                  <div class="form-group" >
                    <label>Name:</label>
                    <input type="text" 
                      value={this.state.name}
                      class="form-control"
                      name="name"
                      placeholder="Enter name"
                      onChange={this.myNameChangeHandler} 
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
                      onChange={this.myEmailChangeHandler} 
                    />
                    {this.state.err_mail}
                  </div>
                  <div class="form-group">
                    <label>Review</label>
                    <textarea type="text" 
                    className="form-control" 
                    rows="3" 
                    name="message"
                    onChange={this.myMessageChangeHandler} 
                    value={this.state.message} 
                  />
                  {this.state.err_message}
                  </div>
                  <button type="submit" 
                  class="btn btn-outline-primary"
                  onClick={this.onSubmitForm} 
                  disabled={this.state.nameCheck && this.state.emailCheck && this.state.messageCheck? false: true}
                >
                  
                    Submit
                  </button>
              </div>
            </div>
          </div>
        )
    }
}

export default ContactUsForm
