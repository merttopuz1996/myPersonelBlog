import React, { Component } from "react";
import About from "./About";
import "./css/styles.css";
import Education from "./Education";
import Experience from "./Experience";
import Interest from "./Interest";
import Navbar from "./Navbar";
import Skills from "./Skills";
import{Routes,Route} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div> 
     <Navbar/>
          <Routes>
              
              <Route path="about" element={<About/>}/>
              <Route path="experience" element={<Experience />}/>
              <Route path="edu" element={<Education />}/>
              <Route path="skills" element={ <Skills />}/>
              <Route path="interest" element={  <Interest />}/>
          </Routes>
       
      </div>
    );
  }
}
