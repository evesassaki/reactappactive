import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHandsHelping, faWifi } from "@fortawesome/free-solid-svg-icons";

function Philosophy() {
    return (
        <>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="lc-block">
                        <h2 editable="inline" className="display-2 mb-0"><b>Nossa filosofia</b></h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mt-md-5">
                <div className="col-md-6 col-lg-5 col-xl-3 mb-4 mb-xl-0">
                    <div className="lc-block p-4 border rounded-3 text-white" style={{backgroundColor: "#0E49B5"}}>
                        <div className="lc-block">
                            {/* icon */}
                            <FontAwesomeIcon icon={faBolt} style={{fontSize: "35px"}}/>
                        </div>
                        <div className="lc-block mb-4">
                            <div editable="rich">
                                <h4 style={{paddingTop: "30px"}}>Agilidade e rapidez</h4>
                            </div>
                        </div>
                        <div className="lc-block mb-lg-5 mb-2">
                            <div editable="rich">
                                <p>Do cadastro até sua entrada em uma empresa, simplificado e sem preocupação.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5 col-xl-3 mb-4 mb-xl-0">
                    <div className="lc-block p-4 border rounded-3 text-dark" style={{backgroundColor: "#89A3B2"}}>
                        <div className="lc-block">

                            {/* icon */}
                            <FontAwesomeIcon icon={faWifi} style={{fontSize: "35px"}}/>
                        </div>
                        <div className="lc-block mb-4">
                            <div editable="rich">
                                <h4 style={{paddingTop: "30px"}}>Entrevista On-Line</h4>
                            </div>
                        </div>
                        <div className="lc-block mb-lg-5 mb-2">
                            <div editable="rich">
                                <p> Com suporte totalmente on-line, para facilitar o primeiro contato e agilizar sua candidatura em um emprego no Japão.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5 col-xl-3 mb-4 mb-xl-0">
                    <div className="lc-block p-4 border rounded-3 bg-info text-light">
                        <div className="lc-block">

                            {/* icon */}
                            <FontAwesomeIcon icon={faHandsHelping} style={{fontSize: "38px"}}/>
                        </div>
                        <div className="lc-block mb-4">
                            <div editable="rich">
                                <h4 style={{paddingTop: "30px"}}>Assistência personalizada</h4>
                            </div>
                        </div>
                        <div className="lc-block mb-lg-5 mb-2">
                            <div editable="rich">
                                <p> Contamos com assistentes capacitados 24h por dia, para sanar todas suas duvidas e melhor te atender a respeito de empregos no Japão.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Philosophy;