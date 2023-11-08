import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
const Header=()=>{
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item active">
        <Link to="/" class="nav-link">Home</Link>
      </li>
      <li class="nav-item">
      <Link to="/register" class="nav-link">Register</Link>
      </li>
      <li class="nav-item">
      <Link to="/login" class="nav-link">Login</Link>
      </li>
    </ul>

    <form class="form-inline my-2 my-lg-0">
      <div class="d-flex">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
    </form>
  </div>
  </nav>
  )
}

export default Header;