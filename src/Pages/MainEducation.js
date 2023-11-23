import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/MainEducation.css';

import CheckBoxIcon from '@mui/icons-material/CheckBox';

const MainEducation = () => {
  return (
      <div className='main-education'>
            <div className="form-student-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">EDUCATION</label>
                  </div>
                  <hr className="long-line"  style={{ width: '100%', border: '1px solid black' }}/>
            </div>

        <div className='row-education'>

                <div left-side>
                    <CheckBoxIcon/>
                </div>

                <div className='right-side'>

                <div className="labels-container">
                    <label htmlFor="label1">School :</label>
                    <span id="label1"> Ashesi University</span>
                </div>

                <div className="labels-container">
                    <label htmlFor="label1">Program :</label>
                    <span id="label1"> Computer Science</span>
                </div>

                <div className="labels-container">
                    <label htmlFor="label1">Start Date :</label>
                    <span id="label1"> 12/02/2021</span>
                </div>

                <div className="labels-container">
                    <label htmlFor="label1">End Date :</label>
                    <span id="label1"> 12/02/2021</span>
                </div> 

            </div>
            <div className='approval-status'>
                <button type="submit" className="main-education-btn btn-primary">Approved</button>
            </div>
        </div>
    
        <div className="form-project-row">
            <div className="form-col">
                <button type="submit" className="main-btn btn-primary">cancel</button>
                <button type="submit" className="main-btn btn-primary">edit</button>
                <button type="submit" className="main-btn btn-primary">delete</button>
                <button type="submit" className="main-btn btn-primary"> <Link to ="/education">Add</Link></button>
            </div>

        </div>     
    </div>
        

  );
};

export default MainEducation;
