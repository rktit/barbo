import React, { useState, useEffect } from "react";
import Content from "./style";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

import serieR from "images/statics/tratores/serieR.png";
import serieH from "images/statics/tratores/serieH.png";
import seriePlus from "images/statics/tratores/seriePlus.png";
import serieU from "images/statics/tratores/serieU.png";
import serieG from "images/statics/tratores/serieG.png";
import serieMT from "images/statics/tratores/serieMT.png";


import Card from "components/card";
import ScrollableAnchor from "react-scrollable-anchor";

function Blog() {

  const [isMobile, setMobile] = useState(false);
  const [img, setImagem] = useState(null);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);


  return (
    <ScrollableAnchor id="maquinas">
      <Content className="col-12 d-flex flex-column align-items-center p-0">
        <div className="title ">Os melhores toques para o seu novo lar.</div>
        {isMobile ?
          <Splide className="splide col-12" options={{
            rewind: true,
            width: "100%",
            gap: '2rem',
            perPage: 1,
            pagination: true,
            arrows: false
          }}>
            <SplideSlide className="slide">
            <Card image={serieR} 
              title="Iluminação"
              text="Para dar um toque mais aconchegante e requintado para os seus espaços"/>
            </SplideSlide>
            <SplideSlide className="slide">
            <Card image={serieH} 
              title="Design Biofilico"
              text="Leve a natureza de forma consciente para o design do seu lar"/>
            </SplideSlide>
            <SplideSlide className="slide">
            <Card image={seriePlus} 
              title="Capriche nas cores"
              text="As paredes dos seus cômodos podem te relaxar ou estimular"/>
            </SplideSlide>
            <SplideSlide className="slide">
            <Card image={serieR} 
              title="Iluminação"
              text="Para dar um toque mais aconchegante e requintado para os seus espaços"/>
            </SplideSlide>
            <SplideSlide className="slide">
            <Card image={serieH} 
              title="Design Biofilico"
              text="Leve a natureza de forma consciente para o design do seu lar"/>
            </SplideSlide>
            <SplideSlide className="slide">
            <Card image={seriePlus} 
              title="Capriche nas cores"
              text="As paredes dos seus cômodos podem te relaxar ou estimular"/>
            </SplideSlide>
          </Splide>

          :
          <div className="maquinas">
            <Card image={serieR} 
              title="Iluminação"
              text="Para dar um toque mais aconchegante e requintado para os seus espaços"/>
            <Card image={serieH} 
              title="Design Biofilico"
              text="Leve a natureza de forma consciente para o design do seu lar"/>
            <Card image={seriePlus} 
              title="Capriche nas cores"
              text="As paredes dos seus cômodos podem te relaxar ou estimular"/>
              <Card image={serieR} 
              title="Iluminação"
              text="Para dar um toque mais aconchegante e requintado para os seus espaços"/>
            <Card image={serieH} 
              title="Design Biofilico"
              text="Leve a natureza de forma consciente para o design do seu lar"/>
            <Card image={seriePlus} 
              title="Capriche nas cores"
              text="As paredes dos seus cômodos podem te relaxar ou estimular"/>
          </div>
        }
      </Content>
    </ScrollableAnchor>
  );
}

export default Blog;
