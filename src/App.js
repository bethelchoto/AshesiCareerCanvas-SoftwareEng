import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HeaderNavbar from './Components/Navbar'
import Home from './Pages/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="container">
      
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
