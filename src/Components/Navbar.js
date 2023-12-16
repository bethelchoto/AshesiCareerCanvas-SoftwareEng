import { Link, useNavigate} from 'react-router-dom';
import '../Styles/Navbar.css';

const HeaderNavbar = () => {
  const navigate = useNavigate();

  const HandleLogout = (e)=>{
    sessionStorage.clear()
    navigate("/login")
  } 

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
            <Link to="/adminpage" className="nav-link">Admin</Link>
          </li>
          <li className="nav-item">
            <Link to= "/review" className="nav-link">Send For Review</Link>
          </li>

          <li className="nav-item">
            <Link to= "/ashesiresume" className="nav-link"> View Resume</Link>
          </li>

        </ul>

        <form className="form-inline my-2 my-lg-0">
          <ul className="nav navbar-nav navbar-right">
            
            <li>
          <Link to ="/login" onChange={HandleLogout}>
            <span className="glyphicon glyphicon-log-in"></span> Logout
          </Link>
        </li>

          </ul>
        </form>
      </div>     
    </nav>
  );
}

export default HeaderNavbar;
