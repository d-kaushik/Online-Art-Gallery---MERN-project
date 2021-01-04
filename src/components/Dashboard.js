import React, { Component } from 'react'
import { Link,Switch } from 'react-router-dom'
import GraphsDemo from './GraphDemo'
import ReactDOM from 'react-dom';
import ArtPost from '../components/ArtPost'
import { Route, BrowserRouter as Router } from 'react-router-dom'


export class Dashboard extends Component {
    routing = (
    <Router>
    <Switch>
    <Route path="/Add-Art" component={ArtPost} />
    </Switch>
    </Router>);
     

    render() {
        //ReactDOM.render(<ArtPost></ArtPost>,document.getElementById('services'));
        return (
            <div class="row" >
                <aside class="col-sm-3"><br></br>
                    <div class="card">
                    <Link to="/Add-Art">
                    <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-outline-primary" >Add new art</button>
                            </div>
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
                </aside>

                <aside class="col" >
                <div>
              
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          See Art Information
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Information of Art</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h1>Graph Info</h1>
                <GraphsDemo></GraphsDemo>
                <dashboardinfo></dashboardinfo>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    </div>

 
  
   
                </aside>
              
<div id='services'></div>


</div>
        )
    }
}
// const routing = (
//     <Router>
//     <Switch>
//     <Route path="/Add-Art" component={ArtPost} />
//     </Switch>
//     </Router>)
// // ReactDOM.render(
// //     routing,
// //     document.getElementById("dash")
// //   );
// ReactDOM.render(<ArtPost></ArtPost>, 
//     document.getElementById('service'));

export default Dashboard
