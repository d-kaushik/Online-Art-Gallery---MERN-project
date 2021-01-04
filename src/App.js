import logo from './logo.svg';
import './App.css';
import './Footer.css';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Link,Switch } from 'react-router-dom'
import Explore from './components/Explore';
import ArtPost from './components/ArtPost';
import Footer from './components/Footer';


function App() {

 
  const handleEvent = (event) => {
    
    <div class="text-center">
    <Link to="/Explore">
      <button  type="button" class="btn btn-outline-dark" >Explore</button>
      </Link>
    </div>
   }
  return (
    <div>
    {/* <div class="container">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div className="carousel-item active">
        <img class="d-block w-100" src={"/assets/img2.jpg"} alt="First slide"/>  
  
        <div class="carousel-caption d-none d-md-block">
        <Link to="/signup">
        <p><a class="btn btn-outline-primary"  role="button">Sign up today</a></p>
      </Link>
      
    </div>
  
        
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={"/assets/img3.jpg"} alt="Second slide"></img> 
        <div class="carousel-caption d-none d-md-block">
      
      <p><a class="btn btn-outline-primary" href="#" role="button">Explore Now</a></p>
    </div>
      </div>
      <div class="carousel-item">
        <img  class="d-block w-100" src={"/assets/img2.jpg"} alt="Third slide"></img>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div></div> */}
  
  <div class="pt-3">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
   
    {/* <div  class="bg-image hover-overlay ripple" data-mdb-ripple-color="light"> */}
   
    <div className="carousel-item active">
      
      <img class="d-block w-100" src={"/assets/img2.jpg"} alt="First slide"/> 
       
      
      <div class="carousel-caption">
      <Link to="/signup">
        <p><a class="btn btn-dark"  role="button">Sign up today</a></p>
      </Link>


  </div>   
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={"/assets/img3.jpg"} alt="Second slide"></img> 
      <div class="carousel-caption ">
      <Link to="/explore">
        <p><a class="btn btn-dark"  role="button">See our offers</a></p>
      </Link>
    
  </div>
    </div>
    <div class="carousel-item">
      <div  class="img-fluid"></div>
      <img  class="d-block w-100" src={"/assets/img2.jpg"} alt="Third slide"></img>
      <div class="carousel-caption">
      <div class="carousel-caption text-center">
                <h3>Looking for Paintings<br></br>
                Browse our collection</h3>
      <Link to="/signup">
        <p><a class="btn btn-dark"  role="button">Explore now</a></p>
      </Link>          
    
  </div>
  </div> 
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


      <hr class="featurette-divider"/>
      </div> 
     


      <div className="container marketing">
        {/* Three columns of text below the carousel */}
        <div className="row">
          <div className="col-lg-4" style={{textAlign:'center'}}>
            <img className="rounded-circle"  src="/assets/painting.jpg" alt="Generic placeholder image" width={140} height={140} />
            <h2>Heading</h2>
            <p>Discover the world of art & craft with KMPR.com. KMPR.com is an online marketplace that helps art collectors/lovers and enthusiasts to buy and sell art with ease from any part of the world. KMPR.com caters to original art (art investment), sculpture, digital prints, craft, home decor and many more. 
              Explore our online art gallery and grab your choice of painting or portraits or craft.</p>
            <p><a className="btn btn-outline-primary" href="#" role="button">View details »</a></p>
          </div>{/* /.col-lg-4 */}
          <div className="col-lg-4"style={{textAlign:'center'}}>
            <img className="rounded-circle" src="/assets/painting.jpg" alt="Generic placeholder image" width={140} height={140} />
            <h2>Heading</h2>
            <p>Discover the world of art & craft with KMPR.com. KMPR.com is an online marketplace that helps art collectors/lovers and enthusiasts to buy and sell art with ease from any part of the world. KMPR.com caters to original art (art investment), sculpture, digital prints, craft, home decor and many more. 
              Explore our online art gallery and grab your choice of painting or portraits or craft.</p>
            <p><a className="btn btn-outline-primary" href="#" role="button">View details »</a></p>
          </div>{/* /.col-lg-4 */}
          <div className="col-lg-4"style={{textAlign:'center'}}>
            <img className="rounded-circle" src="/assets/painting.jpg" alt="Generic placeholder image" width={140} height={140} />
            <h2>Heading</h2>
            <p>Discover the world of art & craft with KMPR.com. KMPR.com is an online marketplace that helps art collectors/lovers and enthusiasts to buy and sell art with ease from any part of the world. KMPR.com caters to original art (art investment), sculpture, digital prints, craft, home decor and many more. 
              Explore our online art gallery and grab your choice of painting or portraits or craft.</p>
            <p><a className="btn btn-outline-primary" href="#" role="button">View details »</a></p>
          </div>{/* /.col-lg-4 */}
        </div>{/* /.row */}
        {/* START THE FEATURETTES */}
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Some of the best figurative paintings. <span className="text-muted">It'll blow your mind.</span></h2>
            <p className="lead">Discover the world of art & craft with KMPR.com. KMPR.com is an online marketplace that helps art collectors/lovers and enthusiasts to buy and sell art with ease from any part of the world. KMPR.com caters to original art (art investment), sculpture, digital prints, craft, home decor and many more. 
              Explore our online art gallery and grab your choice of painting or portraits or craft.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{width: '500px', height: '500px'}} src="/assets/img1.jpg" data-holder-rendered="true" />
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Redefine spaces ,Abstract Paintings <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Discover the world of art & craft with KMPR.com. KMPR.com is an online marketplace that helps art collectors/lovers and enthusiasts to buy and sell art with ease from any part of the world. KMPR.com caters to original art (art investment), sculpture, digital prints, craft, home decor and many more. 
              Explore our online art gallery and grab your choice of painting or portraits or craft.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="/assets/painting.jpg" data-holder-rendered="true" style={{width: '500px', height: '500px'}} />
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, Handicrafts <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">Discover the world of art & craft with KMPR.com. KMPR.com is an online marketplace that helps art collectors/lovers and enthusiasts to buy and sell art with ease from any part of the world. KMPR.com caters to original art (art investment), sculpture, digital prints, craft, home decor and many more. 
              Explore our online art gallery and grab your choice of painting or portraits or craft.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="/assets/painting.jpg" data-holder-rendered="true" style={{width: '500px', height: '500px'}} />
          </div>
        </div>
        <hr className="featurette-divider" />
        {/* /END THE FEATURETTES */}
      </div>
    <Footer></Footer>
  </div>



    
    
  );


 


}

export default App;
