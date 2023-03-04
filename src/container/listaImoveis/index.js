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
              <CardLR image={lasrocas}
                title="Las Rocas"
                text="Piracicaba | Piracicamirim
                Área privativa de 55 m²" />
              <CardHIG image={higienopolis}
                title="Higienópolis"
                text="Piracicaba | Higienópolis
                Área privativa de 88 m²" />

            </SplideSlide>
            <SplideSlide className="slide">

              <CardMP image={moradadoporto}
                title="Morada do Porto"
                text="Americana | Terramérica
                Área privativa de 53m² e 68 m²" />
              <CardVR image={villareal}
                title="Villa Rea"
                text="Americana | Jardim Bela Vista
                Área privativa de 58 m²" />

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
                <CardLR image={lasrocas}
                  title="Las Rocas"
                  text="Piracicaba | Piracicamirim
                  Área privativa de 55 m²" />
                <CardHIG image={higienopolis}
                  title="Higienópolis"
                  text="Piracicaba | Higienópolis
                  Área privativa de 88 m²" />
                <CardMP image={moradadoporto}
                  title="Morada do Porto"
                  text="Americana | Terramérica
                  Área privativa de 53m² e 68 m²" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="row slide">
                <CardVR image={villareal}
                  title="Villa Real"
                  text="Americana | Jardim Bela Vista
                  Área privativa de 58 m²" />
              </div>
            </SplideSlide>
          </Splide>
        }
      </Content>
    </ScrollableAnchor >
  );
}

export default ListaImoveis;
