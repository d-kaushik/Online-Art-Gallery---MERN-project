import React, { Component } from 'react'


export class ArtPost extends Component {
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
            <div >
                <br></br>
            <div className="container-sm border pt-3" style={{maxWidth:'500px'}}>
            <h5 class="card-header" style={{ textAlign: 'center', backgroundColor: 'white' }}>Add your creativity</h5>
                    
            <div class="card-body">
                        <form method="post">
                        <div class="form-group" >
                                <label>Painting name:</label>
                                <input type="text" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter full name" onChange={this.myChangeHandler} />
                                {this.state.err_mail}
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="form-group" >
                                <label>Select category:</label>
                                <select class="form-control">
                                    <option value="all">Nature</option>
                                    <option value="selected">Multi-color</option>
                                    </select></div>
                                    <div class="form-group" >
                            <label>Expected selling price:</label> 
                                <input type="number" class="form-control" name="email"  placeholder="Enter price here" onChange={this.myChangeHandler} />
                                {this.state.err_mail}</div>
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                <div class="form-group" >   
                            <label>Description:</label>
                            <textarea type="text" className="form-control" rows="3" /></div>
                             
            <div class="form-group">
                <label>Upload image:  </label>
            <input type="file" class="form-control-file border" name="file"/>
            </div>
                            <button type="submit" class="btn btn-primary">Share Painting</button>
                        </form>
                </div>



            </div>
        </div>




        )
    }
}

export default ArtPost
