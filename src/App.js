import React, { Component } from 'react';
//import Header from './components/layout/Header';
//import Footer from './components/layout/Footer';
//import Content from './components/layout/Content';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'

import './App.css';

class App extends Component {
  render() {
    return (
      
        <Router >
          <div>
            

            <div className="d-flex flex-column flex-md-row align-items-center px-md-4 border-bottom shadow-sm move-header">
              
              <div className="move-logo img-fluid px-3 py-1"></div>
              <nav className="my-3">
                <Link to="/" className="move-nav-item-top">HOME</Link>
                <Link to="/aboutus" className="move-nav-item-top">ABOUT US</Link>
                <Link to="/service" className="move-nav-item-top">SERVICES</Link>
                <Link to="/service" className="move-nav-item-top">NEWS</Link>
                <Link to="/service" className="move-nav-item-top">CONTACT</Link>
              </nav>

            </div>


            <Route exact path="/" component={Home} />
            <Route path="/service" component={Service} />
            <Route path="/aboutus" component={About} />
            

            <footer className="py-5 move-footer">
                  <div className="row">
                    <div id="move-footer-col1" className="col-6 col-sm-2">
                      <p className="move-footer-menu">Home</p>
                      <p className="move-footer-menu">About Us</p>
                      <p className="move-footer-menu">Services</p>
                      <p className="move-footer-menu">News</p>
                      <p className="move-footer-menu">Contact</p>
                    </div>
                    <div id="move-footer-col2" className="col-6 col-lg">
                      <h5 className="move-caps move-footer-menu">Contact Us</h5>
                        <p className="move-footer-menu" >Lorem ipsum dolor sit amet, consectetur adipiscing ept.</p>
                        <p className="move-footer-menu" ><strong>Email:</strong> hello@email.com</p>
                        <p className="move-footer-menu" ><strong>Phone:</strong> +375 (23) 873-37-98, +375 (23) 899-89-01</p>
                        <p className="move-footer-menu" ><strong>Mail:</strong> 20 Lorem ipsumdo sit amet,<br />6046 Larsinac, Country</p>

                    </div>
                    
                    <div id="move-footer-col3" className="col-6 col-lg">
                      <h5 className="move-caps move-footer-menu">Newsletter</h5>
                        <p className="move-footer-menu" >Lorem ipsum dolor sit amet, consectetur.</p>
                        <p><input className="form-control mr-sm-2" type="text" placeholder="Enter email" /></p>
                        <p><button className="move-btn btn btn-primary" type="submit">SUMMIT</button></p>  
                    </div>
                    
                  </div>
                </footer>

          </div>

        </Router>


    );
  }
}

export default App;
