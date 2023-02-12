import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import shower from "images/empreendimento_interna/shower.png";
import area from "images/empreendimento_interna/area.png";
import doubleBed from "images/empreendimento_interna/double-bed.png";
import garage from "images/empreendimento_interna/garage.png";

function EmpreendimentoHigienopolis(props) {

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
              <span className="title">HIGIENÓPOLIS EDIFÍCIO</span><p />
              <span className="texto">
                <strong>Qualidade de vida, bem-estar</strong> e <strong>facilidade no dia a dia</strong>.<br />
                O Higienópolis Edifício proporciona os benefícios<br />
                que todo morador espera ao adquirir o
                <strong> lar dos sonhos</strong>.<br />
                Localizado em <strong>Piracicaba</strong>, o <strong>empreendimento </strong> foi <strong><br />
                  construído em uma região privilegiada da cidade</strong>, <br />
                próximo a comércios, bancos, escolas, hospitais e mercados.<br />
                A <strong>área de lazer</strong> foi pensada para oferecer<br />
                <strong>momentos especiais</strong> com amigos, para a <strong><br />
                  prática de exercícios</strong> e para o <strong>cuidado da mulher</strong>.<br />
                Os <strong>confortáveis apartamentos</strong> de mais de 88 m² com <strong><br />
                  varanda gourmet com churrasqueira</strong> estão prontos<br />
                esperando por você e sua família.
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
                  88,42m²
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  03 dormitórios sendo 01 suíte
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  Sala 02 ambientes                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Varanda gourmet com churrasqueira
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  02 vagas na garagem
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  02 elevadores sendo 01 social e 01 de serviço
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Playground                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Sala de Jogos                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Salão de festas                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  Entregue completo com pisos e revestimentos
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Content>
    </ScrollableAnchor>
  );
}

export default EmpreendimentoHigienopolis;
