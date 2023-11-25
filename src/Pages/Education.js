import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/App.css';
import '../Styles/Education.css';

const Education = () => {
  return (
      <div className='boarder-container'>
            <div className="form-archive-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Achievement</label>
                  <input type="text" className="form-control" id="inputEmail4"/>
                </div>

                <div className="form-group col-md-6">
                  <label for="inputEmail">Organization</label>
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

            <div className="form-education-row">
                  <div className="form-group col-md-6">
                    <div className="moveble"><h6><Link to ="/save"> Add New Co-Curriculum </Link></h6></div>
                  </div> 
              </div>

           
              <div className="btn-row-education-form">
                    <button type="submit" className="main-primary-btn">cancel</button>
                    <button type="submit" className="main-primary-btn">save</button>
              </div>

           
      </div>
  );
};

export default Education;
