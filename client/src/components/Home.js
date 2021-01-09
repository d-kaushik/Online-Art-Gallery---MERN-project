// import logo from "./logo.svg";
import "../App.css";
import "../Footer.css";
// import ReactDOM from "react-dom";
// import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link, Switch } from "react-router-dom";
// import Explore from './components/Explore';
// import ArtPost from './components/ArtPost';
// import Footer from "./Footer";

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
    <div>
      <div
        id="carouselDarkVariant"
        class="carousel slide carousel-fade carousel-dark"
        data-mdb-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to="0"
            class="active"
          ></li>
          <li data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="1"></li>
          <li data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselDarkVariant"
          role="button"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselDarkVariant"
          role="button"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
      <br></br>

      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <img
              className="rounded-circle"
              src="/assets/painting.jpg"
              alt="Generic placeholder image"
              width={140}
              height={140}
            />
            <h2>Heading</h2>
            <p>
              Discover the world of art & craft with KMPR.com. KMPR.com is an
              online marketplace that helps art collectors/lovers and
              enthusiasts to buy and sell art with ease from any part of the
              world. KMPR.com caters to original art (art investment),
              sculpture, digital prints, craft, home decor and many more.
              Explore our online art gallery and grab your choice of painting or
              portraits or craft.
            </p>
            <p>
              <a className="btn btn-outline-primary" href="#" role="button">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <img
              className="rounded-circle"
              src="/assets/painting.jpg"
              alt="Generic placeholder image"
              width={140}
              height={140}
            />
            <h2>Heading</h2>
            <p>
              Discover the world of art & craft with KMPR.com. KMPR.com is an
              online marketplace that helps art collectors/lovers and
              enthusiasts to buy and sell art with ease from any part of the
              world. KMPR.com caters to original art (art investment),
              sculpture, digital prints, craft, home decor and many more.
              Explore our online art gallery and grab your choice of painting or
              portraits or craft.
            </p>
            <p>
              <a className="btn btn-outline-primary" href="#" role="button">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <img
              className="rounded-circle"
              src="/assets/painting.jpg"
              alt="Generic placeholder image"
              width={140}
              height={140}
            />
            <h2>Heading</h2>
            <p>
              Discover the world of art & craft with KMPR.com. KMPR.com is an
              online marketplace that helps art collectors/lovers and
              enthusiasts to buy and sell art with ease from any part of the
              world. KMPR.com caters to original art (art investment),
              sculpture, digital prints, craft, home decor and many more.
              Explore our online art gallery and grab your choice of painting or
              portraits or craft.
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
