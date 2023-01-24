import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import map from "images/empreendimento/map.png";
import whatsapp from "images/empreendimento/whatsapp.png";



function Mapa(props) {

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
                <img className="" src={map} alt="garantia" />
              </div>
              <div className="icones">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?">
                  <img className="icone_whatsapp" src={whatsapp} alt="Whatsapp" />
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

export default Mapa;
