import '../Styles/StudentProfile.css';
import { Link } from "react-router-dom";

import React from 'react';

const StudentProfile=()=>{

return (
        <div className='main-student'>
              <div className="form-student-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">First Name</label>
                    <input type="text" className="form-control" id="inputEmail4"/>
                  </div>

                  <div className="form-group col-md-6">
                    <label for="inputEmail">Last Name</label>
                    <input type="text" className="form-control" id="inputEmail4" />
                  </div>
              </div>

                <div className="form-student-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">GitHub</label>
                    <input type="text" className="form-control" id="inputEmail4"/>
                  </div>

                  <div className="form-group col-md-6">
                    <label for="inputEmail">LinkedIn</label>
                    <input type="text" className="form-control" id="inputEmail4" />
                  </div>
              </div>
              <div className="form-project-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Contact</label>
                    <input type="text" className="form-control" id="description" style={{width: '735px', height: '60px'}}/>
                  </div>
              </div>

              <div className="form-student-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">City</label>
                    <input type="text" className="form-control" id="inputEmail4"/>
                  </div>

                  <div className="form-group col-md-6">
                    <label for="inputEmail">Country</label>
                    <input type="text" className="form-control" id="inputEmail4" />
                  </div>
              </div> 

            <div className="form-project-row">
              <div className="form-project-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Address</label>
                    <input type="text" className="form-control" id="description" style={{width: '735px', height: '60px'}}/>
                  </div>
              </div>

              <div className="form-col">
                    <button type="submit" className="student-btn btn-primary">cancel</button>
                    <button type="submit" className="student-btn btn-primary">save</button>
              </div>
            </div>
        </div>
    )
  }
export default StudentProfile;
