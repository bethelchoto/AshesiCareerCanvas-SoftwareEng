import '../Styles/Projects.css';
import { Link } from "react-router-dom";

import React from 'react';

const WorkExperience=()=>{
return (
        <div className='main-project'>
              <div className="form-project-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Job Tittle</label>
                    <input type="text" className="form-control" id="inputEmail4"/>
                  </div>

                  <div className="form-group col-md-6">
                    <label for="inputEmail">Organization Name</label>
                    <input type="text" className="form-control" id="inputEmail4" />
                  </div>
              </div>

              <div className="form-project-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Start Date</label>
                    <input type="text" className="form-control" id="inputEmail4"/>
                  </div>

                  <div className="form-group col-md-6">
                    <label for="inputEmail">End Date</label>
                    <input type="text" className="form-control" id="inputEmail4" />
                  </div>
              </div>     
    
            <div className="form-project-row">
              <div className="form-project-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Job Description</label>
                    <input type="text" className="form-control" id="description" style={{width: '735px', height: '100px'}}/>
                  </div>
              </div>

              <div className="form-project-row">
                  <div className="form-group col-md-6">
                    <div className="moveDown"><h6><Link to ="/save"> Add New Work Experience </Link></h6></div>
                  </div> 
              </div>

              <div className="form-col">
                    <button type="submit" className="project-btn btn-primary">cancel</button>
                    <button type="submit" className="project-btn btn-primary">save</button>
              </div>

            </div>     
        </div>
    )
  }
export default WorkExperience;
