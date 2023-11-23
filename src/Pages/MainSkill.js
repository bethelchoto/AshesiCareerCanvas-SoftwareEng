import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/MainSkill.css';

import CheckBoxIcon from '@mui/icons-material/CheckBox';

const MainSkill = () => {
  return (
      <div className='main-skill'>
            <div className="form-student-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">SKILL</label>
                  </div>
                  <hr className="long-line"  style={{ width: '100%', border: '1px solid black' }}/>
            </div>

        <div className='row-skill'>

            <div className='left-side-experience'>
                <CheckBoxIcon/>
            </div>

            <div className='right-side'>

                <div className="labels-container">
                    <label htmlFor="label1">Achivement :</label>
                    <span id="label1"> 2nd Place</span>
                </div>
            </div>
        </div>

        <div className='row-skill'>

            <div className='left-side-experience'>
                <CheckBoxIcon/>
            </div>

            <div className='right-side'>

                <div className="labels-container">
                    <label htmlFor="label1">Achivement :</label>
                    <span id="label1"> 2nd Place</span>
                </div>
            </div>
        </div>

        <div className='btn-row-skill' id='skills'> 
            <button className='main-exp-btn'>Cancel</button>
            <button className='main-exp-btn'>Edit</button>
            <button className='main-exp-btn'>Delete</button>
            <button className='main-exp-btn'>Add</button>
        </div> 

    </div>
  );
};

export default MainSkill;
