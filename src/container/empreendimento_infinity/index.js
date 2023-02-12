import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import shower from "images/empreendimento_interna/shower.png";
import area from "images/empreendimento_interna/area.png";
import doubleBed from "images/empreendimento_interna/double-bed.png";
import garage from "images/empreendimento_interna/garage.png";

function EmpreendimentoInfinity(props) {

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
              <span className="title">INFINITY RESIDENCIAL</span><p />
              <span className="texto">
                <strong>Conforto e sofisticação!</strong> <p />
                Os<strong> apartamentos de alto padrão </strong>com 151 m² unem o<strong> luxo </strong>
                <br />à comodidade, beleza e diversão em suas <strong>4 suítes,<br /> 
                varanda gourmet</strong>e ambientes cheios de requinte.<br />
                Para dar um toque a mais, <strong>a área de lazer</strong> do residencial<br />
                possui estrutura completa e diferenciada e os moradores<br /> 
                contam com <strong>segurança 24h</strong>.
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
                  151,01m²
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  4 suítes
                </div>
                <div className="icones">
                  <img className="" src={garage} alt="" />
                  Sendo 1 suíte master
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  Apartamentos c/ 3 ou 4 vagas de garagem
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  vagas para moto
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  4 apartamentos por andar
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones">
                  <img className="" src={garage} alt="" />
                  Espaço fitness
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Salão de festas infantil
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Cinema
                </div>
                <div className="icones">
                  <img className="" src={garage} alt="" />
                  2 salões de jogos
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  Bar/Pub
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Brinquedoteca
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Saunas masculina/feminina
                </div>
                <div className="icones">
                  <img className="" src={garage} alt="" />
                  Vestiários masculina/feminina
                </div>
                <div className="icones">
                  <img className="" src={garage} alt="" />
                  Portaria 24h
                </div>

                <div className="icones">
                  <img className="" src={area} alt="" />
                  piscina adulta  e infantil
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Área ténica com entrada de gás e lixeiras
                </div>
                <div className="icones">
                  <img className="" src={garage} alt="" />
                  Bicicletário
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Playground (área descoberta)
                </div>
                <div className="icones">
                  <img className="" src={garage} alt="" />
                  Quadra poliesportiva (área descoberta)                 
                  </div>
                <div className="icones">
                  <img className="" src={garage} alt="" />
                  Fitness (área descoberta)
                </div>

                <div className="icones">
                  <img className="" src={area} alt="" />
                  Pista de cooper                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Área de permanência com pergolado
                </div>
                <div className="icones">
                  <img className="" src={garage} alt="" />
                  Área de estar próxima à piscina
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Content>
    </ScrollableAnchor>
  );
}

export default EmpreendimentoInfinity;
