import '../Styles/Skills.css';
import { Link } from "react-router-dom";
import React from 'react';

const Skills=()=>{

return (
        <div className='main-skills'>

<div className="form-skills-row">

            <div className="form-group col-md-6">
                    <div className="heading"><h1>SKILLS</h1></div>
                  </div> 
            </div>

              <div className="form-skills-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Enter Skill</label>
                    <input type="text" className="form-control" id="inputEmail4"/>
                  </div>
              </div>  
    
              <div className="form-skills-row">
                  <div className="form-group col-md-6">
                    <div className=""><h6><Link to ="/save"> Add New Achievement </Link></h6></div>
                  </div> 
              </div>

              <div className="form-col">
                    <button type="submit" className="skills-btn btn-primary">cancel</button>
                    <button type="submit" className="skills-btn btn-primary">save</button>
              </div>
            </div>
    )
  }
export default Skills;