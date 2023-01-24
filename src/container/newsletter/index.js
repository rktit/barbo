import React, { useState } from "react";
import Content from "./style";

import ScrollableAnchor from "react-scrollable-anchor";
import Fade from "react-reveal/Fade";

import { Services_Emails } from "service";
import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';



function NewsLetter() {

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
            <Content className="row">
                <Fade right>
                    <div className='conteudo col-12 offset-md-0 p-0 row'>
                        <div className="text col-12 offset-md-1">
                            newsletter
                        </div>
                        <div className="title">
                            Cadastre-se e fique pro dentro <br />
                            das novidades da Barbo
                        </div>
                        <div className="col-6">
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex col">
                                    <div className="boxNome d-flex row">
                                        <input type='nome' name="input_newsletter" className="input-newsletter col-11"
                                            placeholder="Nome" onChange={e => handleChange(e)}
                                            value={fields.input_newsletter} />
                                    </div>
                                    <div className="boxEmail d-flex row">
                                        <input type='email' name="input_newsletter" className="input-newsletter col-11"
                                            placeholder="E-mail" onChange={e => handleChange(e)}
                                            value={fields.input_newsletter} />
                                    </div>
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

export default NewsLetter;
