import React, { useState, useEffect } from "react";
import Content from "./style";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';


import higienopolis from "images/home/higienopolis.png";
import lasrocas from "images/home/lasrocas.png";
import moradadoporto from "images/home/moradadoporto.png";
import villareal from "images/home/villareal.png";


import CardLs from "components/cardLs";
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
        <div className="title ">Os melhores imóveis estão aqui</div>
        {isMobile ?
          <Splide className="splide col-12" options={{
            rewind: true,
            width: "auto",
            gap: '2rem',
            perPage: 1,
            pagination: false,
            arrows: true,
          }}>
            <SplideSlide className="slide">
              <CardLs image={higienopolis}
                title=""
                text=""/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={lasrocas}
                title=""
                text=""/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={moradadoporto}
                title=""
                text=""/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={villareal}
                title=""
                text=""/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={higienopolis}
                title=""
                text=""/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={lasrocas}
                title=""
                text=""/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={moradadoporto}
                title=""
                text=""/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={villareal}
                title=""
                text=""/>
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
              <div className="row">
                <CardLs image={higienopolis}
                  title=""
                  text=""/>
                <CardLs image={lasrocas}
                  title=""
                  text=""/>
                <CardLs image={moradadoporto}
                  title=""
                  text=""/>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="row">
                <CardLs image={villareal}
                  title=""
                  text=""/>
                <CardLs image={higienopolis}
                  title=""
                  text=""/>
                <CardLs image={lasrocas}
                  title=""
                  text=""/>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="row">
                <CardLs image={moradadoporto}
                  title=""
                  text=""/>
                <CardLs image={villareal}
                  title=""
                  text=""/>
                <CardLs image={higienopolis}
                  title=""
                  text=""/>
              </div>
            </SplideSlide>
          </Splide>
        }
      </Content>
    </ScrollableAnchor >
  );
}

export default ListaImoveis;
