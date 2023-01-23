import React, {useState} from "react";
import Content from "./style";
import Fade from "react-reveal/Fade";

import { Button, Form, Row, Col } from 'react-bootstrap';

import ScrollableAnchor from "react-scrollable-anchor";

import {useDispatch} from "react-redux";
import * as Actions from 'store/actions';
import {Services_Emails} from "service";

function FormWorkWithUs() {

    const dispatch = useDispatch();

    const [fields, setFields] = useState({
        input_nome: '',
        input_whats: '',
        input_email: '',
        input_idade: '',
        input_cidade: '',
        arquivo: null,
        check_validacao: false,
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
    
    function handleFile(file) {
        //alert(file);
        setFields({
            ...fields,
            arquivo: file,
        });
    }

    function handleCheck() {
        setFields({
            ...fields,
            check_validacao: !fields.check_validacao
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        if (fields.input_nome.length < 2 ||
            fields.input_email.length < 5 ||
            fields.input_whats < 8 ||
            fields.input_cidade.length < 2 ||
            fields.input_idade.length < 1) {
                
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
        
        if(fields.arquivo === null){
            //alert('Anexe seu currículo');
            dispatch(Actions.open_alert('warning', 'Anexe seu currículo'));
            return false;
        }

        const data = await new FormData()

        data.append('nome', fields.input_nome);
        data.append('celular', fields.input_whats);
        data.append('email', fields.input_email);
        data.append('idade', fields.input_idade);
        data.append('cidade', fields.input_cidade);
        data.append('arquivo', fields.arquivo);
        
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
                input_idade: '',
                input_cidade: '',
                arquivo: null,
            });
        }
    }

    return (
        <ScrollableAnchor id="">
            <Fade left>
                <Content className="col-12 row">
                    <div class="textos shadow p-3 mb-5 bg-white rounded col-10 col-md-5">
                        <Form 
                            className="form col-12 p-0 col-md-12 p-md-4"
                            action='/api/sendTrabalhe'
                            method="POST"
                            enctype="multipart/form-data"
                            name='form'
                            id={'form'}
                        >
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control className="input" value={fields.input_nome} name="input_nome" onChange={handleChange} type="text" placeholder="Nome Completo:" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control value={fields.input_whats} name="input_whats" className="input" onChange={handleChange} type="text" placeholder="Celular/WhatsApp:" />
                            </Form.Group>
                            <Form.Row>
                                <div class="col-12 col-md-8">
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control value={fields.input_email} name="input_email" className="input" onChange={handleChange} type="email" placeholder="E-mail:" />
                                    </Form.Group>
                                </div>
                                <div class="col-12 col-md-4">
                                    <Form.Group controlId="formGridIdade">
                                        <Form.Control value={fields.input_idade} name="input_idade" className="input" onChange={handleChange} type="number" placeholder="Idade:" />
                                    </Form.Group>
                                </div>
                            </Form.Row>
                            <Form.Row>
                                <div class="col-12 col-md-5">
                                    <Form.Group controlId="formGridCidade">
                                        <Form.Control value={fields.input_cidade} name="input_cidade" className="input" onChange={handleChange} type="text" placeholder="Cidade:"/>
                                    </Form.Group>
                                </div>
                                <div class="col-12 col-md-7">
                                <Form.File
                                    id="arquivo"
                                    name="arquivo"
                                    label="Anexe aqui seu currículo"
                                    data-browse="▼"
                                    className="inputFile"
                                    accept="application/pdf"
                                    onChange={e => handleFile(...e.target.files)}
                                    custom

                                />
                                </div>
                            </Form.Row>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check
                                    name="check_validacao"
                                    className="textCheck mt-2"
                                    type="checkbox"
                                    onClick={() => handleCheck()}
                                    label="Ao enviar o meu currículo na Terrazul Tratores, manifesto o meu consentimento livre, informado e inequívoco para que meus dados pessoais sejam tratados pela empresa com a finalidade de análise e, se for o caso, seleção em eventual processo de contratação para compor seu quadro de empregados, bem como o compartilhamento dos dados pessoais constantes no currículo com empresas do mesmo grupo econômico da Terrazul Tratores.
                                    Autorizo ainda a empresa a armazenar o meu currículo em seu banco de dados pelo prazo de 01 (um ano). Após este período, todos os dados serão automaticamente eliminados de forma segura pela empresa, ressalvadas as hipóteses em que, por obrigação legal ou regulatória, seja obrigada a mantê-los." 
                                />
                            </Form.Group >
                            <Form.Group className="boxBotao" as={Row}>
                                <Button onClick={handleSubmit} className="btnEnviar" type="submit"><strong>ENVIAR</strong></Button>
                            </Form.Group>
                        </Form>
                    </div>
                </Content>
            </Fade>
        </ScrollableAnchor>
    );
}

export default FormWorkWithUs;
