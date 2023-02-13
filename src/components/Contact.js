import React from "react";
import Social from "../components/Social.js";

function Contact (){
    return (
        <>
        <section className="bg-light">
            <div className="container py-5">
                <div className="p-5 lc-block">
                    <div className="lc-block">
                        <div editable="rich">
                            <h2 className="fw-bolder display-3">Entre em contato conosco!</h2>
                        </div>
                    </div>
                    <div className="lc-block col-md-10">
                        <div editable="rich">
                            <p className="lead">Tem alguma dúvida? Mande uma mensagem!
                            Responderemos o mais rápido possível. <br/>
                            Ou visite nossas Redes Sociais!</p>
                        </div>
                    </div>
                    <div className="col-md-12 text-right home-social">
                    <Social />
                </div>
                </div>
                <div className="p-5 lc-block shadow rounded-3 col-xl-10 offset-xl-1">

                    <form>
                        <p>Os campos com * são obrigatórios.</p>
                        <div className="form-group mb-4">
                            <label>Nome*</label>
                            <input name="name" type="text" className="form-control" placeholder="Nome Completo" value="" required/>
                        </div>

                        <div className="form-group mb-4">
                            <label>E-mail*</label>
                            <input name="email" type="email" className="form-control" placeholder="nome@exemplo.com" value="" required/>
                        </div>

                        <div className="form-group mb-4">
                            <label>Celular*</label>
                            <input name="cellphone" type="text" className="form-control" placeholder="Celular para contato" value="" required/>
                        </div>

                        <div className="form-group mb-4">
                            <label>Assunto (opcional)</label>
                            <input name="subject" type="text" className="form-control" placeholder="Assunto"/>
                        </div>

                        <div className="form-group mb-4">
                            <label>Sua mensagem*</label>
                            <textarea name="message" className="form-control" rows="4" maxlength="800"></textarea>
                        </div>

                        <button type="submit" className="btn btn-success btn-lg">Enviar</button>

                        
                    </form>
                </div>
            </div>
        </section>
        {/* ueda info and map */}
        <section>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="lc-block col-lg-8 ">
                            <div editable="rich">

                                <h2>Escritório Filial de Ueda-shi Nagano-Ken</h2>
                                <div className="lc-block mb-4">
						    <div editable="rich">
							<p className="lead"><strong>Endereço</strong>: 1-7-19 Zaimokucho, Cidade de Ueda, Prefeitura de Nagano</p>
							<p className="lead"><strong>Horario de recepção</strong>: Segunda a Sexta 9h00 - 18h00</p>
							<p className="lead"><strong>Telefone</strong>: 0120-34-3633</p>
							<p className="lead"><strong>E-mail</strong>: myaddress@mydomain.com</p>
						    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="lc-block overflow-hidden ">
                            <div className="ratio ratio-1x1 vh-50" lc-helper="video-embed">
                                <div className="ratio ratio-16x9" lc-helper="gmap-embed">
                                    <iframe title="Uedashimap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.4018006641277!2d138.25992711497327!3d36.39947288003307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601dbce6319c82fb%3A0xce9173af456c6ba3!2s1-ch%C5%8Dme-7-19%20Zaimokuch%C5%8D%2C%20Ueda%2C%20Nagano%20386-0014!5e0!3m2!1spt-BR!2sjp!4v1675353029921!5m2!1spt-BR!2sjp"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* kamiina info and map */}
        <section>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="lc-block overflow-hidden ">
                            <div className="ratio ratio-1x1 vh-50" lc-helper="video-embed">
                                <div className="ratio ratio-16x9" lc-helper="gmap-embed">
                                    <iframe title="kamiinamap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.4018006641277!2d138.25992711497327!3d36.39947288003307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601dbce6319c82fb%3A0xce9173af456c6ba3!2s1-ch%C5%8Dme-7-19%20Zaimokuch%C5%8D%2C%20Ueda%2C%20Nagano%20386-0014!5e0!3m2!1spt-BR!2sjp!4v1675353029921!5m2!1spt-BR!2sjp"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="lc-block col-lg-8 ">
                            <div editable="rich">

                                <h2>Escritório Matriz do Distrito Kamiina, Nagano-Ken</h2>
                                <div className="lc-block mb-4">
						    <div editable="rich">
							<p className="lead"><strong>Endereço</strong>: 408-1 Vila Minamiminowa Village, Distrito Kamiina, Prefeitura de Nagano</p>
							<p className="lead"><strong>Horario de recepção</strong>: Segunda a Sexta 9h00 - 18h00</p>
							<p className="lead"><strong>Telefone</strong>: 0120-34-3633</p>
							<p className="lead"><strong>E-mail</strong>: myaddress@mydomain.com</p>
						    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Contact;