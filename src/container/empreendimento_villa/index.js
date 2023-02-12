import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import shower from "images/empreendimento_interna/shower.png";
import area from "images/empreendimento_interna/area.png";
import doubleBed from "images/empreendimento_interna/double-bed.png";
import garage from "images/empreendimento_interna/garage.png";

function EmpreendimentoVilla(props) {

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
              <span className="title">VILLA REAL RESIDENCIAL</span><p />
              <span className="texto">
                Um residencial para <strong>tornar real o seu sonho</strong>, com a <br />
                <strong>infraestrutura que você e a sua família merecem</strong>. <br />
                Localizado na <strong>área nobre de Americana</strong>, está em um <br />
                ponto estratégico da cidade, próximo a mercados e <br />
                comércios variados que irão <strong>facilitar o seu dia a dia</strong>. <br />
                No Villa Real Residencial, você pode desfrutar de todo <br />
                o <strong>conforto</strong> em <strong>apartamentos com varanda e ambientes <br />
                  integrados</strong>, além de <strong>segurança 24h</strong>. <br />
                O <strong>empreendimento</strong> ainda tem uma <strong>área de lazer completa</strong> <br />
                para crianças e para o reunir família e amigos, <br />
                <strong>proporcionando qualidade de vida</strong> aos moradores.
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
                  58,19 m²
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  2 dormitórios
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Banheiro social
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  Varanda
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Sala de esta/jantar
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Cozinha com área de serviço
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Pisos e revestimentos entregues
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  1 vaga de garagem por apartamento
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  4 apartamentos por andar
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  2 elevadores (1 social e 1 de serviço)
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  Playground
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Quadra poliesportiva
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Salão de festas
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Vestiários
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Total acessibilidade
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

export default EmpreendimentoVilla;
