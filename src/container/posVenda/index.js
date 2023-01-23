import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import assistencia from "images/icons/assistencia.png";
import pecas from "images/icons/pecas.png";
import atendimento from "images/icons/atendimento_campo.png";
import funcionarios from "images/statics/cumprimento.jpg";
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
            <div className="conteudo col-12">
              <div className="title1 row">Pós-Venda</div>
              <div className="texto row">
                Mais do que atender, nossa missão é entender a real necessidade de cada cliente e acompanhar as etapas de evolução. 
                Todos os nossos profissionais possuem a essência de prestar o melhor atendimento aos nossos clientes, memdo que em campo. 
                Nossa metodologia prioriza o conhecimento e a qualificação de forma prática e eficiente.
              </div>
              <div className="icones mt-3 row">
                <div><img className="mr-2" src={assistencia} alt="garantia"/></div>
                <div className="col-10 mt-md-2">Assistência Técnica Especializada Master</div>
              </div>
              <div className="icones row mt-4">
                <div><img className="mr-2" src={pecas} alt="assistencia"/></div>
                <div className="col-10 mt-md-2">Peças Originais</div>
              </div>
              <div className="icones row mt-4 mb-md-4">
                <div><img className="mr-2" src={atendimento} alt="serviço"/></div>
                <div className="col-10 mt-md-2">Atendimento Eficaz no Campo</div>
              </div>
              <div className="row">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?" className="shadow btn mb-4 d-flex align-items-center">
                  Entre em contato
                </a>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?">
                  <img className="icone_whatsapp mr-1" src={icone_whatsapp_fundo} alt="Whatsapp"/>
                </a>
              </div>
            </div>
            {/* <span className="title1">Pós-Venda</span><br/> */}
            {/* <span className="texto">Mais do que atender, nossa missão é entender a real necessidade de cada cliente e acompanhar as etapas de evolução. 
            Todos os nossos profissionais possuem a essência de prestar o melhor atendimento aos nossos clientes, memdo que em campo. 
            Nossa metodologia prioriza o conhecimento e a qualificação de forma prática e eficiente.
            </span> */}
            {/* <div className="icones mt-3 row">
              <div><img className="mr-2" src={assistencia} alt="garantia"/></div>
              <div className="col-8">Assistência Técnica Especializada Master</div>
            </div>
            <div className="icones row mt-4">
              <div><img className="mr-2" src={pecas} alt="assistencia"/></div>
              <div className="col-8">Peças Originais</div>
            </div>
            <div className="icones row mt-4">
            <div><img className="mr-2" src={atendimento} alt="serviço"/></div>
              <div className="col-8">Atendimento Eficaz no Campo</div>
            </div>
            <div className="row">
              <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?" className="shadow btn mb-4 d-flex align-items-center">
                Entre em contato
              </a>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?">
                <img className="icone_whatsapp mr-1" src={icone_whatsapp_fundo} alt="Whatsapp"/>
              </a>
            </div> */}
          </div>
        </Fade>
        <Fade right>
          <div className="right-side col-12 col-md-5 p-0">
            <img className="funcionarios" src={funcionarios} alt="funcionarios yanmar"/>
          </div>
        </Fade>
        
      </Content>
    </ScrollableAnchor>
  );
}

export default PosVenda;
