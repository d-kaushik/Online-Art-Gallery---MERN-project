// import React, { Component } from 'react'
// import Footer from './Footer'
// export class ContactUs extends Component {

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
       

//         <section class="Material-contact-section section-padding section-dark">
//         <div class="container">
           
//             <div class="row">
             
                
               
//                 <div class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInRight" data-wow-delay=".2s">

// {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#eee' }}> */}
// <div className="container-sm  pt-3" style={{maxWidth:'500px'}}>
//                     <h5 class="card-header" style={{ textAlign: 'center', backgroundColor: 'white' }}>Love to Hear From You</h5>
//                     <div class="card-body">
//                         <form method="post">
//                         <div class="form-group" >
//                                 <label>Name:</label>
//                                 <input type="text" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter name" onChange={this.myChangeHandler} />
//                                 {this.state.err_mail}
//                                 {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
//                             </div>
//                             <div class="form-group" >
//                                 <label>Email address:</label>
//                                 <input type="text" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.myChangeHandler} />
//                                 {this.state.err_mail}
//                                 {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
//                             </div>
//                             <div class="form-group">
//                                 <label>Review</label>
//                                 <textarea type="text" className="form-control" rows="3" />
                  
       
//                             </div>
//                             <button type="submit" class="btn btn-outline-primary">Submit</button>
//                         </form>

                        
//                     </div>
           
//             </div>

//                 </div>

//                 <div class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
//                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619902.0054433027!2d-122.68851282163044!3d37.534535608111824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1507725785789" width="100%" height={538} frameBorder={0} style={{border: 0}} allowFullScreen data-aos="fade-left" data-aos-duration={3000} />
//                 </div>


//             </div>
//         </div>
//         <Footer></Footer>
//       </section>
//         )
//     }
// }

// export default ContactUs

import React, { Component } from "react";
import Footer from "./Footer";
export class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errormessage: "",
      err_mail: "",
      err_name: "",
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err_mail = "";
    let err_name = "";
    if (nam === "name") {
      if (!val.match(/^[a-zA-Z]+$/)) {
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
    if (nam === "email") {
      if (val == "") {
        err_mail = (
          <small style={{ color: "red" }}>Email is compulsory field</small>
        );
      }
    }
    if (nam === "email") {
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
  };

  render() {
    return (
      <section class="Material-contact-section section-padding section-dark">
        <div class="container">
          <div class="row">
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
                  <form method="post">
                    <div class="form-group">
                      <label>Name:</label>
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        aria-describedby="emailHelp"
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
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={this.myChangeHandler}
                      />
                      {this.state.err_mail}
                    </div>
                    <div class="form-group">
                      <label>Review</label>
                      <textarea type="text" className="form-control" rows="3" />
                    </div>
                    <button type="submit" class="btn btn-outline-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div
              class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft"
              data-wow-delay=".2s"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15127.481342293786!2d73.7382435!3d18.5798836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb8abc91bdca4c48!2sLTI!5e0!3m2!1sen!2sin!4v1609916582337!5m2!1sen!2sin" 
                width="100%"
                height={538}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                data-aos="fade-left"
                data-aos-duration={3000}
              />
            </div>
          </div>
        </div>
        <Footer></Footer>
      </section>
    );
  }
}

export default ContactUs;
