import React, {useState, useEffect} from "react";
import Content from "./style";

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

import serieR from "images/statics/tratores/serieR.png";
import serieH from "images/statics/tratores/serieH.png";
import seriePlus from "images/statics/tratores/seriePlus.png";
import serieU from "images/statics/tratores/serieU.png";
import serieG from "images/statics/tratores/serieG.png";
import serieMT from "images/statics/tratores/serieMT.png";


import panorama from "images/statics/360.jpg";
import ScrollableAnchor from "react-scrollable-anchor";

import banner from "images/banner/banner-lista-ls.png";
import bannerMobile from "images/banner/BannerJSMobile.png";

function ListaTratores() {

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

export default ListaTratores;
