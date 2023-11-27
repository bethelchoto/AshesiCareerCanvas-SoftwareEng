import '../Styles/Achievements.css';
import { Link } from "react-router-dom";
import React from 'react';
import {useState} from "react";
import axios from "axios";

function SuccessMessage() {
  return (
    <div className="success-message">
      <p>Your data has been successfully saved!</p>
    </div>
  );
}

function ErrorMessage(props) {
  return (
    <div className="error-message">
      <p>{props.message}</p>
    </div>
  );
}


const Achievements=()=>{
  const [formData, setFormData] = useState({
    achievement_name:"",
    organization_name:"",
    year_attained:"",
  });
   // Handle form data changes
   const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  // Handle form submission
    // Handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post("http://localhost/finaleproject/LogInSignUp/achievements.php", formData);
        
        console.log(response);
        setFormSubmitted(true);
      } catch (error) {
        console.log(error);
        setErrorMessage("There was an error submitting your data.");
      }
    };
   


return (  
        <form onSubmit={handleSubmit}>
            {formSubmitted && <SuccessMessage />}
            {errorMessage && <ErrorMessage message={errorMessage} />}
        <div className='main-archive'>
              <div className="form-archive-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="achievement_name">Achievement</label>
                    <input type="text" className="form-control" 
                    id="achievement_name"
                    name="achievement_name"
                    value={formData.achievement_name}
                    onChange={handleInputChange}
                    

                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="organization_name">Organization</label>
                    <input type="text"className="form-control" 
                    id="organization_name"
                    name="organization_name"
                    value={formData.organization_name}
                    onChange={handleInputChange}
                    />
                  </div>
              </div>

              <div className="form-project-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="year_attained">Year Attained</label>
                    <input type="text" className="form-control" 
                    id="year_attained"
                    name="year_attained"
                    value={formData.year_attained}
                    onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-project-row">
                      <div className="form-group col-md-6">
                        <div className="moveUp"><h6><Link to ="/save"> Add New Achievement </Link></h6></div>
                      </div> 
                  </div>

              </div>     

              <div className="form-project-row">
                <div className="form-col">
                      <button type="submit" className="archive-btn btn-primary">cancel</button>
                      <button type="submit" className="archive-btn btn-primary">save</button>
                </div>
              </div>
            </div>
            </form>
         

    )
  }
export default Achievements;