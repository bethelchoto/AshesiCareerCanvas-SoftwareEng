import React from 'react';
import '../Styles/App.css';
import '../Styles/StudentProfile.css';

import profile from '../Assets/profile.JPG';
import { Link } from 'react-router-dom';

const StudentProfile=()=>{

return (
        <div className='boarder-container'>

          <div className='row-container'>

            <div className='left-side'>            
              <div className="profile-picture-box">
              <img className="profile-picture" src={profile}/>
              </div>
              <h6 className=''><Link> change profile pic</Link></h6>
            </div>
            
            <div className='right-side'>
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

              
              <div className="form-student-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">email</label>
                    <input type="text" className="form-control" id="inputEmail4"/>
                  </div>

                  <div className="form-group col-md-6">
                    <label for="inputEmail">Contact</label>
                    <input type="text" className="form-control" id="inputEmail4" />
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

              <div className="form-group col-md-6" id='address'>
                  <label for="inputEmail4">Address</label>
                  <input type="text" className="form-control" id="address-address" style={{width: '735px', height: '60px'}}/>
              </div>

              {/* <div className="form-group col-md-6" id='contact'>
                      <label for="inputEmail4">Contact</label>
                      <input type="text" className="form-control" id="description" style={{width: '735px', height: '60px'}}/>
              </div> */}

            </div>
          </div>

            {/* <div className="form-project-row"> */}

              <div className="btn-row">
                    <button type="submit" className="main-primary-btn">cancel</button>
                    <button type="submit" className="main-primary-btn">save</button>
              </div>
            </div> 
        // </div>
    )
  }
export default StudentProfile;
