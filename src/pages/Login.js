import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import { AuthContext } from "../context/authContext.js";
import Loginimg from "../images/loginimg.jpg"

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/layout")
    } catch (err) {
      setErr(err.response.data);
      console.log(err.response)
      console.log(err)
    }
  };

  return (
    <>
    <Navbar/>
        <div className="container-fluid p-0">
          <div className="row g-0" style={{padding:"110px 40px 50px 0"}}>
            <div lc-helper="background" className="col-md-6 order-md-2 ps-4 d-flex"
            style={{
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            backgroundImage: `url(${Loginimg})`}}>
            </div>
            <div className="col-md-6 order-md-1" style={{padding:"5vh 5vw"}}>
              <div className="login">
                    <h1>Acesse seu perfil</h1>
                    <p>Ainda não tem uma conta?</p>
                    <Link to="/register">
                      <button className="btn btn-success">Faça seu cadastro.</button>
                    </Link>
                  <div className="flex-d">
                    <form>
                    <br/>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        onChange={handleChange}
                      /><br/>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                      /><br/>
                      {err && err}<br/>
                      <button className="btn btn-success" onClick={handleLogin}>Login</button>
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  );
};

export default Login;
