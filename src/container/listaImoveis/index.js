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


import CardLs from "components/cardLs";
import ScrollableAnchor from "react-scrollable-anchor";

function ListaTratores() {

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
        <div className="title ">Os melhores imóveis estão aqui</div>
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
              <CardLs image={serieR} 
                title="Nome do Empreendimento"
                text="São Paulo | Vila Mariano  
                      Área privativa de 253 m² 
                      2 suítes"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={serieH} 
                title="Nome do Empreendimento"
                text="São Paulo | Vila Mariano  
                      Área privativa de 253 m² 
                      2 suítes"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={serieH} 
                title="Nome do Empreendimento"
                text="São Paulo | Vila Mariano  
                      Área privativa de 253 m² 
                      2 suítes"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={serieH} 
                title="Nome do Empreendimento"
                text="São Paulo | Vila Mariano  
                      Área privativa de 253 m² 
                      2 suítes"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={serieH} 
                title="Nome do Empreendimento"
               text="São Paulo | Vila Mariano  
                     Área privativa de 253 m² 
                     2 suítes"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={serieH} 
                title="Nome do Empreendimento"
               text="São Paulo | Vila Mariano  
                     Área privativa de 253 m² 
                     2 suítes"/>
            </SplideSlide>
          </Splide>

          :
          <div className="maquinas">
            <CardLs image={serieR} 
              title="Nome do Empreendimento"
              text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            <CardLs image={serieH} 
              title="Nome do Empreendimento"
              text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            <CardLs image={seriePlus} title="Série Plus"
              text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            <CardLs image={serieU} 
              title="Nome do Empreendimento"
              text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            <CardLs image={serieG} 
              title="Nome do Empreendimento"
              text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            <CardLs image={serieMT} 
              title="Nome do Empreendimento"
              text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
          </div>
        }
      </Content>
    </ScrollableAnchor>
  );
}

export default ListaTratores;
