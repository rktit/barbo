import React, { useState, useEffect } from "react";
import Content from "./style";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';


import higienopolis from "images/home/higienopolis.png";
import lasrocas from "images/home/lasrocas.png";
import moradadoporto from "images/home/moradadoporto.png";
import villareal from "images/home/villareal.png";


import CardHIG from "components/cardHig";
import CardLR from "components/cardLR";
import CardMP from "components/cardMP";
import CardVR from "components/cardVR";

import ScrollableAnchor from "react-scrollable-anchor";

function ListaImoveis() {

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
    <ScrollableAnchor id="">
      <Content className="col-12 d-flex flex-column align-items-center p-0">
        <div className="title ">Encontre um imóvel Barbo perto de você!</div>
        {isMobile ?
          <Splide className="splide col-12" options={{
            rewind: false,
            width: "auto",
            gap: '2rem',
            perPage: 1,
            pagination: false,
            arrows: false,
          }}>
            <SplideSlide className="slide">
              <CardHIG image={higienopolis}
                title=""
                text="" />

              <CardLR image={lasrocas}
                title=""
                text="" />
            </SplideSlide>
            <SplideSlide className="slide">

              <CardMP image={moradadoporto}
                title=""
                text="" />
              <CardVR image={villareal}
                title=""
                text="" />

            </SplideSlide>
          </Splide>
          :
          <Splide className="col-8" options={{
            rewind: true,
            width: "100%",
            gap: '1.5rem',
            perPage: 1,
            pagination: true
          }}>
            <SplideSlide>
              <div className="row slide">
                <CardHIG image={higienopolis}
                  title=""
                  text="" />
                <CardLR image={lasrocas}
                  title=""
                  text="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="row slide">
                <CardMP image={moradadoporto}
                  title=""
                  text="" />
                <CardVR image={villareal}
                  title=""
                  text="" />
              </div>
            </SplideSlide>
          </Splide>
        }
      </Content>
    </ScrollableAnchor >
  );
}

export default ListaImoveis;
