import React, { Component } from 'react'
import { Link,Switch } from 'react-router-dom'

export class Login extends Component {
    constructor(props) { 
        super(props);  
        this.state = { 
        email: '',  
        password: '',  
        errormessage: '' ,
        err_mail:'',
        err_pass:''
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
    render() {
        return (
            <div>
                <br></br>
            <div className="container-sm border pt-3" style={{maxWidth:'500px'}}>
           <div>
                {/* <div class="jumbotron"> */}
                    <h5 class="card-header" style={{ textAlign: 'center', backgroundColor: 'white' }}>LOGIN</h5>
                    <div class="card-body">
                        <form method="post">
                            <div class="form-group" >
                                <label>Email address:</label>
                                <input type="text" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.myChangeHandler} />
                                {this.state.err_mail}
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" name="password" placeholder="Password" onChange={this.myChangeHandler}/>
                                
                                {this.state.err_pass}
                            </div>
                            {/* <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </form>

                        <br></br>
                        <label>Create new acoount? <Link to="/signup"><u style={{color:'#007BFF'}}><strong style={{color:'#007BFF'}}>SIGNUP</strong></u></Link></label>
                    </div>
                </div>
             </div>
             </div>


        )
    }
}

export default Login
