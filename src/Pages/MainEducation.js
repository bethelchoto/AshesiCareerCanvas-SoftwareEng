import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../Styles/App.css';
import '../Styles/MainEducation.css';

import CheckBoxIcon from '@mui/icons-material/CheckBox';

const MainEducation = () => {
    const navigate = useNavigate()
  return (
      <div className='boarder-container'>
        
            <div className="form-student-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">EDUCATION</label>
                  </div>
                  <hr className="long-line"  style={{ width: '100%', border: '1px solid black' }}/>
            </div>

        <div className='row-grid'>

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
                <button type="submit" className="main-primary-btn">Approved</button>
            </div>

        </div>
    
        
            <div className="btn-row-education">
                <button type="submit" className="main-primary-btn">cancel</button>
                <button type="submit" className="main-primary-btn">edit</button>
                <button type="submit" className="main-primary-btn">delete</button>
                <button type="submit" className="main-primary-btn" onClick={()=> {navigate("/education")}}> Add</button>
            </div>

        </div>     

        

  );
};

export default MainEducation;
