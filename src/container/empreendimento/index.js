import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import shower from "images/empreendimento_interna/shower.png";
import area from "images/empreendimento_interna/area.png";
import doubleBed from "images/empreendimento_interna/double-bed.png";
import garage from "images/empreendimento_interna/garage.png";

function Empreendimento(props) {

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);

  return (
    <ScrollableAnchor id="assistencia_tecnica">
      <Content className="col-12 row justify-content-center">

        <Fade left>
          <div className="left-side mt-5">
            {/* {isMobile ? ""
              : */}
            <div className=""></div>
            {/* } */}
            <div className="flex m-4">
              <span className="title">Nome do Empreendimento</span><p />
              <span className="texto">
                Somos movidos por <strong>planejar sonhos</strong> e <strong>transformar vidas.</strong> São <br />
                <strong>mais de 5.000 lares e empresas impactadas com a nossa entrega.</strong> <br />
                O <strong>relacionamento</strong> e <strong>transparência</strong> são parte do que chamamos <br />
                de <strong>comprometimento com o cliente. Missão</strong> essa que <strong>motiva</strong> e <br />
                <strong>impulsiona</strong> toda a nossa equipe a buscar por inovações e as <br />
                melhores formas de construir sonhos que se tornarão realidade.<p />
                Com <strong>mais de 10 anos de mercado,</strong> estamos criando narrativas e <br />
                dando continuidade a tantas outras. Histórias e pessoas que <br />
                acreditam em nosso trabalho e confiam que juntos podemos <br />
                construir uma sociedade ainda melhor.
              </span>
            </div>
            <div className="icones-empreendimentos my-5">

              <div className="icones">
                <img className="" src={shower} alt="garantia" />
                Apartamentos com<br /> 2 ou 3 suítes
              </div>
              <div className="icones">
                <img className="" src={area} alt="assistencia" />
                94 e 134m² de <br />área privativa
              </div>
              <div className="icones">
                <img className="" src={doubleBed} alt="serviço" />
                Apartamentos de <br />2 ou 3 dormitórios
              </div>
              <div className="icones pr-2">
                <img className="" src={garage} alt="serviço" />
                Com 2 ou 3 vagas <br />na garagem
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="image-side my-5">
          </div>
        </Fade>
      </Content>
    </ScrollableAnchor>
  );
}

export default Empreendimento;
