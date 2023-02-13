import React from "react";
import Heroimg from "../images/hero1.jpg";
import Logo2 from "../images/Logo2.png";

function Hero() {
    return (
        <>
            

<div className="d-flex container-fluid" lc-helper="background"
style={{height:"50vh",
background:`url(${Heroimg})`,
backgroundPosition: "bottom",
backgroundSize: "cover",
backgroundRepeat: "no-repeat"}}>
</div>
<div className="container p-5 bg-light" style={{marginTop: "-100px"}}>
	<div className="row">
		<div className="col-md-4 text-center align-self-center">
			<div className="lc-block border-end border-2 ">
				<div editable="rich">
                    <img src={Logo2} className="home-logo display-4" width="auto" height="45" alt="Active corporation"/>
                    <div className="underline mx-auto"></div>
                </div>
			</div>
		</div>
		<div className="col-md-8">
			<div className="lc-block ">
				<div editable="rich">
					<p className="display-4 text-center">Uma ponte entre pessoas e empresas.</p>
				</div>
			</div>
		</div>
	</div>
	<div className="row">
		<div className="col-md-9 offset-md-1">
			<div className="lc-block mt-5">
				<div editable="rich">
					<p className="lead text-secondary"> A Active é mais que uma empreiteira. Somos uma empresa que auxilia seu crescimento, cuidando do seu trabalho e qualidade de vida no Japão.&nbsp;</p>
					<p className="lead text-secondary">Contamos com profissionais capacitados para sanar todas suas duvidas e melhor te atender a respeito das melhores oportunidades de emprego da regiao. </p>
				</div>
			</div>
		</div>
	</div>
</div>

        </>
    );
}

export default Hero;