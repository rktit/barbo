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
      <Content className="w-full row">

        <Fade left>
          <div className="left-side">
            <div className="flex">
              <span className="title">Venha fazer uma visita</span><p />
              <span className="texto">
                Av. 3, Entre As Ruas 19 E 20, Rio Claro - SP
              </span>
            </div>
            {isMobile ?

              <div className="icones-empreendimentos">
                <div className="icones">
                  <a target="_blank" href='https://www.google.com/maps/place/Office+Tower/@-22.4153557,-47.5755905,17z/data=!3m1!4b1!4m6!3m5!1s0x94c7dafa714d3e65:0x3df0051cf45860b7!8m2!3d-22.4153607!4d-47.5734018!16s%2Fg%2F11c5rx0b33'>
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
                  <a target="_blank" href='https://www.google.com/maps/place/Office+Tower/@-22.4153557,-47.5755905,17z/data=!3m1!4b1!4m6!3m5!1s0x94c7dafa714d3e65:0x3df0051cf45860b7!8m2!3d-22.4153607!4d-47.5734018!16s%2Fg%2F11c5rx0b33'>
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
            <a target="_blank" href='https://www.google.com/maps/place/Office+Tower/@-22.4153557,-47.5755905,17z/data=!3m1!4b1!4m6!3m5!1s0x94c7dafa714d3e65:0x3df0051cf45860b7!8m2!3d-22.4153607!4d-47.5734018!16s%2Fg%2F11c5rx0b33'>
            </a>
          </div>
        </Fade>
      </Content>
    </ScrollableAnchor>
  );
}

export default Mapa;
