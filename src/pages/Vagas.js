//import components
import Navbar from "../components/Navbar.js";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Vagas () {
    const [vagas, setVagas] = useState([])

useEffect(()=>{
    const fetchAllVagas = async ()=>{
        try{
            const res = await axios.get("http://localhost:3001/vagas")
            setVagas(res.data)

            }catch(err){
            console.log(err)
        }
    }
    fetchAllVagas()
}, [])

return (<>
        <Navbar/>
            <div className="container d-flex flex-wrap vagas-content"
            style={{paddingTop:"100px",}}>
            {vagas.map(vaga=>(
            <div className="card" key={vaga.id}>
            {vaga.cover && <img className="card-img-top" src={vaga.cover} alt="imagem de fabrica" />}
                    <div className="card-body">
                        <div className="card-title text-center">
                        {vaga.description && <h5>{vaga.description}</h5>}
                            <h5>{vaga.valorhora}</h5>
                            <p>{vaga.local}</p>
                        </div>
                            <div className="card-text">
                            {vaga.turno && <h5>{vaga.turno}</h5>}
                            {vaga.folgas && <h5>{vaga.folgas}</h5>}
                            <h5>Benefícios</h5>
                            <ul>
                            {vaga.benefit1 && <li>{vaga.benefit1}</li>}
                            {vaga.benefit2 && <li>{vaga.benefit2}</li>}
                            {vaga.benefit3 && <li>{vaga.benefit3}</li>}
                            </ul>
                            <h5>Requisitos</h5>
                            <ul>
                            {vaga.requirement1 && <li>{vaga.requirement1}</li>}
                            {vaga.requirement2 && <li>{vaga.requirement2}</li>}
                            {vaga.requirement3 && <li>{vaga.requirement3}</li>}
                            </ul>
                            </div>
                        </div>
                        
                    </div>))}
                </div>
</>);
}

 export default Vagas;