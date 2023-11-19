import '../Styles/Skills.css';
import { Link } from "react-router-dom";

const Skills=()=>{

return (
    <div className="container-box">
        <div className="row">
            <div className="col-md-12 text-center"><h4>Skills</h4></div>
        </div>

        <div className="row">
            <div className="row-md-6">
            <input type="text" name="email" className="form-control" />
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
export default Skills;