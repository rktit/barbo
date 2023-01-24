import React, {useState, useEffect} from "react";
import Content from "./style";

import panorama from "images/empreendimento/360-panorama.png";
import ScrollableAnchor from "react-scrollable-anchor";

import banner from "images/banner/banner-lista-ls.png";
import bannerMobile from "images/banner/BannerJSMobile.png";

function Plantas() {

  const [isMobile, setMobile] = useState(false);
  const [img, setImagem] = useState(null);

  useEffect(() => {
      if (window.innerWidth >= 992) {
              setMobile(false);
              setImagem(banner);
      } else {
              setMobile(true);
              setImagem(bannerMobile);
      }
  }, [window.innerWidth]);


  return (
    <ScrollableAnchor id="maquinas">
      <Content className="col-12 d-flex flex-column align-items-center py-10">
        <div className="fotos ">
        Tour 360°
        </div>
       <a-scene>
        <a-assets>
            <img id="panorama" src={panorama}/>
        </a-assets>
        <a-sky src="#panorama" rotation="0 -130 0"></a-sky>
    </a-scene>
      </Content>
      </ScrollableAnchor>
  );
}

export default Plantas;
