import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import shower from "images/empreendimento_interna/shower.png";
import area from "images/empreendimento_interna/area.png";
import doubleBed from "images/empreendimento_interna/double-bed.png";
import garage from "images/empreendimento_interna/garage.png";

function EmpreendimentoQuinta(props) {

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
              <span className="title">LOTEAMENTO QUINTA DO VALE</span><p />
              <span className="texto">

                O Loteamento Quinta do Vale é uma excelente escolha para<br />
                quem quer <strong>investir ou construir</strong> em <strong>Barra Bonita</strong>, no interior<br />
                de São Paulo e <strong>estância turística</strong>. <br />
                Localizado <strong>próximo ao Jardim das Orquídeas</strong>, oferece <strong>fácil <br />
                  acesso</strong> a outros pontos da cidade, como a Orla Turística. <br />
                Além disso, para as <strong>necessidades do dia a dia</strong>, o loteamento <br />
                está situado perto da Avenida Pedro Ometto e a supermercados, <br />
                academia e outros comércios que são essenciais para quem quer<br />
                <strong>tranquilidade</strong> quando <strong>idealiza seu lar dos sonhos</strong>.
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
                  - 5 lotes de 170 m² a 200 m²
                </div>
                <div className="icones pr-2">
                  <img className="" src={area} alt="" />
                  - 257 lotes de 205 m² a 250 m²
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  - 30 lotes de 251 m² a 299 m
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  - 81 lotes de 300 m² a 315 m²
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  - 5 lotes de 315 m² a 403,77 m²
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  - Infraestrutura completa
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  - Guias e sarjetas
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  - Pavimentação asfáltica
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  - Arborização
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  - Poço artesiano e caixa d’água próprios
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Content>
    </ScrollableAnchor>
  );
}

export default EmpreendimentoQuinta;
