import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                 {/* <!-- Education--> */}
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Trakya University</h3>
        
                            <div>Computer Engineering</div>
                            <p>2015-2019</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2015-2019</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">ULKUN YALCIN ANATOLIAN HIGH SCHOOL</h3>
                            <p>2011-2015</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2011-2015</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" /> 

            </div>
        )
    }
}
