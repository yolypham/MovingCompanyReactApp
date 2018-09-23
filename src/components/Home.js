import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="img-fluid slide1" />
              <div class="carousel-caption d-none d-md-block">
                <p className="move-txt-slide1">Moving Without Borders</p>
                <p className="move-txt-slide1s">7 Days | 24 Hours</p>
              </div>
            </div>

            <div className="carousel-item">
              <div className="img-fluid slide2" />
              <div class="carousel-caption d-none d-md-block ">
                <p className="move-txt-slide2"> We'll do all the hard work</p>
              </div>
            </div>

            <div className="carousel-item">
              <div className="img-fluid slide3" />
              <div class="carousel-caption d-none d-md-block">
                <p className="move-txt-slide3">Save Time and Money</p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
