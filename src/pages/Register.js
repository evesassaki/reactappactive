import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function Register() {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
      });
      const [err, setErr] = useState(null);
    
      const navigate = useNavigate();

      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post("http://localhost:3001/auth/register", inputs)
          navigate("/login")
        } catch (err) {
          setErr(err.response.data);
        }
      };
    
      console.log(err)



    return (
      <>
      <Navbar/>
        <div className="container rounded shadow mx-auto register-content" style={{padding:"110px 40px 50px 0"}}>
            <form>
                <div className="form-group">
                    <h1>Já possui uma conta?</h1>
                    <Link to="/login">
                        <button className="btn btn-success">Login</button>
                    </Link><br/><br/>
                    <h1>Registrar</h1>
                    <label for="email">E-mail:</label>
                    <input type="email" className="form-control" placeholder="Email" id="email" name="email" onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label for="pwd">Senha:</label>
                    <input type="password" placeholder="Senha" className="form-control" id="pwd" name="password" onChange={handleChange} required/>
                </div>
                
                <label for="firstname">Nome:</label>
                    <input type="text" className="form-control" placeholder="Nome" id="firstname" name="firstname" onChange={handleChange} required />
                <label for="lastname">Sobrenome:</label>
                <input type="text" className="form-control" placeholder="Sobrenome" id="lastname" name="lastname" onChange={handleChange} required />

                <div className="checkbox">
                    <label><input type="checkbox" required/> Aceito os termos da Politica de Privacidade</label>
                </div>
                {err && err}
                <br/>
                <button className="btn btn-success" onClick={handleClick}>Registrar</button>
            </form>
        </div>
        <Footer/>
      </>
    );
}

export default Register;