import React, { useState, useEffect } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

function Essencia() {


    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth >= 992) {
            setMobile(false);
        } else {
            setMobile(true);
        }
    }, [window.innerWidth]);

    return (
        <ScrollableAnchor id="">
                <Content>
                    <div className="title justify-content-center">Nossa essência</div>
                    <div className="topo row d-flex justify-content-center offset-sm-1">
                        <div className="textos col-10 col-d-5 col-lg-5 justify-content-center mt-2">
                            <div className="text">
                                Somos movidos por <strong>planejar sonhos</strong> e <strong>transformar vidas.</strong> São <br />
                                <strong>mais de 5.000 lares e empresas impactadas com a nossa entrega.</strong> <br />
                                O <strong>relacionamento</strong> e <strong>transparência</strong> são parte do que chamamos <br />
                                de comprometimento com o cliente. Missão essa que <strong></strong>motiva e <br />
                                <strong>impulsiona</strong> toda a nossa equipe a buscar por inovações e as <br />
                                melhores formas de construir sonhos que se tornarão realidade.
                                <p />
                                Com <strong>mais de 10 anos de mercado,</strong> estamos criando narrativas e <br />
                                dando continuidade a tantas outras. Histórias e pessoas que <br />
                                acreditam em nosso trabalho e confiam que juntos podemos <br />
                                construir uma sociedade ainda melhor.

                            </div>
                        </div>
                        <div className="textos col-10 col-d-10 col-lg-4 justify-content-center mt-2">

                        <div className="text pb-3">
                            Fomos uma das primeiras incorporadoras do estado e hoje <br />
                            estamos sediados em Rio Claro|SP com atuação em diversas <br />
                            cidades do interior paulista.
                            <p />
                            Está na nossa essência construir além de lares! Dedicamos para <br />
                            entregar produtos com <strong>qualidade de vida, bem-estar</strong> e <br />
                            <strong>inovação</strong> para cada cliente. São <strong>empreendimentos projetados</strong> <br />
                            para terem diferenciais e a melhor qualidade para o que<br />
                            importa...VOCÊ!
                            <p />
                            Aqui na Barbo, trabalhamos com <strong>ética</strong> e <strong>responsabilidade,</strong> e <br />
                            por isso, temos orgulho de participar de <strong>momentos</strong> <br />
                            <strong>inesquecíveis</strong> da sua vida!
                        </div>
                        </div>

                    </div>

                </Content>
        </ScrollableAnchor>
    );
}

export default Essencia;
