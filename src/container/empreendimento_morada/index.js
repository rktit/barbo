import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import shower from "images/empreendimento_interna/shower.png";
import area from "images/empreendimento_interna/area.png";
import doubleBed from "images/empreendimento_interna/double-bed.png";
import garage from "images/empreendimento_interna/garage.png";

function EmpreendimentoMorada(props) {

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);

  return (
    <ScrollableAnchor id="descricao">
      <Content className="col-12 row justify-content-center">

        <Fade left>
          <div className="left-side mt-5">
            {/* {isMobile ? ""
              : */}
            <div className=""></div>
            {/* } */}
            <div className="flex m-5">
              <span className="title">MORADA DO PORTO RESIDENCIAL</span><p />
              <span className="texto">
                O Morada do Porto Residencial é o porto seguro da sua<br />
                vida e da sua família! <br />
                Ele une <strong>tranquilidade e diversão</strong> em duas opções com<br />
                suíte e varanda.<br />
                Localizado em <strong>Americana</strong>, foi pensado para proporcionar <br />
                <strong>bem-estar</strong> e levar a sensação de <strong>viver ao livre</strong>.<br />
                Os apartamentos são uma extensão do que você considera <br />
                essencial para <strong>morar bem</strong> e, para potencializar a <strong>qualidade <br />
                de vida</strong> que você e sua família buscam, a <strong>área de lazer</strong> tem<br />
                <strong>espaços para as crianças</strong>, para atividades de <strong>convívio social</strong><br />
                e para <strong>prática de exercícios</strong>. <br />
                Tudo isso próximo a supermercado, diversos comércios<br />
                e parques.
              </span>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="image-side my-5">
          </div>
        </Fade>
        <Fade left>
          <div className="box-empreendimento">
            <span className="d-flex texto-empreendimento">Dados do Empreendimento:</span>
            <div className="d-flex flex-row	">
              <div className="icones-empreendimentos my-5">
                <div className="icones">
                  <img className="" src={area} alt="" />
                  68,29 m²
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  3 dormitórios sendo 1 suíte
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  53,38 m²
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  2 dormitórios sendo 1 suíte
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  Varanda
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Laje técnica para ar-condicionado
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  1 vaga de garagem por apartamento
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Edifício-garagem
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Quadra poliesportiva
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Quadras de futebol Society
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Piscina adulto com raia
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  Piscina infantil
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Quiosques
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Churrasqueiras
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Playgrounds
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Salão de festas
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Portaria 24h
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Content>
    </ScrollableAnchor>
  );
}

export default EmpreendimentoMorada;
