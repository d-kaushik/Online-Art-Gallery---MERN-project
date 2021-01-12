
import "../App.css";
import "../Footer.css";
import { Link, Switch } from "react-router-dom";


function Home() {
  const handleEvent = (event) => {
    <div class="text-center">
      <Link to="/Explore">
        <button type="button" class="btn btn-outline-dark">
          Explore
        </button>
      </Link>
    </div>;
  };
  return (
    <div >
      <div>
        {/* Carousel wrapper */}
      <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to={0} className="active" />
          <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to={1} />
          <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to={2} />
        </ol>
          {/* Inner */}
         
        <div className="carousel-inner">
          <div className="carousel-item active">
                <img src="/assets/img4.jpg" className="d-block w-100" />
              <div className="bg-text">
                <h3>While drawing I discover what I really want to say. </h3>
              <button className="btn btn-outline-light"><strong>Signup</strong></button></div>
              </div>
            
          {/* Single item */}
          <div className="carousel-item">
                <img src="/assets/img5.webp" className="d-block w-100" />
              <div className="bg-text">
                <h3>While drawing I discover what I really want to say. </h3>
              <button className="btn btn-outline-light"><strong>Signup</strong></button></div>
              </div>
          {/* Single item */}
          <div className="carousel-item">
                <img src="/assets/img12.webp" className="d-block w-100"  />
              <div className="bg-text">
                <h3>While drawing I discover what I really want to say. </h3>
              <button className="btn btn-outline-light"><strong>Signup</strong></button></div>
              </div>
        </div>
        {/* Inner */}
        {/* Controls */}
        <a className="carousel-control-prev" href="#carouselBasicExample" role="button" data-mdb-slide="prev">
       
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselBasicExample" role="button" data-mdb-slide="next">
       
          <span className="visually-hidden">Next</span>
        </a>
        </div>
        </div>
      
      <br></br>

      <div className="container marketing">
        <h2 style={{fontFamily:'Trebuchet MS', textAlign:'center'}}><strong>Our Top Artist</strong></h2>
        <hr></hr>
        <div className="row">
          <div className="col-lg-3" style={{ textAlign: "center" }}>
            <img
              className="rounded-circle"
              src="/assets/artist1.jpeg"
              alt="Generic placeholder image"
              width={140}
              height={140}
            />
            <h3>Kaushik</h3>
            <p>
              Discover the world of art & craft with KMPR.com. KMPR.com is an
            </p>
            <p>
              <a className="btn btn-outline-primary" href="#" role="button">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-3" style={{ textAlign: "center" }}>
            <img
              className="rounded-circle"
              src="/assets/artist2.jpeg"
              alt="Generic placeholder image"
              width={140}
              height={140}
            />
            <h3>Mrunali</h3>
            <p>
              Discover the world of art & craft with KMPR.com. KMPR.com is an
            </p>
            <p>
              <a className="btn btn-outline-primary" href="#" role="button">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-3" style={{ textAlign: "center" }}>
            <img
              className="rounded-circle"
              src="/assets/artist3.jpeg"
              alt="Generic placeholder image"
              width={140}
              height={140}
            />
            <h3>Priyanka</h3>
            <p>
              Discover the world of art & craft with KMPR.com. KMPR.com is an
             
            </p>
            <p>
              <a className="btn btn-outline-primary" href="#" role="button">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-3" style={{ textAlign: "center" }}>
            <img
              className="rounded-circle"
              src="/assets/artist4.jpeg"
              alt="Generic placeholder image"
              width={140}
              height={140}
            />
            <h3>Rohan</h3>
            <p>
              Discover the world of art & craft with KMPR.com. KMPR.com is an
              
            </p>
            <p>
              <a className="btn btn-outline-primary" href="#" role="button">
                View details »
              </a>
            </p>
          </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Some of the best figurative paintings.{" "}
              <span className="text-muted">It'll blow your mind.</span>
            </h2>
            <p className="lead">
              Discover the world of art & craft with KMPR.com. KMPR.com is an
              online marketplace that helps art collectors/lovers and
              enthusiasts to buy and sell art with ease from any part of the
              world. KMPR.com caters to original art (art investment),
              sculpture, digital prints, craft, home decor and many more.
              Explore our online art gallery and grab your choice of painting or
              portraits or craft.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="500x500"
              style={{ width: "500px", height: "500px" }}
              src="/assets/img1.jpg"
              data-holder-rendered="true"
            />
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Redefine spaces ,Abstract Paintings{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Discover the world of art & craft with KMPR.com. KMPR.com is an
              online marketplace that helps art collectors/lovers and
              enthusiasts to buy and sell art with ease from any part of the
              world. KMPR.com caters to original art (art investment),
              sculpture, digital prints, craft, home decor and many more.
              Explore our online art gallery and grab your choice of painting or
              portraits or craft.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="500x500"
              src="/assets/painting.jpg"
              data-holder-rendered="true"
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              And lastly, Handicrafts{" "}
              <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              Discover the world of art & craft with KMPR.com. KMPR.com is an
              online marketplace that helps art collectors/lovers and
              enthusiasts to buy and sell art with ease from any part of the
              world. KMPR.com caters to original art (art investment),
              sculpture, digital prints, craft, home decor and many more.
              Explore our online art gallery and grab your choice of painting or
              portraits or craft.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="500x500"
              src="/assets/painting.jpg"
              data-holder-rendered="true"
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>
        <hr className="featurette-divider" />
      </div>
    </div>
  );
}

export default Home;
