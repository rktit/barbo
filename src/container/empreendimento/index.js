import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import shower from "images/empreendimento_interna/shower.png";
import area from "images/empreendimento_interna/area.png";
import doubleBed from "images/empreendimento_interna/double-bed.png";
import garage from "images/empreendimento_interna/garage.png";
import Empreendimentos from "pages/empreendimentos";

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
    <ScrollableAnchor id="_tecnica">
      <Content className="col-12 row justify-content-center">

        <Fade left>
          <div className="left-side mt-5">
            {/* {isMobile ? ""
              : */}
            <div className=""></div>
            {/* } */}
            <div className="flex m-5">
              <span className="title">FRONT LAKE CONDOMINIUM CLUB</span><p />
              <span className="texto">
                Com uma <strong>estrutura de alto padrão completa</strong>,<br />
                o Front Lake Condominium Club está localizado<br /> 
                em uma <strong>área privilegiada de Rio Claro</strong> : em frente ao<br />
                Lago Azul, no bairro Vila Operária.<br /> 
                O condomínio tem opções para as crianças,<br /> 
                exercícios, jogos e festas, tudo para trazer uma<br /> 
                experiência única de  <strong>lazer, conforto e bem-estar<br /> 
                para você e sua família.</strong>
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
                  94m²
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  3 dormitórios sendo 1 suíte
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Varanda com churrasqueira
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  Suporta até 4 pontos de ar-condicionado
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Planta adaptável
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  4 apartamentos por andar
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  3 elevadores (2sociais e de serviço)
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  2 vagas de garagem em subsolos
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Espaço fitness completo
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  salão de jogos adulto e infantil
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  piscina adulto e infantil e raia de 20m
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  2 saúnas / vestiários
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  2 salões de festas
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  4 quiosques com churrasqueiras
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  2 quadras poliesportivas
                </div>

                <div className="icones">
                  <img className="" src={area} alt="" />
                  2 espaços kids
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  10 vagas pne em subsolos
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  16 vags de visitantes em subsolos </div>
              </div>
            </div>
          </div>
        </Fade>
      </Content>
    </ScrollableAnchor>
  );
}

export default Empreendimento;
