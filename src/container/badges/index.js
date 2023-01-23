import React, {useState, useEffect} from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Zoom from "react-reveal/Zoom";
import { Form, Col, Row, Button } from "react-bootstrap";

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

import qualidade from "images/icons/qualidade.png";
import assistencia from "images/icons/assistenciaTecnica.png";
import maquinas from "images/icons/maquinas.png";
import posVenda from "images/icons/posVenda.png";
import icone_whatsapp_fundo from "images/icons/icone-whatsapp-fundo.png";

import {useDispatch} from "react-redux";
import * as Actions from 'store/actions';
import {Services_Emails} from "service";

function Badges() {

    
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth >= 992) {
                setMobile(false);
        } else {
                setMobile(true);
        }
    }, [window.innerWidth]);

    const dispatch = useDispatch();

    const [fields, setFields] = useState({
        input_nome: '',
        input_whats: '',
        input_email: '',
        input_maquina: '',
    });

    function handleChange(e) {
        e.preventDefault();
        console.log('e.target', e.target)
        console.log(e.target.name, e.target.value);
        setFields({
            ...fields,
            [e.target.name]: e.target.name !== 'arquivo' ? e.target.value : e.target.file
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        if (fields.input_nome.length < 2 ||
            fields.input_email.length < 5 ||
            fields.input_whats < 8 ||
            fields.input_maquina.length < 2){
                
                dispatch(Actions.open_alert('warning', 'Preencha os campos corretamente'));
                //alert('Preencha os campos corretamente');
                return false;
        }
        
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const valid_email = re.test(fields.input_email);
        
        if (!valid_email) {
            //alert('Insira um e-mail válido');
            dispatch(Actions.open_alert('warning', 'Insira um e-mail válido'));
            return false;
        }

        const data = await new FormData()

        data.append('nome', fields.input_nome);
        data.append('celular', fields.input_whats);
        data.append('email', fields.input_email);
        data.append('maquina', fields.input_maquina);
        
        dispatch(Actions.toggle_modal('load'));
        
        const result = await Services_Emails.sendEmail(data, 'true');
        dispatch(Actions.close_modal('load'));
        if (result.error) {
            //alert('Houve um problema, tente novamente!');
            dispatch(Actions.open_alert('danger', 'Erro ao enviar o e-mail, por favor, tente novamente!'));
        } else {
            //alert('SUCESSO!!!!!');
            dispatch(Actions.open_alert('success', 'Proposta enviada com SUCESSO!'));
            setFields({
                input_nome: '',
                input_whats: '',
                input_email: '',
                input_maquina: '',
            });
        }
    }


  return (
      <ScrollableAnchor id="terrazul">
        <Content>
            <div className="topo col-11 col-md-10 d-flex justify-content-between offset-md-1">
                {isMobile ? '' : 
                    <div className="textos col-6 justify-content-end">
                        <div className="title">Seja bem-vindo a Terrazul Tratores!</div>
                        <div className="title2">Sua revenda Master Jacto</div>
                        <div className="text mt-md-2">
                            Desde 2016 a Terrazul Tratores tem a missão de atender você e seu agronegócio da melhor forma, entregando as melhores máquinas e implementos, visando a qualidade, eficiência e a relação a longo prazo. 
                            A Terrazul Tratores é representante MASTER DA JACTO, e trabalha com a potência que o campo precisa, independente da cultura que você produtor cultiva.<br/><br/>

                            “Ninguém cresce sozinho" - Shunji Nishimura<br/>
                            Fundador da Jacto.
                        </div>
                    </div>
                }
                <div className="orcamento col-12 col-sm-5 p-0">
                    <div className=" d-flex justify-content-start align-items-center px-4">
                        <div className="boxTitle mt-3">Solicite<br/><strong>ORÇAMENTO</strong></div>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <div className="btnWhat align-items-center justify-content-center">
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=5515996178681&text=Gostaria de falar com um consultor?" className="shadow btn d-flex align-items-center">
                            <strong>FALE AGORA PELO WHATSAPP</strong>
                            </a>
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=5515996178681&text=Gostaria de falar com um consultor?">
                                <img className="icone_whatsapp mr-1" src={icone_whatsapp_fundo} alt="Whatsapp"/>
                            </a>
                            
                        </div>
                    </div>
                    <div className="infoCotacao px-4">
                        <strong>Quer fazer uma cotação?</strong><br/>
                        Preencha abaixo, um de nossos<br/>
                        consultores entrará em contato com você!
                    </div>
                    <div className="col-12">
                        <Form 
                            className="form col-12 p-0 col-md-10 offset-md-1"
                            action='/api/sendemail'
                            method="POST"
                            enctype="multipart/form-data"
                            name='form'
                            id={'form'}
                        >
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control className="input" value={fields.input_nome} name="input_nome" onChange={handleChange} type="text" placeholder="Nome Completo" />
                            </Form.Group>
                            <Form.Group controlId="formGridEmail">
                                <Form.Control value={fields.input_email} name="input_email" className="input" onChange={handleChange} type="email" placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control value={fields.input_whats} name="input_whats" className="input" onChange={handleChange} type="text" placeholder="DDD + Telefone" />
                            </Form.Group>
                            <Form.Group controlId="formGridMaquina">
                                <Form.Control value={fields.input_maquina} name="input_maquina" className="input" onChange={handleChange} type="text" placeholder="maquina"/>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col className="d-flex justify-content-center mb-2">
                                    <Button onClick={handleSubmit} className="btnEnviar" type="submit"><strong>ENVIAR</strong></Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
            { isMobile ?  
                <Splide className="col-12" options={{
                    rewind: true,
                    width: "100%",
                    gap: '1.5rem',
                    perPage: 1,
                    pagination: false
                }}>
                    <SplideSlide >
                        <div className="icones">
                            <img src={qualidade} alt="Qualidade" /><br/>
                            <span style={{marginTop:"-12px"}}><strong>Produtos de Alta<br/>Qualidade</strong></span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="icones">
                            <img src={assistencia} alt="Assistencia Tecnica" style={{width:"90px"}}/>
                            <span style={{marginTop:"10px"}}><strong>Assistência técnica Especializada</strong></span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>  
                        <div className="icones">
                            <img src={maquinas} alt="Máquinas" style={{width:"120px"}}/>
                            <span style={{marginTop:"30px"}}><strong>Máquinas para<br/>todas as Culturas</strong></span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>  
                        <div className="icones">
                            <img className="image" src={posVenda} alt="Pós-venda" style={{width:"110px"}}/>
                            <span style={{marginTop:"30px"}}><strong>Pós-venda<br/>Eficaz</strong></span>
                        </div>
                    </SplideSlide>
                </Splide>
            
            :
                <div className="col-10 offset-md-1 mt-md-5">
                    <div className="medalhas row col-12">
                        <Zoom>
                            <div className="icones col-3">
                                <img src={qualidade} alt="Qualidade" /><br/>
                                <span style={{marginTop:"-12px"}}><strong>Produtos de Alta<br/>Qualidade</strong></span>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="icones col-3">
                                <img src={assistencia} alt="Assistencia Tecnica" style={{width:"90px"}}/>
                                <span style={{marginTop:"10px"}}><strong>Assistência técnica Especializada</strong></span>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="icones col-3">
                                <img src={maquinas} alt="Máquinas" style={{width:"120px"}}/>
                                <span style={{marginTop:"30px"}}><strong>Máquinas para<br/>todas as Culturas</strong></span>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="icones col-3">
                                <img className="image" src={posVenda} alt="Pós-venda" style={{width:"110px"}}/>
                                <span style={{marginTop:"30px"}}><strong>Pós-venda<br/>Eficaz</strong></span>
                            </div>
                        </Zoom>
                    </div>
                </div>
            }

        </Content>
      </ScrollableAnchor>
  );
}

export default Badges;
