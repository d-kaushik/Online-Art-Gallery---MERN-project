import React, { Component } from 'react'
import { Link,Switch } from 'react-router-dom'
import {GraphDemo}  from "./GraphDemo"
export class Dashboard extends Component {
    render() {
        return (
            <div class="row">
                <aside class="col-sm-3"><br></br>
                    <div class="card">
                    <Link to="/Add-Art">
                    <button type="submit" class="btn btn-outline-primary" >Add new Art</button>
                    </Link>
      
                        <article class="card-group-item">
                            <header class="card-header">
                                <h6 class="title"><strong>Your Arts</strong> </h6>
                            </header>
                            <div class="filter-content">
                                <div class="card-body">
                                    <form>
                                        <label class="form-check">
                                                <span class="form-check-label">
                                                    Art 1</span>
				                        </label>
                                            <label class="form-check">
                                                    <span class="form-check-label">
                                                     Art 2
				                                    </span>
				                            </label>
                                                <label class="form-check">
                                                        <span class="form-check-label">
                                                            Art 3
				                                        </span>
				                                </label>  
			                        </form>

			                    </div> 
		                    </div>
	                    </article>

                        
</div>
</aside></div>
        )
    }
}

export default Dashboard
