import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import juros from "images/icons/icone-juros.png";
import icone_whatsapp_fundo from "images/icons/icone-whatsapp-fundo.png";



function Forrmulario(props) {

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
      <Content className="w-full row justify-content-center">

        <Fade left>
          <div className="left-side">
            {isMobile ? ""
              :
              <div className=""></div>
            }
            <div className="flex">
              <span className="title">Venha fazer uma visita</span><p />
              <span className="texto">
                Nome da rua, 000, bairro, Cidade - SP
              </span>
            </div>
            <div className="icones-empreendimentos">
              <div className="icones">
                <img className="" src={juros} alt="garantia" />
              </div>
              <div className="icones">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?">
                  <img className="icone_whatsapp" src={icone_whatsapp_fundo} alt="Whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="image-side">
          </div>
        </Fade>
      </Content>
    </ScrollableAnchor>
  );
}

export default Forrmulario;
