import React, { Component } from 'react';

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

class Service extends Component {
  render() {
    return (
      <div className="container">
        <div className="move-img-service px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center img-fluid">
          <h6 className="display-4 move-font-lalezar-white">Services</h6>
        </div>
        <div className="move-flex">
          <div className="container left-menu">
            <p>&nbsp;</p>
            <p className="move-bold">SERVICES</p>
            <p className="move-bold">AIR DELIVERY</p>
            <p className="move-bold">GROUND SHIPPING</p>
            <p className="move-bold">SEA DELIVERY</p>
          </div>

          <div className="container right-content">
            <h3 className="text-uppercase">
              <br />
              What we do
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="move-flex">
              <div className="row">
                <div className="col-md-4">
                  <div className="move-card-item mb-4">
                    <img className="img-fluid" src={img1} />
                    <div className="move-item">
                      <h5>Air Delivery</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="move-card-item mb-4">
                    <img className="img-fluid" src={img2} />
                    <div className="move-item">
                      <h5>Ground Shipping</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="move-card-item mb-4">
                    <img className="img-fluid" src={img3} />
                    <div className="move-item">
                      <h5>Sea Delivery</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
