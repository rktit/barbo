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
                R. Atílio Cervati, Barra Bonita - SP | 17340-000
              </span>
            </div>
            {isMobile ?

              <div className="icones-empreendimentos">
                <div className="icones">
                  <a target="_blank" href='https://www.google.com/maps/place/Loteamento+Quinta+do+Vale/@-22.4924855,-48.5445396,17z/data=!3m1!4b1!4m6!3m5!1s0x94c745525df97eeb:0xc9a9b386928fc2ae!8m2!3d-22.4924905!4d-48.5423509!16s%2Fg%2F11s0zs7ggx'>
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
                  <a target="_blank" href='https://www.google.com/maps/place/Loteamento+Quinta+do+Vale/@-22.4924855,-48.5445396,17z/data=!3m1!4b1!4m6!3m5!1s0x94c745525df97eeb:0xc9a9b386928fc2ae!8m2!3d-22.4924905!4d-48.5423509!16s%2Fg%2F11s0zs7ggx'>
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
