import { Link } from 'react-router-dom';
import Copyrights from './Footer';
import Footer from './Footer';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Ashesi Career Services</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/sampleresumes" className="nav-link">Sample Resumes</Link>
          </li>
        </ul>

        <form className="form-inline my-2 my-lg-0">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </form>
      </div>
      <div>
      <Link to="/footer" className="nav-link">Footer</Link>
      </div>
      
    </nav>
    
  );
}

export default Header;