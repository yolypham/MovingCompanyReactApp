import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (

<div>

    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="slide1"></div>
            <div class="carousel-caption d-none d-md-block">
                <h5>message here</h5>
                <p>more msg</p>
            </div>        
        </div>
        
        <div className="carousel-item">
            <div className="slide2"></div>
            <div class="carousel-caption d-none d-md-block">
                <h5>message here</h5>
                <p>more msg</p>
            </div>        
        </div>

        <div className="carousel-item">
            <div className="slide3"></div>
            <div class="carousel-caption d-none d-md-block">
                <h5>message here</h5>
                <p>more msg</p>
            </div>        
        </div>

    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
    </div>

</div>

    )
  }
}

export default Home;