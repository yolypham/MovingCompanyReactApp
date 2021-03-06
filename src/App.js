import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';

import './App.css';
import logo from './img/Big_Move.jpg';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Navbar */}

          <nav class="navbar sticky-top navbar-expand-sm navbar-dark move-head mb-3">
            <div class="container">
              <img class="img-fluid move-logo" src={logo} />

              <p
                class="navbar-toggler move-nav-toggler"
                data-toggle="collapse"
                data-target="#navbarNav"
              >
                MENU
              </p>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                  <Link to="/" class="nav-item">
                    <a class="nav-link text-uppercase move-head-link" href="#">
                      Home
                    </a>
                  </Link>
                  <Link to="/aboutus" class="nav-item">
                    <a class="nav-link text-uppercase move-head-link" href="#">
                      About Us
                    </a>
                  </Link>
                  <Link to="/service" class="nav-item">
                    <a class="nav-link text-uppercase move-head-link" href="#">
                      Services
                    </a>
                  </Link>
                  <Link to="/service" class="nav-item">
                    <a class="nav-link text-uppercase  move-head-link" href="#">
                      News
                    </a>
                  </Link>
                  <Link to="/service" class="nav-item">
                    <a class="nav-link text-uppercase move-head-link" href="#">
                      Contact
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>

          {/* Content  */}

          <Route exact path="/" component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/aboutus" component={About} />

          {/* Footer */}

          <footer class="page-footer font-small pt-4 move-footer-bkg">
            <div class="container container-fluid text-center text-md-left">
              <div class="row">
                <div id="move-foot-menu" class="col-sm-2">
                  <ul class="list-unstyled">
                    <Link to="/" class="nav-item">
                      <a
                        class="nav-link text-uppercase move-footer-link"
                        href="#"
                      >
                        Home
                      </a>
                    </Link>
                    <Link to="/aboutus" class="nav-item">
                      <a
                        class="nav-link text-uppercase move-footer-link"
                        href="#"
                      >
                        About Us
                      </a>
                    </Link>
                    <Link to="/service" class="nav-item">
                      <a
                        class="nav-link text-uppercase move-footer-link"
                        href="#"
                      >
                        Services
                      </a>
                    </Link>
                    <Link to="/service" class="nav-item">
                      <a
                        class="nav-link text-uppercase move-footer-link"
                        href="#"
                      >
                        News
                      </a>
                    </Link>
                    <Link to="/service" class="nav-item">
                      <a
                        class="nav-link text-uppercase move-footer-link"
                        href="#"
                      >
                        Contact
                      </a>
                    </Link>
                  </ul>
                </div>

                <div class="col-md-6 mt-md-0 mt-3">
                  <h5 class="text-uppercase">Contact Us</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing ept.</p>
                  <p>
                    <strong>Email:</strong> hello@email.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +375 (23) 873-37-98, +375 (23)
                    899-89-01
                  </p>
                  <p>
                    <strong>Mail:</strong> 20 Lorem ipsumdo sit amet,
                    <br />
                    6046 Larsinac, Country
                  </p>
                </div>

                <div class="col-md-4 mt-md-0 mt-3">
                  <h5 class="text-uppercase">Newsletter</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  <form action="">
                    <input
                      className="form-control mr-sm-2"
                      type="email"
                      placeholder="Enter email"
                    />
                    <p />
                    <button className="move-btn btn btn-primary" type="submit">
                      SUMMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="footer-copyright text-center py-3 move-copyright">
              © Copyright: All Rights Reserved
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
