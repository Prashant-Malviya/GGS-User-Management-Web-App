import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import UsersList from "./pages/User List/UserList";
import NavbarMenu from "./components/Navbar/Navbar";
import About from "./pages/About Us/About";
import ContactUs from "./pages/Contact/ContactUs";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";

function App() {
  const { token, expirationTime } = useSelector((state) => state.auth);

  // Checking if the token is valid and not expired
  const isLoggedIn = token && Date.now() < expirationTime;
  
  localStorage.setItem("token", token);
  console.log(token,'token');
  

  return (
    <Router>
      <div className="mb-16">
      {
        isLoggedIn ? (<NavbarMenu  />): <Navigate to="/"/>
      }
        
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" replace />} />
        <Route path="/user-list" element={isLoggedIn ? <UsersList /> : <Navigate to="/" replace />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/" replace />} />
        <Route path="/contact" element={isLoggedIn ? <ContactUs /> : <Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
