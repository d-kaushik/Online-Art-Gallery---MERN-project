import React, { Component } from 'react'
import AllArts from "./AllArts";
import "./CardLayout.css";
import Footer from './Footer';

export class Explore extends Component {
    render() {
        return (

<div>
<div class="row">
<aside class="col-sm-2" style={{}}><br></br>
    <div class="card">
        <article class="card-group-item">
            <header class="card-header">
                <h6 class="title"><strong>Categories</strong> </h6>
            </header>
            <div class="filter-content">
                <div class="card-body">
                    <form>
                        <label class="form-check">
                            <input class="form-check-input" type="checkbox" value=""/>
                                <span class="form-check-label">
                                    Nature</span>
                </label>
                            <label class="form-check">
                                <input class="form-check-input" type="checkbox" value=""/>
                                    <span class="form-check-label">
                                       Landscape
                            </span>
                    </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value=""/>
                                        <span class="form-check-label">
                                            Black and white
                                </span>
                        </label>  
              </form>

          </div> 
        </div>
      </article>

        <article class="card-group-item">
            <header class="card-header">
                <h6 class="title"><strong>Artist</strong> </h6>
            </header>
            <div class="filter-content">
                <div class="card-body">
                    <form>
                        <label class="form-check">
                            <input class="form-check-input" type="checkbox" value=""/>
                                <span class="form-check-label">
                                Andy Warhol</span>
                </label>
                            <label class="form-check">
                                <input class="form-check-input" type="checkbox" value=""/>
                                    <span class="form-check-label">
                                    Vincent van Gogh
                            </span>
                    </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value=""/>
                                        <span class="form-check-label">
                                        Henri Matisse
                                </span>
                        </label>  
              </form>

          </div> 
        </div>
      </article>

        <article class="card-group-item">
            <header class="card-header">
                <h6 class="title"><strong>Rating</strong></h6>
            </header>
            <div class="filter-content">
                <div class="card-body">
                    <label class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadio" value=""/>
                        <span class="form-check-label">
                        Five star
                  </span>
              </label>
                    <label class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadio" value=""/>
                        <span class="form-check-label">
                           Four star
                  </span>
              </label>
                    <label class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadio" value=""/>
                        <span class="form-check-label">
                            Three star
                  </span>
              </label>
          </div> </div>
      </article> 

        <article class="card-group-item">
            <header class="card-header">
                <h6 class="title"><strong>Discount range</strong> </h6>
            </header>
            <div class="filter-content">
                <div class="card-body">
                    <label class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadio" value=""/>
                        <span class="form-check-label">
                        10% and above
                  </span>
              </label>
                    <label class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadio" value=""/>
                        <span class="form-check-label">
                            20% and above
                  </span>
              </label>
                    <label class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadio" value=""/>
                        <span class="form-check-label">
                            30% and above
                  </span>
              </label>
          </div> </div>
      </article> 
</div>
</aside>
<aside class="col-sm-9"><br></br>
{/* <Cards index={index} title={card.title} artist={card.artist} currency={card.currency} price={card.price} desc={card.desc} cart={card.carted}></Cards>  */}
<AllArts></AllArts>
</aside>


</div>
<Footer></Footer>
</div>
        )
    }
}

export default Explore


