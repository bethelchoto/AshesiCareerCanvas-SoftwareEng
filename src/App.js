import HeaderNavbar from './Components/Navbar'
import Home from './Pages/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Skills  from './Pages/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
              <Route path="/skills" element={<Skills/>} />
            </Routes>
          </switch>
      </div>
    </Router>

  );
}

export default App;
