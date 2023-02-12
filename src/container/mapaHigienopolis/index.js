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
                Travessa Piauí, 60, Bairro Higienópolis, Piracicaba - SP
              </span>
            </div>
            {isMobile ?
              <div className="icones-empreendimentos">
                <div className="icones">
                  <a target="_blank" href='https://www.google.com/maps/place/Edif%C3%ADcio+Higien%C3%B3polis/@-22.7432243,-47.6458528,17z/data=!4m15!1m8!3m7!1s0x94c6305645329993:0x9af384699cee0332!2sTv.+Piau%C3%AD,+60+-+Higien%C3%B3polis,+Piracicaba+-+SP,+13424-345!3b1!8m2!3d-22.7432293!4d-47.6436641!16s%2Fg%2F11h_f5zxk6!3m5!1s0x94c6319744817313:0x9990acd3d8df6119!8m2!3d-22.7432355!4d-47.6436698!16s%2Fg%2F11fn527x8z'>
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
                  <a target="_blank" href='https://www.google.com/maps/place/Edif%C3%ADcio+Higien%C3%B3polis/@-22.7432243,-47.6458528,17z/data=!4m15!1m8!3m7!1s0x94c6305645329993:0x9af384699cee0332!2sTv.+Piau%C3%AD,+60+-+Higien%C3%B3polis,+Piracicaba+-+SP,+13424-345!3b1!8m2!3d-22.7432293!4d-47.6436641!16s%2Fg%2F11h_f5zxk6!3m5!1s0x94c6319744817313:0x9990acd3d8df6119!8m2!3d-22.7432355!4d-47.6436698!16s%2Fg%2F11fn527x8z'>
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
