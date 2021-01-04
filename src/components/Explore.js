// import React, { Component } from 'react'
// import AllArts from './AllArts';
// import "./CardLayout.css";
// import Cart from './Cart'

// export class Explore extends Component {
//     render() {
//         return (
// //             <div class="container">
// //     <div class="jumbotron">

// //     <div class="md-form active-cyan-2 mb-3">
// //   <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
// // </div>


   
// //       <div className="row">
// //         <div className="col">
// // 		<select class="form-control">
// // 				<option value="">Prize</option>
// // 				<option value="all">1000-2000</option>
// // 				<option value="selected">2000-3000</option>
// //         <option value="selected">3000</option>
// // 		</select>
// //     </div>
// //     <div className="col">
// //     <select class="form-control">
// // 				<option value="">Category</option>
// // 				<option value="all">Nature</option>
// // 				<option value="selected">Multi-color</option>
// // 		</select>
// //     </div>
// //     <div className="col">
// //     <select class="form-control">
// // 				<option value="">Rating</option>
// // 				<option value="all">5 star</option>
// // 				<option value="selected">4 star</option>
// //         <option value="selected">3 star</option>
// //         <option value="selected">2 star</option>
// // 		</select>
// //     </div>
// //     <div className="col">
// //     <select class="form-control">
// // 				<option value="">Favorite artist</option>
// // 				<option value="all">Joe</option>
// // 				<option value="selected">Michel</option>
// // 		</select>
// //     </div>
// //     </div>


// //   </div>
 
// //   </div>


// <div class="row">
// <aside class="col-sm-3"><br></br>
//     <div class="card">
//         <article class="card-group-item">
//             <header class="card-header">
//                 <h6 class="title"><strong>Categories</strong> </h6>
//             </header>
//             <div class="filter-content">
//                 <div class="card-body">
//                     <form>
//                         <label class="form-check">
//                             <input class="form-check-input" type="checkbox" value=""/>
//                                 <span class="form-check-label">
//                                     Nature</span>
//                 </label>
//                             <label class="form-check">
//                                 <input class="form-check-input" type="checkbox" value=""/>
//                                     <span class="form-check-label">
//                                        Landscape
//                             </span>
//                     </label>
//                                 <label class="form-check">
//                                     <input class="form-check-input" type="checkbox" value=""/>
//                                         <span class="form-check-label">
//                                             Black and white
//                                 </span>
//                         </label>  
//               </form>

//           </div> 
//         </div>
//       </article>

//         <article class="card-group-item">
//             <header class="card-header">
//                 <h6 class="title"><strong>Artist</strong> </h6>
//             </header>
//             <div class="filter-content">
//                 <div class="card-body">
//                     <form>
//                         <label class="form-check">
//                             <input class="form-check-input" type="checkbox" value=""/>
//                                 <span class="form-check-label">
//                                 Andy Warhol</span>
//                 </label>
//                             <label class="form-check">
//                                 <input class="form-check-input" type="checkbox" value=""/>
//                                     <span class="form-check-label">
//                                     Vincent van Gogh
//                             </span>
//                     </label>
//                                 <label class="form-check">
//                                     <input class="form-check-input" type="checkbox" value=""/>
//                                         <span class="form-check-label">
//                                         Henri Matisse
//                                 </span>
//                         </label>  
//               </form>

//           </div> 
//         </div>
//       </article>

//         <article class="card-group-item">
//             <header class="card-header">
//                 <h6 class="title"><strong>Rating</strong></h6>
//             </header>
//             <div class="filter-content">
//                 <div class="card-body">
//                     <label class="form-check">
//                     <input class="form-check-input" type="radio" name="exampleRadio" value=""/>
//                         <span class="form-check-label">
//                         Five star
//                   </span>
//               </label>
//                     <label class="form-check">
//                     <input class="form-check-input" type="radio" name="exampleRadio" value=""/>
//                         <span class="form-check-label">
//                            Four star
//                   </span>
//               </label>
//                     <label class="form-check">
//                     <input class="form-check-input" type="radio" name="exampleRadio" value=""/>
//                         <span class="form-check-label">
//                             Three star
//                   </span>
//               </label>
//           </div> </div>
//       </article> 

//         <article class="card-group-item">
//             <header class="card-header">
//                 <h6 class="title"><strong>Discount range</strong> </h6>
//             </header>
//             <div class="filter-content">
//                 <div class="card-body">
//                     <label class="form-check">
//                     <input class="form-check-input" type="radio" name="exampleRadio" value=""/>
//                         <span class="form-check-label">
//                         10% and above
//                   </span>
//               </label>
//                     <label class="form-check">
//                     <input class="form-check-input" type="radio" name="exampleRadio" value=""/>
//                         <span class="form-check-label">
//                             20% and above
//                   </span>
//               </label>
//                     <label class="form-check">
//                     <input class="form-check-input" type="radio" name="exampleRadio" value=""/>
//                         <span class="form-check-label">
//                             30% and above
//                   </span>
//               </label>
//           </div> </div>
//       </article> 
// </div>
// </aside>
// <aside class="col-sm-9"><br></br>
// {/* <Cards index={index} title={card.title} artist={card.artist} currency={card.currency} price={card.price} desc={card.desc} cart={card.carted}></Cards>  */}
// <AllArts></AllArts>
// </aside>


// </div>
//         )
//     }
// }

// export default Explore


import React, { Component } from 'react'
import AllArts from './AllArts';
import "./CardLayout.css";
import Cart from './Cart'

export class Explore extends Component {
    render() {
        return (
//             <div class="container">
//     <div class="jumbotron">

//     <div class="md-form active-cyan-2 mb-3">
//   <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
// </div>


   
//       <div className="row">
//         <div className="col">
// 		<select class="form-control">
// 				<option value="">Prize</option>
// 				<option value="all">1000-2000</option>
// 				<option value="selected">2000-3000</option>
//         <option value="selected">3000</option>
// 		</select>
//     </div>
//     <div className="col">
//     <select class="form-control">
// 				<option value="">Category</option>
// 				<option value="all">Nature</option>
// 				<option value="selected">Multi-color</option>
// 		</select>
//     </div>
//     <div className="col">
//     <select class="form-control">
// 				<option value="">Rating</option>
// 				<option value="all">5 star</option>
// 				<option value="selected">4 star</option>
//         <option value="selected">3 star</option>
//         <option value="selected">2 star</option>
// 		</select>
//     </div>
//     <div className="col">
//     <select class="form-control">
// 				<option value="">Favorite artist</option>
// 				<option value="all">Joe</option>
// 				<option value="selected">Michel</option>
// 		</select>
//     </div>
//     </div>


//   </div>
 
//   </div>


<div class="row">
<aside class="col-sm-3"><br></br>
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
        )
    }
}

export default Explore


