import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

import profile from "../Assets/ashesiLogo.jpg";

const HomeNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

    <div className="log">
        <img className="picture" src={profile} alt="Profile" />
    </div>

      <a className="navbar-brand" href="#">Ashesi Career Services</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarText">
        

        <form className="form-inline my-2 my-lg-0">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to ="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
            <li><Link to ="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
          </ul>
        </form>
      </div>     
    </nav>
  );
}

export default HomeNavBar;
