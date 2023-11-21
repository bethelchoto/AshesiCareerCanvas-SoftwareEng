import '../Styles/Projects.css';
import { Link } from "react-router-dom";

import React, {useState} from 'react';
import DatePicker from 'react-date-picker';
import 'react-datepicker/dist/react-datepicker.css';


const Projects=()=>{
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

return (
        <div className='main-project'>
              <div className="form-project-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Project Name</label>
                    <input type="text" className="form-control" id="inputEmail4"/>
                  </div>

                  <div className="form-group col-md-6">
                    <label for="inputEmail">Project Owner</label>
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
                    <label for="inputEmail4">Project Description</label>
                    <input type="text" className="form-control" id="description" style={{width: '735px', height: '100px'}}/>
                  </div>
              </div>

              <div className="form-project-row">
                  <div className="form-group col-md-6">
                    <div className="moveDown"><h6><Link to ="/save"> Add New Achievement </Link></h6></div>
                  </div> 
              </div>

              <div className="form-col">
                    <button type="submit" className="cancel">cancel</button>
                    <button type="submit" className="save">save</button>
              </div>
            </div>
        </div>


    )
  }
export default Projects;





              {/* <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Start Date</label>

                    <DatePicker
                      id="startDate"
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="yyyy/MM/dd"
                      showYearDropdown
                      scrollableMonthYearDropdown
                      shouldCloseOnSelect={true}
                      className="custom-datepicker-style"
                    />

                    <DatePicker
                    selected={selectedDate}
                    onChange = {date=> setSelectedDate(date)}
                    dateFormate='yyyy/MM/dd'
                    showYearDropdown
                    scrollableMonthYearDropdown
                    /> 
                  </div>
              </div>  */}
