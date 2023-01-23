import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";


import pecas from "images/statics/pecas.jpg";
import icone_whatsapp_fundo from "images/icons/icone-whatsapp-fundo.png";
import { Button } from "react-bootstrap";

function Pecas(props) {

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
      if (window.innerWidth >= 992) {
              setMobile(false);
      } else {
              setMobile(true);
      }
  }, [window.innerWidth]);

  return (
    <ScrollableAnchor id="assistencia_tecnica">
      <Content>
        {isMobile ? ""
        :
        <div className="demarcador"></div>
        }
        <div className="title">Peças</div>
        <div className="conteudo col-12 row justify-content-center">
          <Fade Left>
            <div className="right-side col-12 col-md-5">
              <img className="pecas" src={pecas} alt="peças jacto"/>
            </div>
          </Fade>
          <Fade Right>
            <div className="left-side col-12 col-md-5 ">
              <div className="texto">Peças originais são as chaves da longevidade<br/>
                da sua máquina, a forma mais eficaz de <br/>
                manter tudo funcionando em perfeito estado.<br/>
                Sempre use peças de reposição originais para <br/>
                obter a melhor produtividade e confiabilidade <br/>
                do seu trator. A Terrazul conta com um <br/>
                estoque exclusivo, pronto para fornecer a <br/>
                melhor solução. Somos revendedor Master Jacto.
              </div>
              <div className="row">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?" className="shadow btn mb-4 d-flex align-items-center">
                  Solicitar Orçamento
                </a>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?">
                  <img className="icone_whatsapp mr-1" src={icone_whatsapp_fundo} alt="Whatsapp"/>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </Content>
    </ScrollableAnchor>
  );
}

export default Pecas;
