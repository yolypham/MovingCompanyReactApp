import React, { Component } from 'react';
import aboutus from '../img/about.jpg';
import img1 from '../img/people1.jpg';
import img2 from '../img/people1.jpg';
import img3 from '../img/people1.jpg';

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="move-img-about px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center img-fluid">
          <h6 className="display-4 move-font-lalezar-white">About Us</h6>
        </div>

        <h3 className="move-caps">
          <br />
          We Care about People
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="move-flex">
          <div className="row">
            <div className="col-md-4">
              <div className="move-card-item mb-4">
                <img className="img-fluid" src={img1} />
                <div className="move-item">
                  <h5>Trust</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="move-card-item mb-4">
                <img className="img-fluid" src={img2} />
                <div className="move-item">
                  <h5>Punctual</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="move-card-item mb-4">
                <img className="img-fluid" src={img3} />
                <div className="move-item">
                  <h5>Customer Focus</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
