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
                Av. Padre Oswaldo Vieira de Andrade, n° 1.330 Loteamento Fazenda Jacyra. Americana - SP
              </span>
            </div>
            {isMobile ?
              <div className="icones-empreendimentos">
                <div className="icones">
                  <a target="_blank" href='https://www.google.com/maps/place/Residencial+Morada+do+Porto/@-22.7674794,-47.3568814,16z/data=!4m10!1m2!2m1!1smorada+do+porto++Av.+Padre+Oswaldo+Vieira+de+Andrade,+n%C2%B0+1.330+Loteamento+Fazenda+Jacyra.+Americana+-+SP!3m6!1s0x94c899edd4273949:0x2879b5155c9defd0!8m2!3d-22.7666513!4d-47.3461195!15sCmltb3JhZGEgZG8gcG9ydG8gIEF2LiBQYWRyZSBPc3dhbGRvIFZpZWlyYSBkZSBBbmRyYWRlLCBuwrAgMS4zMzAgTG90ZWFtZW50byBGYXplbmRhIEphY3lyYS4gQW1lcmljYW5hIC0gU1CSARJhcGFydG1lbnRfYnVpbGRpbmfgAQA!16s%2Fg%2F11mj03f5_p'>
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
                  <a target="_blank" href='https://www.google.com/maps/place/Residencial+Morada+do+Porto/@-22.7674794,-47.3568814,16z/data=!4m10!1m2!2m1!1smorada+do+porto++Av.+Padre+Oswaldo+Vieira+de+Andrade,+n%C2%B0+1.330+Loteamento+Fazenda+Jacyra.+Americana+-+SP!3m6!1s0x94c899edd4273949:0x2879b5155c9defd0!8m2!3d-22.7666513!4d-47.3461195!15sCmltb3JhZGEgZG8gcG9ydG8gIEF2LiBQYWRyZSBPc3dhbGRvIFZpZWlyYSBkZSBBbmRyYWRlLCBuwrAgMS4zMzAgTG90ZWFtZW50byBGYXplbmRhIEphY3lyYS4gQW1lcmljYW5hIC0gU1CSARJhcGFydG1lbnRfYnVpbGRpbmfgAQA!16s%2Fg%2F11mj03f5_p'>
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
