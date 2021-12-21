import React, { Component } from "react";
import mert from "./mert.jpeg";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        {/* <!-- Navigation--> */}
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger" href="/about">
            <span className="d-block d-lg-none">Mert Topuz</span>
            <span className="d-none d-lg-block">
              <Link to="about">
                <img
                  className="img-fluid img-profile rounded-circle mx-auto mb-2"
                  src={mert}
                  alt=".."
                />
              </Link>
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
        
          </button>


          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link js-scroll-trigger" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="experience">
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="edu">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="skills">
                  Skils
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="interest">
                  Interest
                </Link>
              </li>
             
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
