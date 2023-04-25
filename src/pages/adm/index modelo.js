import React, {useEffect, useState} from "react";
import Content from "./style";
import Fade from "react-reveal/Fade";

import {Button, Form, Row, Col} from 'react-bootstrap';
import {MenuAdm} from "container";

import ScrollableAnchor from "react-scrollable-anchor";

import {useDispatch} from "react-redux";
import * as Actions from 'store/actions';
//import {System_Service} from "service";

import {Alerts} from "../../components";
import * as Fa from "react-icons/fa";

const AdmPage = () => {

    useEffect(() => {
        getEnterprise()
    }, [])

    const getEnterprise = async () => {
        
    }

    function handleChange(e) {
        
    }

    function handleFile(file) {
        
    }

    function handleCheck() {
        
    }

    async function handleSubmit(e) {
        
    }

    const deleteStore = async (id) => {
        
    }

    const resetFields = () => {
        
    }


    return (
        <ScrollableAnchor id="">
            <div>
                <Alerts/>
                <MenuAdm/>
                <Fade>
                    <Content className="row col-12 row admin justify-content-between">
                        <div className="bg-white rounded col-6">
                            <div className='col-9'>
                                <h4>LOJAS CADASTRADAS</h4>
                                {lojas && lojas.length > 0 ?
                                    lojas.map((item, index) =>
                                        <div className='row justify-content-between register p-3' key={index}>
                                            <div className='mt-2 col-8'>{item.cidade}</div>
                                            <div className='row col-auto align-items-start'>
                                                <Button className="btn-info" type="button"
                                                        onClick={() => {
                                                            setDataModal([{image: item.imagem}])
                                                            setModalShow(true)
                                                        }}>
                                                    <Fa.FaSearch size={18} color="#ffffff"/>
                                                </Button>
                                                <Button className="btn-dark ml-2"
                                                        type="button" onClick={() => {
                                                    setFields({
                                                        ...fields,
                                                        id: item.id,
                                                        input_nome: item.cidade,
                                                        input_endereco: item.endereco,
                                                        input_email: item.email,
                                                        input_horsegsab: item.horario_funcionamento,
                                                        input_link: item.link,
                                                        input_telefone: item.telefone,
                                                        images: item.imagem
                                                    });
                                                    setEditStore(true);
                                                }}>
                                                    <Fa.FaEdit size={18} color="#FFF"/>
                                                </Button>
                                                <Button className="btn-danger ml-2" type="button"
                                                        onClick={() => deleteStore(item.id)}>
                                                    <Fa.FaTimes size={18} color="#FFF"/>
                                                </Button>
                                            </div>
                                        </div>
                                    )
                                    :
                                    <div>Não há lojas cadastradas</div>
                                }
                            </div>
                        </div>
                        <div className="shadow bg-white rounded col-6">
                            <Form
                                className="form col-12 p-0 p-md-4"
                                onSubmit={handleSubmit}
                            >
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control className="input" value={fields.input_nome} name="input_nome"
                                                  onChange={handleChange} type="text" placeholder="Nome da Loja:"
                                                  required/>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control value={fields.input_endereco} name="input_endereco" className="input"
                                                  onChange={handleChange} type="text" placeholder="Endereço:" required/>
                                </Form.Group>
                                <Form.Group controlId="formGridEmail">
                                    <Form.Control value={fields.input_email} name="input_email" className="input"
                                                  onChange={handleChange} type="email" placeholder="E-mail:" required/>
                                </Form.Group>
                                <Form.Group controlId="formGridEmail">
                                    <Form.Control value={fields.input_horsegsab} name="input_horsegsab"
                                                  className="input" onChange={handleChange} type="text"
                                                  placeholder="Horário de funcionamento" required/>
                                </Form.Group>
                                <Form.Row>
                                    <div class="col-12 col-md-5">
                                        <Form.Group controlId="formGridCidade">
                                            <Form.Control value={fields.input_telefone} name="input_telefone"
                                                          className="input" onChange={handleChange} type="text"
                                                          placeholder="Telefone:"/>
                                        </Form.Group>
                                    </div>
                                    <div class="col-12 col-md-7 row align-items-start">
                                        <Form.File
                                            id="arquivo"
                                            name="arquivo"
                                            label="Imagem da Loja"
                                            data-browse="▼"
                                            className="inputFile"
                                            onChange={e => handleFile(e.target.files)}
                                            custom
                                            required={!editStore}
                                        />
                                        {editStore && <Button className="btn-info ml-2" type="button"
                                                              onClick={() => {
                                                                  setDataModal([{image: fields.images}])
                                                                  setModalShow(true)
                                                              }}>
                                            <Fa.FaSearch size={18} color="#ffffff"/>
                                        </Button>
                                        }
                                    </div>
                                </Form.Row>

                                <Form.Group className="boxBotao mt-3" as={Row}>
                                    {!editStore ?
                                        <Button className="btn-primary" type="submit"><strong>SALVAR</strong></Button>
                                        :
                                        <Button className="btn-dark" type="submit"><strong>EDITAR</strong></Button>
                                    }
                                    <Button className="btn-secondary ml-3" type="button"
                                            onClick={resetFields}><strong>CANCELAR</strong></Button>
                                </Form.Group>
                            </Form>
                        </div>

                        
                    </Content>
                </Fade>
            </div>
        </ScrollableAnchor>
      );
  };
  
  export default AdmPage;