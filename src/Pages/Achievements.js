import '../Styles/Achievements.css';
import { Link } from "react-router-dom";

const Achievements=()=>{

return (
<div className="container-box">
  <div className="row">
    <div className="col-md-12 text-center"><h4>Skills</h4></div>
  </div>

  <div className="row">
    <div className="col-md-6">
      {/* First input field with text on top */}
      <div className="input-with-label">
        <label htmlFor="newSkill">New Skill</label>
        <input type="text" id="newSkill" name="newSkill" className="form-control" />
      </div>
    </div>
    <div className="col-md-6">
      {/* Second input field with text on top */}
      <div className="input-with-label">
        <label htmlFor="email">Current Skill</label>
        <input type="text" id="email" name="email" className="form-control" />
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6 offset-md-3">
      {/* Third input field below the first one */}
      <div className="input-with-label">
        <label htmlFor="additionalSkill">Additional Skill</label>
        <input type="text" id="additionalSkill" name="additionalSkill" className="form-control" />
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-12 text-center"><h6><Link to="/register"> add more skills</Link></h6></div>
  </div>

  <div className="form-row">
    <button type="submit" className="btn btn-primary">cancel</button>
    <button type="submit" className="btn btn-primary">save</button>
  </div>
</div>



    )
}
export default Achievements;