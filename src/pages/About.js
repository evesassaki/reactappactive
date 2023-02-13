import React from "react";

//import components
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

//import images
import HQimg from "../images/slide01.jpg";

function About() {
    return (
        <>
        <Navbar/>
        
        <section>
	<div className="container-fluid px-4 py-5 my-5 text-center">
		<div className="lc-block mb-4">
			<div editable="rich">
				<h1 className="display-5 fw-bold" style={{paddingTop:"25px"}}>Sobre nós</h1>
			</div>
		</div>
		<div className="lc-block col-lg-6 mx-auto mb-5">
			<div editable="rich">

				<p className="lead ">A Active foi fundada no dia primeiro de Julho de 1996, prestando serviços de despacho, RH, gerenciamento de equipes, e muito mais.<br/>
                Abaixo estao listadas as informacoes fiscais relevantes e essenciais da nossa empresa.</p>
			</div>
		</div>
		<div className="d-flex container-fluid" lc-helper="background"
            style={{height:"35vh",
            background:`url(${HQimg})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"}}>
            </div>
	</div>
</section>
        <table className="table text-start" style={{margin: "0 50px 20px 50px"}}>
                            <tbody>
                                <tr>
                                <th scope="row">Nome da Empresa</th>
                                <td>Active Co., Ltd.</td>
                                </tr>
                                <tr>
                                <th scope="row">CEO</th>
                                <td>Seiichi Ito</td>
                                </tr>
                                <tr>
                                <th scope="row">Capital</th>
                                <td>30 milhões de ienes</td>
                                </tr>
                                <tr>
                                <th scope="row">Conteudo de negócios</th>
                                <td>Negócio de expedição de mão de obra geral<br />
                                Negócio de contrato de negócio<br />
                                Expedição de introdução paga negócio<br />
                                Negócio de gestão de mão de obra <br />
                                Tecnologia de despacho / correspondência de negócios<br />
                                Negócio de manufatura<br />
                                Negócio de subvenção<br />
                                Agência de aplicação empresarial<br />
                                ISO aquisição<br />
                                educação (5S)<br /> 
                                Apoio negócio</td>
                                </tr>
                                <tr>
                                <th scope="row">Número de permissão</th>
                                <td>Negócio de despacho de trabalhador geral Geral 20-300211<br/>
                                    Negócio de introdução de despacho pago 20-Yu-300012</td>
                                </tr>
                                <tr>
                                <th scope="row">Empresas do grupo relacionadas</th>
                                <td>Makoto Co., Ltd.</td>
                                </tr>
                                <tr>
                                <th scope="row">Banco</th>
                                <td>Hachijuni Bank Inakita Branch<br/>
                                    Nagano Bank<br/>
                                    Alpes Central Credit Bank</td>
                                </tr>
                                <tr>
                                <th scope="row">Principais clientes<br/>
                                (títulos honoríficos omitidos, sem ordem específica)</th>
                                <td>Nagano Japan Radio Co., Ltd.<br/>
                                    Ueda Japan Radio Co., Ltd.<br/>
                                    Olympus Corporation<br/>
                                    Takano Co., Ltd.<br/>
                                    Daiwa Denki Kogyo Co., Ltd.<br/>
                                    Tsukada Riken Industry Co., Ltd.<br/>
                                    Nagano Olympus Corporation<br/>
                                    Nidec Sankyo Corporation<br/>
                                    Nidec Sankyo Service Engineering Co., Ltd.<br/>
                                    Sun Industry Co., Ltd.<br/>
                                    Seiki Spring Industry Co., Ltd.<br/>
                                    Rubycon Engineering Co., Ltd.<br/>
                                    Maruyasu Machinery Co., Ltd.<br/>
                                    Maruzen Computer Logistics Co., Ltd.<br/>
                                    NHK Spring Co., Ltd.<br/>
                                    Tohatsu Marine Co., Ltd.<br/>
                                    Tohatsu Co., Ltd.<br/>
                                    Machine Engineering Co., Ltd.<br/>
                                    JVC-KENWOOD Nagano Co., Ltd.<br/>
                                    Tajima Co., Ltd.<br/>
                                    Nippatsu Flex Co., Ltd.<br/>
                                    Yohoku Co., Ltd.<br/>
                                    Outros</td>
                                </tr>
                            </tbody>
                            </table>
                            <br/>
                            <Footer/>
        </>
    );
}

export default About;