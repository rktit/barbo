import React, { useState, useEffect } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Zoom from "react-reveal/Zoom";
import { Form, Col, Row, Button } from "react-bootstrap";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';


import tiete from "images/statics/tiete.png";
import piraju from "images/statics/piraju.png";
import itapetininga from "images/statics/itapetininga.png";
import qualidade from "images/icons/qualidadeLs.png";
import assistencia from "images/icons/assistenciaTecnicaLs.png";
import maquinas from "images/icons/maquinasLs.png";
import posVenda from "images/icons/posVendaLs.png";
import icone_whatsapp_fundo from "images/icons/icone-whatsapp-fundo.png";

import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';
import { Services_Emails } from "service";

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
            fields.input_maquina.length < 2) {

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
            {isMobile ? '' :
                <Content>
                    <div className="topo row d-flex justify-content-center offset-sm-1">
                        <div className="textos col-6 justify-content-center mt-2">
                            <div className="title justify-content-center">Nossa essência</div>
                            <div className="text">
                                Somos movidos por planejar sonhos e transformar vidas. São <br />
                                mais de 5.000 lares e empresas impactadas com a nossa entrega. <br />
                                O relacionamento e transparência são parte do que chamamos <br />
                                de comprometimento com o cliente. Missão essa que motiva e <br />
                                impulsiona toda a nossa equipe a buscar por inovações e as <br />
                                melhores formas de construir sonhos que se tornarão realidade.
                                <p />
                                Com mais de 10 anos de mercado, estamos criando narrativas e <br />
                                dando continuidade a tantas outras. Histórias e pessoas que <br />
                                acreditam em nosso trabalho e confiam que juntos podemos <br />
                                construir uma sociedade ainda melhor.
                                
                            </div>
                        </div>

                        <div className="text">
                            Fomos uma das primeiras incorporadoras do estado e hoje <br />
                            estamos sediados em Rio Claro|SP com atuação em diversas <br />
                            cidades do interior paulista.
                            <p />
                            Está na nossa essência construir além de lares! Dedicamos para <br />
                            entregar produtos com qualidade de vida, bem-estar e <br />
                            inovação para cada cliente. São empreendimentos projetados <br />
                            para terem diferenciais e a melhor qualidade para o que<br />
                            importa...VOCÊ!
                            <p />
                            Aqui na Barbo, trabalhamos com ética e responsabilidade, e <br />
                            por isso, temos orgulho de participar de momentos <br />
                            inesquecíveis da sua vida!
                        </div>
                    </div>

                </Content>
            }
        </ScrollableAnchor>
    );
}

export default Badges;
