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
    <ScrollableAnchor id="">
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
                <a target="_blank" href='https://www.google.com/maps/place/Barbo+Empreendimentos/@-22.425263,-47.5618185,17z/data=!3m1!4b1!4m6!3m5!1s0x94c7dba75cdfb1ff:0x1aa0d91b03209f5f!8m2!3d-22.425268!4d-47.5596298!16s%2Fg%2F11j21cf130'>
                  <img className="" src={map} />
                </a>
              </div>
              <div className="icone_whatsapp">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5519996965525&text=Gostaria de falar com um consultor?">
                  <img className="" src={whatsapp} alt="Whatsapp" />
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
