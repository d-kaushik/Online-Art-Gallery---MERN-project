import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#f5f5f5'}}>
                <footer class="container py-5 text-lg-start" >
      <div class="row">
        <div class="col-12 col-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
          <small class="d-block mb-3 text-muted">© 2020-2021</small>
          <div class="social">
              <a href="https://www.facebook.com/"><span class="fab fa-facebook-f"></span></a>
              <a href="https://twitter.com/"><span class="fab fa-twitter"></span></a>
              <a href="https://www.instagram.com/"><span class="fab fa-instagram"></span></a>
              <a href="https://www.youtube.com/"><span class="fab fa-youtube"></span></a>
            </div>
        </div>
        <div class="col-6 col-md">
          <h5>Categories</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Nature</a></li>
            <li><a class="text-muted" href="#">Landscape</a></li>
            <li><a class="text-muted" href="#">Black and white</a></li>
            
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Artists</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Andy Warhol</a></li>
            <li><a class="text-muted" href="#">Vincent van Gogh</a></li>
            <li><a class="text-muted" href="#">Henri Matisse</a></li>
          
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>About</h5>
         <p class="text-muted"> Discover the world of art & craft with KMPR.com. 
              Explore our online art gallery and grab your choice of painting or portraits or craft. </p>
        </div>
       
      </div>
      <hr class="featurette-divider"/>
      <div class=" text-muted text-center text-small">
    
        © 2020-2021 KMPR Art Gallery</div>
        
    </footer>

            </div>
        )
    }
}

export default Footer
