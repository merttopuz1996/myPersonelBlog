import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div>
        {/* <!-- Experience--> */}
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Software Devolopper Intern</h3>
                <div className="subheading mb-3">
                  
                  GNS (Genius Net Solutions) Istanbul, TURKEY
                </div>
                <p>
                  I interested in some web related improvements and I revised
                  the some projects
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">2017</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">It Intern</h3>
                <div className="subheading mb-3">
                  DARICA DATA PROCESSİNG DEPARTMENT IT Intern| KOCAELİ, TURKEY
                </div>
                <p>
                  İmproved coding skills by implementing new features on
                  project.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">2019</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    );
  }
}
