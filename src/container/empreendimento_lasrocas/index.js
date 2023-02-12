import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import shower from "images/empreendimento_interna/shower.png";
import area from "images/empreendimento_interna/area.png";
import doubleBed from "images/empreendimento_interna/double-bed.png";
import garage from "images/empreendimento_interna/garage.png";

function EmpreendimentoLasrocas(props) {

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
              <span className="title">LAS ROCAS RESIDENCIAL</span><p />
              <span className="texto">
                Morar com <strong>qualidade</strong> e <strong>comodidade</strong> no que é seu pode <br />
                ser um <strong>sonho realizado</strong>.<br />
                Com <strong>localização privilegiada</strong> em <strong>Piracicaba</strong>, o Las Rocas <br />
                Residencial tem <strong>vista panorâmica</strong> do centro da cidade<br />
                e é um verdadeiro clube de lazer.<br />
                Você e sua família poderão usufruir de um ambiente que <br />
                <strong>valoriza o seu bem-estar</strong>, com <strong>espaços para as crianças,<br />
                  exercícios e convívio social,</strong> e sua <strong>segurança</strong>.<br />
                E, ainda, desfrutam de um <strong>apartamento confortável</strong> de 55 m²<br />
                com <strong>varanda</strong> para os melhores momentos da sua vida.
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
                  55m²
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  2 dormitórios
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  16 torres
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  Banheiro social
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Varanda
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Cozinha com áreade serviço
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Suporta 1 ponto de ar-condicionado
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  1 vaga de garagem
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  4 apartamentos por andar
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  1 elevador por torre
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Espaço fitness
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  Salão de jogos
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Piscina adulto e infantil
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Vestiários
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  2 salões de festas
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  4 churrasqueiras cobertas
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  2 playgrounds
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  1 praça de lazer/jardins
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Entregues com pisos e revestimentos
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Portaria 24h
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  29 vagas de visitantes
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Content>
    </ScrollableAnchor>
  );
}

export default EmpreendimentoLasrocas;
