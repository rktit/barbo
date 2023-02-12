import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import shower from "images/empreendimento_interna/shower.png";
import area from "images/empreendimento_interna/area.png";
import doubleBed from "images/empreendimento_interna/double-bed.png";
import garage from "images/empreendimento_interna/garage.png";

function EmpreendimentoOffice(props) {

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
              <span className="title">Office Tower Rio Claro</span><p />
              <span className="texto">
                O Office Tower Rio Claro é um prédio corporativo no interior<br />
                de São Paulo com toda a tecnologia e modernidade dos grandes<br />
                prédios empresariais das grandes capitais.<br />
                Com salas individuais ou lajes corporativas, foi projetado<br />
                pensando no que é melhor para as empresas e profissionais que<br />
                precisam estar conectados com o mundo.<br />
                Por isso, investimos em um empreendimento de qualidade e com<br />
                todas as soluções para os muitos profissionais que já se<br />
                instalaram no Office Tower.<br />
                Com presença marcante, tornou-se referência na Avenida Tancredo <br />
                Neves, uma área com muitos comércios, bancos e escolas. <br />
                Além disso, o edifício conta com espaços comercializáveis para<br />
                serviços, cafés, lanchonetes e conveniência.
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
                  Salas Individuais Ou Lajes Corporativas
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  117 Unidades Tipo 1 (43,66 M²)
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  30 Unidades Tipo 1a (42,06 M²)
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  58 Unidades Tipo 2 (49,94 M²)
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Banheiro Privativo
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Varanda Ténica Com Infra Para Ar Tipo Split
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  5 Elevadores sendo 3 Panorâmicos
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  1 Vaga De Estacionamento
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  2 Subsolos Com Vagas De Aumotomóveis E Motocicletas
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Estacionamento Rotativo Com Manobristas (Sistema Vallet Parking)
                </div>
                <div className="icones">
                  <img className="" src={shower} alt="" />
                  Lobby Com Pé Direito Duplo
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Recepção/Portaria Inteligente
                </div>
              </div>
              <div className="icones-empreendimentos my-5">
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Sistema De Controle De Acesso Com Catracas Eletrônicas
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Infraestrutura De Telefonia E Redes De Alto Desempenho
                </div>
                <div className="icones pr-2">
                  <img className="" src={garage} alt="" />
                  Gerador De Energia
                </div>
                <div className="icones">
                  <img className="" src={area} alt="" />
                  Total Acessibilidade
                </div>
                <div className="icones">
                  <img className="" src={doubleBed} alt="" />
                  Espaços Térreos Comercializáveis Para<br/>
                  Cafeterias/Lanchonete e Bureau De Serviços
                </div>
              </div>

            </div>
          </div>
        </Fade>
      </Content>
    </ScrollableAnchor>
  );
}

export default EmpreendimentoOffice;
