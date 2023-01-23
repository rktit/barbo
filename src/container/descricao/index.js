import React, {useState, useEffect} from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Zoom from "react-reveal/Zoom";

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';


import qualidade from "images/icons/qualidadeLs.png";
import assistencia from "images/icons/assistenciaTecnicaLs.png";
import maquinas from "images/icons/maquinasLs.png";
import posVenda from "images/icons/posVendaLs.png";

import {useDispatch} from "react-redux";
import * as Actions from 'store/actions';
import {Services_Emails} from "service";

function Descricao() {

    
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
            { isMobile ?  
                <Splide className=" col-12" options={{
                    rewind: true,
                    width: "100%",
                    gap: '1.5rem',
                    perPage: 1,
                    pagination: false
                }}>
                    <SplideSlide >
                        <div className="icones">
                            <img src={qualidade} alt="Qualidade" /><br/>
                            <span style={{marginTop:"-12px"}}>127<br/>apartamentos</span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>  
                        <div className="icones">
                            <img src={maquinas} alt="Máquinas" style={{width:"100px"}}/>
                            <span style={{marginTop:"5px"}}>243<br/>Lançamentos<br/>2023</span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="icones">
                            <img src={assistencia} alt="Assistencia Tecnica" style={{width:"90px"}}/>
                            <span style={{marginTop:"15px"}}>185<br/>Empreend.<br/>Em obras</span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>  
                        <div className="icones">
                            <img className="image" src={posVenda} alt="Pós-venda" style={{width:"110px"}}/>
                            <span style={{marginTop:"30px"}}>225<br/>Entregues</span>
                        </div>
                    </SplideSlide>
                </Splide>
            
            :
                <div className="col-10 offset-sm-1" style={{marginTop: "100px"}}>
                    <div className="medalhas row col-12">
                        <Zoom>
                            <div className="icones col-3">
                                <img src={qualidade} alt="Qualidade" /><br/>
                                <span style={{marginTop:"-12px"}}>127<br/>apartamentos</span>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="icones col-3">
                                <img src={maquinas} alt="Máquinas" style={{width:"110px"}}/>
                                <span style={{marginTop:"10px"}}>243<br/>Lançamentos<br/>2023</span>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="icones col-3">
                                <img src={assistencia} alt="Assistencia Tecnica" style={{width:"90px"}}/>
                                <span style={{marginTop:"20px"}}>185<br/>Empreend.<br/>Em obras</span>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="icones col-3">
                                <img className="image" src={posVenda} alt="Pós-venda" style={{width:"110px"}}/>
                                <span style={{marginTop:"30px"}}>225<br/>Entregues</span>
                            </div>
                        </Zoom>
                    </div>
                </div>
            }

        </Content>
    </ScrollableAnchor>
);
}

export default Descricao;
