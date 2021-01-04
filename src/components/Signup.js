import React, { Component } from 'react'
import { Link,Switch } from 'react-router-dom'

export class Signup extends Component {
    constructor(props) { 
        super(props);  
        this.state = { 
        err_mail:'',
        err_pass1:'',
        err_pass2:'',
        err_name:'',
        err_phone:'',
        }; }
        
        
        myChangeHandler = (event) => 
        { 
            let nam = event.target.name;  
            let val = event.target.value;  
            let err = ''; 
            let err_mail='';
            let err_name='';
            let err_phone='';
            if (nam === "name") { 
                if (val=="") 
                { 
                    err_name = <small style={{color:'red'}}>Name is compulsory field</small>
                } 
            }
            if (nam === "name") {
                console.log(val) 
                if (!val.match(/^[a-zA-Z]+$/)) 
                {
                    err_name = <small style={{color:'red'}}>Numbers are not allowed</small>  
                } 
            }
            if (nam === "email") { 
                if (val=="") 
                { 
                    err_mail = <small style={{color:'red'}}>Email is compulsory field</small>
                } 
            }
            if (nam === "email") { 
                let lastAtPos = val.lastIndexOf('@');
                let lastDotPos = val.lastIndexOf('.');
                if (!(lastAtPos < lastDotPos && lastAtPos > 0 &&val.indexOf('@@') == -1 && lastDotPos > 2 && (val.length - lastDotPos) > 2)) 
                { 
                    err_mail = <small style={{color:'red'}}>Invalid Email</small>
                    
                } 
            }
            if (nam === "phone") { 
                if (val=="") 
                { 
                    err_phone = <small style={{color:'red'}}>Mobile number is compulsory field</small>
                } 
                else if (val.length!=10) 
                { 
                    err_phone = <small style={{color:'red'}}>Invalid mobile number</small>
                }
                if (val.match(/^[a-zA-Z]+$/)) 
                {
                    err_phone = <small style={{color:'red'}}>Letters are not allowed</small>  
                }  
            }
            let err_pass2=''
            let err_pass1=''
            if (nam === "pass1")
            {
                if (val.length<6)
                {
                    err_pass1 = <small style={{color:'red'}}>Minimum six letters are require</small>
                }
                else if(val.length>10)
                {
                    err_pass1 = <small style={{color:'red'}}>Password is too long</small>
                }
            }
            if (nam === "pass2")
            {
                if (val.length<6)
                {
                    err_pass1 = <small style={{color:'red'}}>Minimum six letters are require</small>
                }
                else if(val.length>10)
                {
                    err_pass1 = <small style={{color:'red'}}>Password is too long</small>
                }
            }
            this.setState({err_mail: err_mail}); 
            this.setState({err_name: err_name}); 
            this.setState({err_pass1: err_pass1});
            this.setState({err_pass2: err_pass2}); 
            this.setState({errormessage: err});  
            this.setState({err_phone: err_phone});
            this.setState({[nam]: val}); 
        }
       
      
   
       
      
    render() {
        return (
            <div><br></br>
            {/* // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#eee' }}> */}
            <div className="container-sm border pt-3" style={{maxWidth:'500px'}}>
                    <h5 class="card-header" style={{ textAlign: 'center', backgroundColor: 'white' }}>Create Account</h5>
                    <div class="card-body">
                    {/* onSubmit= {this.contactSubmit.bind(this)} */}
                        <form method="post" >
                        <div class="form-group" >
                                <label>Full name:</label>
                                <input type="text" class="form-control" name="name" id="name" placeholder="Enter full name" onChange={this.myChangeHandler} />
                                {this.state.err_name}
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="form-group" >
                                <label>Email address:</label>
                                <input type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.myChangeHandler} />
                                {this.state.err_mail}
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="form-group" >
                            <label>Mobile number:</label>
                            <div class="form-group input-group" >
                            <div class="custom-select" style={{maxWidth: '60px'}}><label>+91</label></div>
                            <input type="text" class="form-control" name="phone"  placeholder="Enter mobile number" onChange={this.myChangeHandler} />
                            </div>{this.state.err_phone}</div>
                            
                            

                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control"  name="pass1" placeholder="Password" onChange={this.myChangeHandler}/>
                                
                                {this.state.err_pass}
                            </div>
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input type="password" class="form-control"   name="pass2" placeholder="Password" onChange={this.myChangeHandler}/>
                                
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
