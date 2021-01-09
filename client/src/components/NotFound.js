import React from 'react'
import { Link,Switch } from 'react-router-dom'

const NotFount=()=>
<div className="container pt-5" style={{textAlign:'center'}}>
<div className="row">
  <div className="col-md-12">
    <div className="error-template"> 
    <img 
    src={"/assets/logo.png"} />     
    <h1>Oops!</h1>
      <h2>
      We couldn't find any matches!</h2>
      <div className="error-details">
        Sorry, an error has occured, Requested page not found!
      </div>
      <br></br>
      <div className="error-actions">
        <a className="btn btn-outline-primary"><span className="glyphicon glyphicon-home" />
        <Link to='/' >Take me Home</Link>
          </a>
      </div>
    </div>
  </div>
</div>
</div>

export default NotFount;
