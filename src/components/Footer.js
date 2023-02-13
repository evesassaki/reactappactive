import React from "react";
import { Link } from "react-router-dom";
import Social from "./Social.js";

function Footer() {
    return (
        <section className="footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Sobre a Active</h6>
                        <hr />
                        <p>A Active Corporation tem o total compromisso para com 
                            nossos colaboradores. Auxiliamos o crescimento 
                            profissional e qualidade de vida no Japão.</p>
                    </div>
                    <div className="col-md-4">
                        <h6>Mapa do Site</h6>
                        <hr />
                        <div><Link to="/vagas">Vagas</Link></div>
                        <div><Link to="/about">Sobre</Link></div>
                        <div><Link to="/contact">Contato</Link></div>
                        <div><Link to="">Politica de Privacidade</Link></div>
                    </div>
                    <div className="col-md-4">
                    <h6>Informações de contato</h6>
                    <hr />
                        <div><p>Localização: 
                                408-1, Vila Minamiminowa, Distrito de Kamiina, Prefeitura de Nagano</p></div>
                        <div><p>Telefone: 0265-76-7665</p></div>
                        <div><p>e-mail: info@empregosactive.com<br/>
                        contato@empregosactive.com</p></div>
                    </div>
                    <div className="copyright">Active Corporation Co. LTD. Todos os direitos reservados.</div>
                    <div className="social-media-footer">
                    <Social />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;