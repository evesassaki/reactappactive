import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";


function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                <img src={Logo} id="navlogo" width="auto" height="45" alt=""></img></Link>
                <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link active" aria-current="page">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link active" aria-current="page">Contato</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/vagas" className="nav-link active" aria-current="page">Vagas</Link>
                        </li>
                    </ul>
                    <Link to="/register"><button className="btn btn-success">Cadastro</button></Link>&nbsp;
                    <Link to="/login"><button className="btn btn-success">LogIn</button></Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;