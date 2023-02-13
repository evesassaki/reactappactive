import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";

//import components
import Usernavbar from './components/UserNavbar.js';
import Userdashboard from './pages/Userdashboard.js';

//import public pages
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Vagas from "./pages/Vagas.js";
import Login from './pages/Login.js';
import Register from './pages/Register.js';

//restricted pages
import Userprofile from './pages/Userprofile.js';
import { useContext } from 'react';
import { AuthContext } from './context/authContext.js';


function App() {

  const {currentUser} = useContext(AuthContext);

  const Layout = ()=>{
    return(
    <div style={{display:"flex"}}>
    <div style={{flex:"3"}}>
    <Usernavbar/></div>
    <div style={{flex:"10"}}>
    <Outlet/></div>
    </div>
    );
  }

  const ProtectedRoute = () =>{
    if(!currentUser){
    return <Navigate to="/login"/>
    } return <Outlet/>; 
  }

  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute/>}>
            <Route path="layout" element={<Layout />} >
            <Route path="dashboard" element={<Userdashboard />} />
            <Route path="profile" element={<Userprofile />} />
        </Route></Route>
        <Route exact path="/" element={ <Home/> } />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/vagas" element={<Vagas/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
