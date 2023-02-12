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
      <Content className="w-full row justify-content-end">

        <Fade left>
          <div className="left-side">
            <div className="flex">
              <span className="title">Venha fazer uma visita</span><p />
              <span className="texto">
                R. Três, 3246 - Vila Operaria, Rio Claro - SP, 13504-112
              </span>
            </div>
            {isMobile ?
              <div className="icones-empreendimentos">
                <div className="icones">
                  <a target="_blank" href='https://www.google.com/maps/place/Front+Lake+Condominium+Club/@-22.3915143,-47.5707766,17z/data=!3m1!4b1!4m6!3m5!1s0x94c7db08e2a18221:0xd36114b5dcc4289e!8m2!3d-22.3915193!4d-47.5665494!16s%2Fg%2F11g0h_16gs'>
                    <img className="" src={map} />
                  </a>
                </div>
                <div className="icone_whatsapp">
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=5519996965525&text=Gostaria de falar com um consultor?">
                    <img className="" src={whatsapp} alt="Whatsapp" />
                  </a>
                </div>
              </div>
              :
              <div className="icones-empreendimentos">
                <div className="icones">
                  <a target="_blank" href='https://www.google.com/maps/place/Front+Lake+Condominium+Club/@-22.3915143,-47.5707766,17z/data=!3m1!4b1!4m6!3m5!1s0x94c7db08e2a18221:0xd36114b5dcc4289e!8m2!3d-22.3915193!4d-47.5665494!16s%2Fg%2F11g0h_16gs'>
                    <img className="" src={map} />
                  </a>
                </div>
                <div className="icone_whatsapp">
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=5519996965525&text=Gostaria de falar com um consultor?">
                    <img className="" src={whatsapp} alt="Whatsapp" />
                  </a>
                </div>
              </div>
            }
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
