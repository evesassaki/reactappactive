import React from "react";
import Ctaimg from "../images/ctaimg.jpg";
import { Link } from "react-router-dom";


function Cta() {
    return (
        <>      
        <div className="d-flex text-center" lc-helper="background"
        style={{minHeight: "20vh",
        backgroundAttachment: "fixed",
        backgroundSize:"cover",
        backgroundPosition: "center center",
        backgroundColor:"#eee",
        backgroundImage: `url(${Ctaimg})`}}>
            <div className="lc-block  my-3 align-self-center w-100 py-5">
                <div editable="rich">
                        <h2 className="display-4" style={{backgroundColor: "rgba(255, 255, 255, 0.4)"}}>As melhores oportunidades!</h2>
                </div><br/>
                <Link to="/vagas"><button className="btn btn-success">Quero ver todas as vagas!</button></Link>
            </div>
        </div>
        </>
    );
}

export default Cta;