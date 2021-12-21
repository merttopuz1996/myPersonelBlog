import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            
                  <div className="container-fluid p-0">
            {/* <!-- About--> */}
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Mert
                        <span className="text-primary">TOPUZ</span>
                    </h1>
                    <div className="subheading mb-5">
                       baglar bası neighborhood tuzla street Darıca/KOCAELİ
                        <a style={{marginLeft:"5px"}} href="mailto:name@email.com">mertttopuz@hotmail.com</a>
                    </div>
                    <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/mert-topuz-1a549a151/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/merttopuz1996"><i className="fab fa-github"></i></a>
                  
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            </div>
        )
    }
}
