import React, { useState } from "react";
import Content from "./style";

import ScrollableAnchor from "react-scrollable-anchor";
import Fade from "react-reveal/Fade";

import { Services_Emails } from "service";
import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';
import logo from "images/login/logo.png";



function Login() {

    const dispatch = useDispatch();
    const [fields, setFields] = useState({ input_newsletter: '' });

    function handleChange(e) {
        e.preventDefault();
        setFields({ input_newsletter: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const valid_email = re.test(fields.input_newsletter);

        console.log('valid_email', valid_email);

        if (fields.input_newsletter.length < 5) {
            dispatch(Actions.open_alert('warning', 'É necessário um e-mail'));
            return false;
        }
        if (!valid_email) {
            dispatch(Actions.open_alert('warning', 'Insira um e-mail válido'));
            return false;
        }

        dispatch(Actions.toggle_modal('load'));


        const result = await Services_Emails.sendNewsletter({ email: fields.input_newsletter });
        dispatch(Actions.close_modal('load'));
        if (result.error) {
            dispatch(Actions.open_alert('danger', 'Houve um problema, tente novamente!'));
        } else {
            dispatch(Actions.open_alert('success', 'SUCESSO!!!!!'));
            setFields({ input_newsletter: '' });
        }
    }

    return (
        <ScrollableAnchor id="newsletter">
            <Content>
                <Fade right>
                    <div className='d-flex conteudo'>
                        <div className="d-flex">
                            <div>
                                <img className="logo" src={logo} />
                            </div>
                        </div>
                        <div className="d-flex">
                            <form onSubmit={handleSubmit} className="d-flex logoLogin">
                                    <div className="boxEmail">
                                        <input type='nome' name="input_newsletter" className="input-newsletter col-11"
                                            placeholder="Nome" onChange={e => handleChange(e)}
                                            value={fields.input_newsletter} />
                                    </div>
                                    <div className="boxEmail">
                                        <input type='email' name="input_newsletter" className="input-newsletter col-11"
                                            placeholder="E-mail" onChange={e => handleChange(e)}
                                            value={fields.input_newsletter} />
                                    </div>
                                <div className="boxCadastrar d-flex">
                                    <a href="#newsletter" className='buttom' onClick={handleSubmit}>
                                        Enviar
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </Fade>
            </Content>
        </ScrollableAnchor>
    );
}

export default Login;
