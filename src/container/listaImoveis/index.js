import React, { useState, useEffect } from "react";
import Content from "./style";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';


import home from "images/home/empreendimento_home.png";
import home1 from "images/home/empreendimento_home1.png";
import home2 from "images/home/empreendimento_home2.png";
import home3 from "images/home/empreendimento_home3.png";
import home4 from "images/home/empreendimento_home4.png";
import home5 from "images/home/empreendimento_home5.png";


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
              <CardLs image={home}
                title="Front Lake"
                text="Rio Claro | Vila Operária
                Área privativa de 94 m²
                3 Dormitórios (1 suíte)"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={home1}
                title="Infinity"
                text="Rio Claro | Cidade Jardim
                Área privativa de 151 m²
                4 Suítes (1 master)"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={home2}
                title="Quinta do Vale"
                text="Barra Bonita | Portal São José da Barra
                Com lotes de 200m² a 400m²"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={home3}
                title="Office Tower"
                text="Rio Claro | Jardim Claret
                Salas - 42,06 m² | 43,66 m² | 49,94 m²
                5 Elevadores (3 panorâmicos)"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={home4}
                title="Las Rocas"
                text="Piracicaba | Piracicamirim
                Área privativa de 55 m²
                2 Dormitórios"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={home5}
                title="Higienópolis"
                text="Piracicaba | Higienópolis
                Área privativa de 88 m²
                3 Dormitórios (1 suíte)"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={home5}
                title="Villa Real"
                text="Americana | Jardim Bela Vista
                Área privativa de 58 m²
                2 Dormitórios "/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardLs image={home5}
                title="Morada do Porto"
                text="Americana | Terramérica
                Área privativa de 53m² e 68 m²
                2 ou 3 Dormitórios (1 Suíte)"/>
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
                <CardLs image={home}
                  title="Front Lake"
                  text="Rio Claro | Vila Operária
                  Área privativa de 94 m²
                  3 Dormitórios (1 suíte)"/>
                <CardLs image={home1}
                  title="Infinity"
                  text="Rio Claro | Cidade Jardim
                 Área privativa de 151 m²
                 4 Suítes (1 master)"/>
                <CardLs image={home2}
                  title="Quinta do Vale"
                  text="Barra Bonita | Portal São José da Barra
                 Com lotes de 200m² a 400m²"/>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="row">
                <CardLs image={home}
                  title="Office Tower"
                  text="Rio Claro | Jardim Claret
                   Salas - 42,06 m² | 43,66 m² | 49,94 m²
                   5 Elevadores (3 panorâmicos)"/>
                <CardLs image={home1}
                  title="Las Rocas"
                  text="Piracicaba | Piracicamirim
                    Área privativa de 55 m²
                    2 Dormitórios"/>
                <CardLs image={home2}
                  title="Higienópolis"
                  text="Piracicaba | Higienópolis
                    Área privativa de 88 m²
                    3 Dormitórios (1 suíte)"/>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="row">
                <CardLs image={home}
                  title="Villa Real"
                  text="Americana | Jardim Bela Vista
                     Área privativa de 58 m²
                     2 Dormitórios "/>
                <CardLs image={home1}
                  title="Las Rocas"
                  text="Piracicaba | Piracicamirim
                    Área privativa de 55 m²
                    2 Dormitórios"/>
                <CardLs image={home2}
                  title="Morada do Porto"
                  text="Americana | Terramérica
                   Área privativa de 53m² e 68 m²
                   2 ou 3 Dormitórios (1 Suíte)"/>
              </div>
            </SplideSlide>
          </Splide>
        }
      </Content>
    </ScrollableAnchor >
  );
}

export default ListaImoveis;
