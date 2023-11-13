import HeaderNavbar from './Components/Navbar'
import Home from './Pages/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  // const location = useLocation();

  // Conditionally render the NavBar only if the current route is not '/' or '/signup'
  // const renderNavBar = !['/', '/register'].includes(location.pathname);


  return (
    <Router>
      <div className="container">
      {/* {renderNavBar && <HeaderNavbar />} */}
        <HeaderNavbar/>
          <switch>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
            </Routes>
          </switch>
          {/* <Footer/> */}
      </div>
    </Router>

  );
}

export default App;
