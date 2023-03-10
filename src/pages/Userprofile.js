import { useReducer, useContext } from 'react';
import axios from "axios";
import { AuthContext } from '../context/authContext.js';
// import multer from 'multer';



function Userprofile() {

    let yourDate = new Date().toISOString().split('T')[0]
    console.log(yourDate);

// const { currentUser } = useContext(AuthContext);

// const [file, setFile] = useState(null);

// const upload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);
//       const res = await axios.post("/upload", formData);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//     }
//   };

// const [state, dispatch] = useReducer(reducer, currentUser);
// const reducer = (state, action) => {
//     switch (action.type) {
//       case 'textInput':
//         return {
//           ...state,
//           [action.payload.key]: action.payload.value,
//         };
//       default:
//         throw new Error(`Unknown action type: ${action.type}`);
//     }
//   };






    return (
        <>
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                    <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        // onChange={(e) => setFile(e.target.files[0])}
                        />
                </div>
                <div className="col-md-9 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2 className="text-right">Editar perfil</h2>
                        </div>
                    <div className="dados-pessoais">
                    <h3>Dados Pessoais</h3>
                        <div className="row mt-2">
                            <div className="col-md-6"><label className="labels">Nome</label>
                            <input
                                // value={state.username}
                                // onChange={(event) =>
                                // dispatch({
                                //     type: 'textInput',
                                //     payload: { key: 'firstname', value: event.target.value },
                                // })
                                // } 
                                />
                                </div>
                            <div className="col-md-6"><label className="labels">Sobrenome</label>
                            <input type="text" className="form-control"  placeholder="Sobrenome"/></div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label className="labels">Nome em Katakana</label><input type="text" className="form-control" placeholder="????????????" /></div>
                            <div className="col-md-6"><label className="labels">Sobrenome em Katakana</label><input type="text" className="form-control"  placeholder="????????????"/></div>
                        </div>
                        <div className="form-group">
                            <label>Data de Nascimento</label> 
                            <input id="dob" name="dob"
                            max="2005-01-01"
                            type="date"
                            className="form-control"
                            aria-describedby="dobHelpBlock"
                            required="required"/> 
                        </div>
                        <label>Genero*</label> 
                            <div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input name="genero" id="genero_0" type="radio" className="custom-control-input" value="???" required="required"/> 
                                <label className="custom-control-label">Masculino</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input name="genero" id="genero_1" type="radio" className="custom-control-input" value="???" required="required"/> 
                                <label className="custom-control-label">Feminino</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input name="genero" id="genero_2" type="radio" className="custom-control-input" value="???" required="required"/> 
                                <label className="custom-control-label">Outro</label>
                            </div>
                            </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Celular</label><input type="text" className="form-control" placeholder="enter phone number" /></div>
                            <div className="form-group">
                                <label>Estado Civil*</label> 
                                <div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="estado-civil" id="estado-civil_0" type="radio" className="custom-control-input" value="???"/> 
                                    <label className="custom-control-label">Casado</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="estado-civil" id="estado-civil_1" type="radio" className="custom-control-input" value="???"/> 
                                    <label className="custom-control-label">Solteiro</label>
                                </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Nacionalidade*</label> 
                                <div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-radio">
                                    <input name="nacionalidade" id="nacionalidade_0" type="radio" className="custom-control-input" value="????????????" required="required"/> 
                                    <label className="custom-control-label">Brasil</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-radio">
                                    <input name="nacionalidade" id="nacionalidade_1" type="radio" className="custom-control-input" value="????????????" required="required"/> 
                                    <label className="custom-control-label">Bolivia</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-radio">
                                    <input name="nacionalidade" id="nacionalidade_2" type="radio" className="custom-control-input" value="?????????" required="required"/> 
                                    <label className="custom-control-label">Peru</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-radio">
                                    <input name="nacionalidade" id="nacionalidade_3" type="radio" required="required" className="custom-control-input" value="??????"/> 
                                    <label className="custom-control-label">Japao</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-radio">
                                    <input name="nacionalidade" id="nacionalidade_4" type="radio" className="custom-control-input" value="???" required="required"/> 
                                    <label className="custom-control-label">Outro</label>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Descend??ncia*</label> 
                                <div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-radio">
                                    <input name="descendencia" id="descendencia_0" type="radio" className="custom-control-input" value="?????????" required="required"/> 
                                    <label className="custom-control-label">Japon??s</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-radio">
                                    <input name="descendencia" id="descendencia_1" type="radio" className="custom-control-input" value="??????" required="required"/> 
                                    <label className="custom-control-label">Nissei</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-radio">
                                    <input name="descendencia" id="descendencia_2" type="radio" className="custom-control-input" value="??????" required="required"/> 
                                    <label className="custom-control-label">Sansei</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-radio">
                                    <input name="descendencia" id="descendencia_3" type="radio" className="custom-control-input" value="??????" required="required"/> 
                                    <label className="custom-control-label">Yonsei</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-radio">
                                    <input name="descendencia" id="descendencia_4" type="radio" className="custom-control-input" value="?????????" required="required"/> 
                                    <label className="custom-control-label">C??njuge de descendente</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-radio">
                                    <input name="descendencia" id="descendencia_5" type="radio" className="custom-control-input" value="outro" required="required"/> 
                                    <label className="custom-control-label">Outro</label>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                                <label>Prefeitura*</label> 
                                <div>
                                <span id="prefeituraHelpBlock" className="form-text text-muted">Selecione a prefeitura onde reside atualmente</span><br/>
                                <select id="prefeitura" name="prefeitura" className="custom-select" aria-describedby="prefeituraHelpBlock" required="required">
                                    <option value="????????????">????????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="????????????">????????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="????????????">????????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="????????????">????????????</option>
                                    <option value="?????????">?????????</option>
                                </select> 
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Cidade*</label> 
                                <input id="cidade" name="cidade" placeholder="Nome da cidade" type="text" className="form-control" required="required"/>
                                <label className="labels">Endereco</label><input type="text" className="form-control" placeholder="Endereco" />

                            </div>
                            </div>
                            <div className="experiencia-de-trabalho">
                            <div className="form-group">
                                <h3>Experi??ncia de trabalho</h3> 
                                <div><span id="experienceHelpBlock" className="form-text text-muted">Selecione as areas onde ja atuou no Jap??o</span>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="experience" id="experience_0" type="checkbox" aria-describedby="experienceHelpBlock" className="custom-control-input" value="olho-nu"/> 
                                    <label className="custom-control-label">Inspe????o a olho nu</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="experience" id="experience_1" type="checkbox" aria-describedby="experienceHelpBlock" className="custom-control-input" value="lupa"/> 
                                    <label className="custom-control-label">Inspe????o com Lupa</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="experience" id="experience_2" type="checkbox" aria-describedby="experienceHelpBlock" className="custom-control-input" value="microscopio"/> 
                                    <label className="custom-control-label">Inspe????o com Microsc??pio</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="experience" id="experience_3" type="checkbox" aria-describedby="experienceHelpBlock" className="custom-control-input" value="montagem"/> 
                                    <label className="custom-control-label">Montagem</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="experience" id="experience_4" type="checkbox" aria-describedby="experienceHelpBlock" className="custom-control-input" value="solda"/> 
                                    <label className="custom-control-label">Solda</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="experience" id="experience_5" type="checkbox" aria-describedby="experienceHelpBlock" className="custom-control-input" value="maquinario"/> 
                                    <label className="custom-control-label">Operador de Maquin??rio</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="experience" id="experience_6" type="checkbox" aria-describedby="experienceHelpBlock" className="custom-control-input" value="solda-branca"/> 
                                    <label className="custom-control-label">Solda Branca</label>
                                    </div>
                                </div> 
                                </div>
                            </div>
                            <div className="form-group">
                                <label>N??vel de Japon??s*</label> 
                                <div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="nihongo" id="nihongo_0" type="radio" className="custom-control-input" value="0" required="required"/> 
                                    <label className="custom-control-label">N??o falo japon??s</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="nihongo" id="nihongo_1" type="radio" className="custom-control-input" value="10" required="required"/> 
                                    <label className="custom-control-label">Falo pouco 10%~</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="nihongo" id="nihongo_2" type="radio" className="custom-control-input" value="30" required="required"/> 
                                    <label className="custom-control-label">B??sico 30%~</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="nihongo" id="nihongo_3" type="radio" required="required" className="custom-control-input" value="50"/> 
                                    <label className="custom-control-label">M??dio 50%~</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="nihongo" id="nihongo_4" type="radio" required="required" className="custom-control-input" value="60"/> 
                                    <label className="custom-control-label">Intermedi??rio 60%~</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="nihongo" id="nihongo_5" type="radio" required="required" className="custom-control-input" value="80"/> 
                                    <label className="custom-control-label">Avan??ado 80%~</label>
                                </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Escolaridade*</label> 
                                <div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="escolaridade" id="escolaridade_0" type="radio" className="custom-control-input" value="fundamental" required="required"/> 
                                    <label className="custom-control-label">Ensino Fundamental</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="escolaridade" id="escolaridade_1" type="radio" className="custom-control-input" value="medio" required="required"/> 
                                    <label className="custom-control-label">Ensino M??dio</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="escolaridade" id="escolaridade_2" type="radio" className="custom-control-input" value="superior" required="required"/> 
                                    <label className="custom-control-label">Ensino Superior</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="escolaridade" id="escolaridade_3" type="radio" required="required" className="custom-control-input" value="tecnico"/> 
                                    <label className="custom-control-label">Curso T??cnico</label>
                                </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="checkbox" id="checkbox_0" type="checkbox" className="custom-control-input" value="carta-motorista-ok"/> 
                                    <label className="custom-control-label">Possuo carta de motorista</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="checkbox" id="checkbox_1" type="checkbox" className="custom-control-input" value="mudanca-ok"/> 
                                    <label className="custom-control-label">Posso mudar de cidade</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="checkbox" id="checkbox_2" type="checkbox" className="custom-control-input" value="precisa-moradia"/> 
                                    <label className="custom-control-label">Preciso de moradia</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="checkbox" id="checkbox_3" type="checkbox" className="custom-control-input" value="????????????"/> 
                                    <label className="custom-control-label">Posso fazer Horas-Extras</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="checkbox" id="checkbox_4" type="checkbox" className="custom-control-input" value="????????????"/> 
                                    <label className="custom-control-label">Posso trabalhar em feriados</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="checkbox" id="checkbox_5" type="checkbox" className="custom-control-input" value="turno-alternado-ok"/> 
                                    <label className="custom-control-label">Posso trabalhar em turnos alternados</label>
                                    </div>
                                </div>
                                <div className="custom-controls-stacked">
                                    <div className="custom-control custom-checkbox">
                                    <input name="checkbox" id="checkbox_6" type="checkbox" className="custom-control-input" value="folgas-irregulares-ok"/> 
                                    <label className="custom-control-label">Posso trabalhar com folgas irregulares</label>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Altura</label> 
                                <input id="altura" name="altura" placeholder="exemplo: 170 cm" type="text" className="form-control" aria-describedby="alturaHelpBlock" required="required"/> 
                                <span id="alturaHelpBlock" className="form-text text-muted">Insira sua altura em cm</span>
                            </div>
                            </div>
                            <div className="vestimenta">
                                <h3>Tamanhos</h3>
                            <div className="form-group">
                                <label>Tamanho de Camisa</label> 
                                <div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="tam-camisa" id="tam-camisa_0" type="radio" className="custom-control-input" value="small" aria-describedby="tam-camisaHelpBlock"/> 
                                    <label className="custom-control-label">S</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="tam-camisa" id="tam-camisa_1" type="radio" className="custom-control-input" value="medium" aria-describedby="tam-camisaHelpBlock"/> 
                                    <label className="custom-control-label">M</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="tam-camisa" id="tam-camisa_2" type="radio" className="custom-control-input" value="large" aria-describedby="tam-camisaHelpBlock"/> 
                                    <label className="custom-control-label">L</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="tam-camisa" id="tam-camisa_3" type="radio" aria-describedby="tam-camisaHelpBlock" className="custom-control-input" value="LL"/> 
                                    <label className="custom-control-label">LL</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="tam-camisa" id="tam-camisa_4" type="radio" aria-describedby="tam-camisaHelpBlock" className="custom-control-input" value="3L"/> 
                                    <label className="custom-control-label">3L</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="tam-camisa" id="tam-camisa_5" type="radio" aria-describedby="tam-camisaHelpBlock" className="custom-control-input" value="outro"/> 
                                    <label className="custom-control-label">Outro</label>
                                </div> 
                                <span id="tam-camisaHelpBlock" className="form-text text-muted">Selecione o tamanho que geralmente usa</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Tamanho de Cal??a</label> 
                                <div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="tam-calca" id="tam-calca_0" type="radio" className="custom-control-input" value="small"/> 
                                    <label className="custom-control-label">S</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="tam-calca" id="tam-calca_1" type="radio" className="custom-control-input" value="medium"/> 
                                    <label className="custom-control-label">M</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="tam-calca" id="tam-calca_2" type="radio" className="custom-control-input" value="large"/> 
                                    <label className="custom-control-label">L</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="tam-calca" id="tam-calca_3" type="radio" className="custom-control-input" value="LL"/> 
                                    <label className="custom-control-label">LL</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="tam-calca" id="tam-calca_4" type="radio" className="custom-control-input" value="3L"/> 
                                    <label className="custom-control-label">3L</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input name="tam-calca" id="tam-calca_5" type="radio" className="custom-control-input" value="outro"/> 
                                    <label className="custom-control-label">Outro</label>
                                </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Tamanho de Cal??ado</label> 
                                <input id="sapato" name="sapato" placeholder="exemplo: 25cm" type="text" className="form-control" required="required"/>
                            </div>
                            </div>

                            <div className="documentos">
                                <h3>Documentos</h3>
                            <div className="col-md-12"><label className="labels">Numero Zairyuu</label>
                            <input type="text" className="form-control" placeholder="" /></div> <br/>
                            <div className="col-md-12"><label className="labels">Validade do Zairyuu</label>
                            <input id="zairyuudate" name="zairyuudate"
                            min={yourDate}
                            type="date"
                            className="form-control"
                            aria-describedby="dobHelpBlock"
                            required="required"/> 
                        </div><br/>
                            <div className="col-md-12"><label className="labels">Tipo de Visto</label> <br/>
                            <select id="tipodevisto" name="visto">
                                <option value="?????????">Longa duracao</option>
                                <option value="??????">Estudante</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                                </select>
                            </div> <br/>
                            <div className="col-md-12"><label className="labels">Quando chegou ao Japao</label>
                            <input id="arrivaldate" name="arrivaldate"
                            min={yourDate}
                            type="date"
                            className="form-control"
                            aria-describedby="dobHelpBlock"
                            required="required"/></div>
                            </div>
                            <br/>
                            <div className="saude">
                                <h3>Saude</h3>
                            <div className="col-md-12"><label className="labels">Condicao de saude</label>
                            <input type="text" className="form-control" placeholder="" /></div>
                            <br/>
                            <div className="col-md-12"><label className="labels">Alergias</label>
                            <input type="text" className="form-control" placeholder="" /></div> <br/>
                            <div className="row mt-2">
                            <div className="col-md-6"><label className="labels">Uso de lentes corretivas</label><br/>
                            <select id="lentescorretivas" name="lentes">
                                <option value="???">Nao uso</option>
                                <option value="??????">Miopia</option>
                                <option value="??????">Astigmatismo</option>
                                <option value="??????">Hipermetropia</option>
                                </select></div> <br/>
                            <div className="col-md-6"><label className="labels">Tipo sanguineo</label><br/>
                            <select id="tiposanguineo" name="tiposanguineo">
                                <option value="o">O</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="AB">AB</option>
                                </select></div>
                                </div>
                                </div>
                                <br/>
                            <div className="Parentesco">
                                <h3>Estrutura Familiar e Dependentes</h3>
                                <div className="row mt-2">
                                <label className="labels">Parentesco</label>
                                        <select id="parentesco1" name="parentesco1">
                                        <option value="o">Filho(a)</option>
                                        <option value="AB">Enteado</option>
                                        <option value="A">Conjuge</option>
                                        <option value="B">Pai</option>
                                        <option value="AB">Mae</option>
                                        <option value="AB">Sogro</option>
                                        <option value="AB">Sogra</option>
                                        <option value="AB">Irmao</option>
                                        <option value="AB">Irma</option>
                                        <option value="AB">Tio(a)</option>
                                        <option value="AB">Primo(a)</option>
                                        <option value="AB">Outro</option>
                                        </select>
                                    <label className="labels">Nome</label><input type="text" className="form-control" placeholder="Nome" />
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6"><label className="labels">Idade</label><input type="number" className="form-control"  placeholder=""/></div>
                                    <div className="col-md-6"><label className="labels">Endereco</label><input type="text" className="form-control"  placeholder=""/></div>
                                </div>
                                </div>
                                <div className="Parentesco">
                                <div className="row mt-2">
                                <label className="labels">Parentesco</label>
                                        <select id="parentesco2" name="parentesco2">
                                        <option value="o">Filho(a)</option>
                                        <option value="AB">Enteado</option>
                                        <option value="A">Conjuge</option>
                                        <option value="B">Pai</option>
                                        <option value="AB">Mae</option>
                                        <option value="AB">Sogro</option>
                                        <option value="AB">Sogra</option>
                                        <option value="AB">Irmao</option>
                                        <option value="AB">Irma</option>
                                        <option value="AB">Tio(a)</option>
                                        <option value="AB">Primo(a)</option>
                                        <option value="AB">Outro</option>
                                        </select>
                                    <label className="labels">Nome</label><input type="text" className="form-control" placeholder="Nome" />
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6"><label className="labels">Idade</label><input type="number" className="form-control"  placeholder=""/></div>
                                    <div className="col-md-6"><label className="labels">Endereco</label><input type="text" className="form-control"  placeholder=""/></div>
                                </div>
                                </div>
                                <div className="Parentesco">
                                <div className="row mt-2">
                                <label className="labels">Parentesco</label>
                                        <select id="parentesco3" name="parentesco3">
                                        <option value="o">Filho(a)</option>
                                        <option value="AB">Enteado</option>
                                        <option value="A">Conjuge</option>
                                        <option value="B">Pai</option>
                                        <option value="AB">Mae</option>
                                        <option value="AB">Sogro</option>
                                        <option value="AB">Sogra</option>
                                        <option value="AB">Irmao</option>
                                        <option value="AB">Irma</option>
                                        <option value="AB">Tio(a)</option>
                                        <option value="AB">Primo(a)</option>
                                        <option value="AB">Outro</option>
                                        </select>
                                    <label className="labels">Nome</label><input type="text" className="form-control" placeholder="Nome" />
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6"><label className="labels">Idade</label><input type="number" className="form-control"  placeholder=""/></div>
                                    <div className="col-md-6"><label className="labels">Endereco</label><input type="text" className="form-control"  placeholder=""/></div>
                                </div>
                                </div>
                                <div className="Parentesco">
                                <div className="row mt-2">
                                <label className="labels">Parentesco</label>
                                        <select id="parentesco4" name="parentesco4">
                                        <option value="o">Filho(a)</option>
                                        <option value="AB">Enteado</option>
                                        <option value="A">Conjuge</option>
                                        <option value="B">Pai</option>
                                        <option value="AB">Mae</option>
                                        <option value="AB">Sogro</option>
                                        <option value="AB">Sogra</option>
                                        <option value="AB">Irmao</option>
                                        <option value="AB">Irma</option>
                                        <option value="AB">Tio(a)</option>
                                        <option value="AB">Primo(a)</option>
                                        <option value="AB">Outro</option>
                                        </select>
                                    <label className="labels">Nome</label><input type="text" className="form-control" placeholder="Nome" />
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6"><label className="labels">Idade</label><input type="number" className="form-control"  placeholder=""/></div>
                                    <div className="col-md-6"><label className="labels">Endereco</label><input type="text" className="form-control"  placeholder=""/></div>
                                </div>
                                </div>
                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Salvar perfil</button></div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
}

export default Userprofile;