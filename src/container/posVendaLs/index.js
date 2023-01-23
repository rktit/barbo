import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import assistencia from "images/icons/assistenciaLs.png";
import pecas from "images/icons/pecasLs.png";
import garantia from "images/icons/garantiaLs.png";
import icone_whatsapp_fundo from "images/icons/icone-whatsapp-fundo.png";
import { Button } from "react-bootstrap";

function PosVenda(props) {

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
      if (window.innerWidth >= 992) {
              setMobile(false);
      } else {
              setMobile(true);
      }
  }, [window.innerWidth]);

  return (
    <ScrollableAnchor id="pos_vendas">
      <Content className="col-12 row justify-content-center">
        <Fade left>
          <div className="left-side col-11 col-md-5 mt-5">
            {isMobile ? ""
            :
            <div className="demarcador"></div>
            }
            <span className="title1">Pós-Venda</span><br/>
            <span className="texto">Mais do que atender, nossa missão é entender a real necessidade de cada 
            cliente e acompanhar as etapas de evolução. Todos os nossos profissionais possuem a essência de 
            prestar o melhor atendimento aos nossos clientes, mesmo que em campo. Nossa metodologia prioriza 
            o conhecimento e a qualificação de forma prática e eficiente.
            </span>
            <div className="icones mt-3">
              <img className="mr-2" src={assistencia} alt="assistencia"/>
              Assistência Técnica Especializada
            </div>
            <div className="icones">
              <img className="mr-2" src={garantia} alt="garantia"/>
              2 anos de Garantia
            </div>
            <div className="icones">
              <img className="mr-2" src={pecas} alt="pecas"/>
              Reposição de Peças Originais
            </div>
            <div className="row">
              <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?" className="botao shadow btn mb-4 d-flex align-items-center justify-content-center">
                Entre em contato
              </a>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?">
                <img className="icone_whatsapp mr-1" src={icone_whatsapp_fundo} alt="Whatsapp"/>
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="image-side col-12 col-md-5">
            {/* <img className="funcionarios" src={imgPosVenda} alt="pós venda"/> */}
          </div>
        </Fade>
        
      </Content>
    </ScrollableAnchor>
  );
}

export default PosVenda;
