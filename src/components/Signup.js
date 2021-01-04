import React, { Component } from 'react'
import { Link,Switch } from 'react-router-dom'

export class Signup extends Component {
    constructor(props) { 
        super(props);  
        this.state = { 
        email: '',  
        password: '',  
        errormessage: '' ,
        err_mail:'',
        err_pass:'',
        err_name:'',
        fields: {},
        errors: {}
        }; }
        
        myChangeHandler = (event) => 
        { 
            let nam = event.target.name;  
            let val = event.target.value;  
            let err = ''; 
            let err_mail='';
            let err_pass='';
            if (nam === "email") { 
                if (val=="") 
                { 
                    err_mail = <small style={{color:'red'}}>Enter valid email</small>
                    //err_mail=<small class="invalid-feedback">Please provide a valid zip.</small>
                } 
            }
            if (nam === "password")
            {
                if (val.length<8)
                {
                    // err_pass = <strong class="alert alert-danger">Invalid email or password</strong>; 
                    err_pass = <small style={{color:'red'}}>Enter valid password</small>
                }
            }
            this.setState({err_mail: err_mail}); 
            this.setState({err_pass: err_pass}); 
            this.setState({errormessage: err});  
            this.setState({[nam]: val}); 
        }
        contactSubmit(e){
            e.preventDefault();

            if(this.handleValidation()){
               alert("Form submitted");
            }else{
               alert("Form has errors.")
            }
      
        }
        handleChange(field, e){         
            let fields = this.state.fields;
            fields[field] = e.target.value;        
            this.setState({fields});
        }
        handleValidation(){
            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;
            let err_name='';
            let err_mail='';

            //Name
            if(!fields["name"]){
               formIsValid = false;
               errors["name"] = "Cannot be empty";
                err_name=<small style={{color:'red'}}>Field is compulsory</small>
            }
      
            if(typeof fields["name"] !== "undefined"){
               if(!fields["name"].match(/^[a-zA-Z]+$/)){
                  formIsValid = false;
                  err_name=<small style={{color:'red'}}>Numbers are not allowed</small>
               }        
            }
       
            //Email
            if(!fields["email"]){
               formIsValid = false;
               err_mail=<small style={{color:'red'}}>Field is compulsory</small>
            }
      
            if(typeof fields["email"] !== "undefined"){
               let lastAtPos = fields["email"].lastIndexOf('@');
               let lastDotPos = fields["email"].lastIndexOf('.');

               if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                  formIsValid = false;
                  err_mail=<small style={{color:'red'}}>Enter valid Email address</small>
                }
           }  

           this.setState({errors: errors});
           return formIsValid;
       }handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }
  
        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
           }        
        }
   
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }
  
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
   }
    render() {
        return (
            <div><br></br>
            {/* // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#eee' }}> */}
            <div className="container-sm border pt-3" style={{maxWidth:'500px'}}>
                    <h5 class="card-header" style={{ textAlign: 'center', backgroundColor: 'white' }}>Create Account</h5>
                    <div class="card-body">
                        <form method="post" onSubmit= {this.contactSubmit.bind(this)}>
                        <div class="form-group" >
                                <label>Full name:</label>
                                <input type="text" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter full name" onChange={this.myChangeHandler} />
                                {this.state.err_mail}
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="form-group" >
                                <label>Email address:</label>
                                <input type="text" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.myChangeHandler} />
                                {this.state.err_mail}
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <label>Mobile number:</label>
                            <div class="form-group input-group" >
                            
                            <div class="custom-select" style={{maxWidth: '60px'}}><label>+91</label></div>
                                
                                <input type="text" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter mobile number" onChange={this.myChangeHandler} />
                                {this.state.err_mail}
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            
                            

                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" name="password" placeholder="Password" onChange={this.myChangeHandler}/>
                                
                                {this.state.err_pass}
                            </div>
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input type="password" class="form-control" name="password" placeholder="Password" onChange={this.myChangeHandler}/>
                                
                                {this.state.err_pass}
                            </div>
                            {/* <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" class="btn btn-primary">Create Account</button>
                        </form>

                        <br></br>
                        <label>Already have an account? <Link to="/login"><u style={{color:'#007BFF'}}><strong style={{color:'#007BFF'}}>LOGIN</strong></u></Link></label>
                    </div>
                </div></div>
    
        )
    }
}

export default Signup
