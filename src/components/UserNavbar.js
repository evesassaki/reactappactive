import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faClock, faEnvelope, faFolder, faPencil, faPowerOff, faUser, faYen } from "@fortawesome/free-solid-svg-icons";

//import context
import { AuthContext } from "../context/authContext.js";

//import controller



function Usernavbar() {
    
    const {currentUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear()
          navigate("/login")
      };

    return (
        <>
        <div className="sidebar d-flex flex-column bg-dark text-light">
            <Link to="/layout/profile" className="sidebarlink">
            <div className="navbaritem">
            <FontAwesomeIcon icon={faUser} className="navbaricon"/>
            <span>{currentUser.firstname}</span></div></Link>
            <Link to="/profile" className="sidebarlink">
            <div className="navbaritem">
            <FontAwesomeIcon icon={faEnvelope} className="navbaricon"/>
            <span>Mensagens</span></div></Link>
            <Link to="/profile" className="sidebarlink">
            <div className="navbaritem">
            <FontAwesomeIcon icon={faFolder} className="navbaricon"/>
            <span>Documentos</span></div></Link>
            <Link to="/profile" className="sidebarlink">
            <div className="navbaritem">
            <FontAwesomeIcon icon={faClock} className="navbaricon"/>
            <span>Horas Extras</span></div></Link>
            <Link to="/profile" className="sidebarlink">
            <div className="navbaritem">
            <FontAwesomeIcon icon={faCalendarCheck} className="navbaricon"/>
            <span>Folgas Remuneradas</span></div></Link>
            <Link to="/profile" className="sidebarlink">
            <div className="navbaritem">
            <FontAwesomeIcon icon={faYen} className="navbaricon"/>
            <span>Holerite</span></div></Link>
            <Link to="/profile" className="sidebarlink">
            <div className="navbaritem">
            <FontAwesomeIcon icon={faPencil} className="navbaricon"/>
            <span>Requerimentos</span></div></Link>

            <button className="btn btn-danger"
            style={{width: "10rem", height:"50px", alignSelf:"center", margin: "45px"}}
            onClick={handleLogout}>
                <p className="button-text">LogOut</p>
                <FontAwesomeIcon icon={faPowerOff} className="buttonicon"/>
            </button>
        </div>
        </>
    );
}

export default Usernavbar;