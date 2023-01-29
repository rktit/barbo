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


import CardImoveis from "components/cardImoveis";
import ScrollableAnchor from "react-scrollable-anchor";

function Imoveis() {

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
        <div className="title ">Encontre seu imóvel</div>
        <div className="flex box">
          <form className="d-none d-lg-block form-search-filters" name="form-search-filters"
            id="form-search-filters" method="get" action="https://www.rocketit.com.br/barbo/imoveis/" autocomplete="off">
            <div className="d-flex justify-content-between">
              <div className="filtro__item">
                <label for="form-search-filter-city" className="filtro__label form-label"></label>
                <select id="form-search-filter-city" name="cidade" className="filtro__select form-select form-search-filter-city">
                  <option value="">Cidade</option>
                  <option value="piracicaba" data-phases="pronto-para-morar,final-de-obras,em-obras">Piracicaba</option>
                  <option value="americana" data-phases="pronto-para-morar">Americana</option>
                  <option value="ipeuna" data-phases="pronto-para-morar">Rio Claro</option>
                </select>
              </div>
              <div className="filtro__item">
                <label for="form-search-filter-phase" className="filtro__label form-label"></label>
                <select name="fase" id="form-search-filter-phase" className="filtro__select form-select form-search-filter-phase">
                  <option value="">Tipos</option>
                  <option value="loteamento" data-phases="pronto-para-morar,final-de-obras,em-obras">Loteamento</option>
                  <option value="residencial" data-phases="pronto-para-morar">Residencial</option>
                  <option value="corporativo" data-phases="pronto-para-morar">Corporativo</option>
                </select>
              </div>
              <button type="submit" class="filtro__button btn_lupa"></button>
            </div>
          </form>
        </div>
        {isMobile ?
          <Splide className="splide col-12" options={{
            rewind: true,
            width: "20rem",
            gap: '2rem',
            perPage: 1,
            pagination: false,
            arrows: true,
          }}>
            <SplideSlide className="slide">
              <CardImoveis image={home}
                title="Front Lake"
                text="Rio Claro | Vila Operária
                Área privativa de 94 m²
                3 Dormitórios (1 suíte)"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home1}
                title="Infinity"
                text="Rio Claro | Cidade Jardim
                Área privativa de 151 m²
                4 Suítes (1 master)"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home2}
                title="Quinta do Vale"
                text="Barra Bonita | Portal São José da Barra
                Com lotes de 200m² a 400m²"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home3}
                title="Office Tower"
                text="Rio Claro | Jardim Claret
                Salas - 42,06 m² | 43,66 m² | 49,94 m²
                5 Elevadores (3 panorâmicos)"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home4}
                title="Las Rocas"
                text="Piracicaba | Piracicamirim
                Área privativa de 55 m²
                2 Dormitórios"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home5}
                title="Higienópolis"
                text="Piracicaba | Higienópolis
                Área privativa de 88 m²
                3 Dormitórios (1 suíte)"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home5}
                title="Villa Real"
                text="Americana | Jardim Bela Vista
                Área privativa de 58 m²
                2 Dormitórios "/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home5}
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
            perPage: 3,
            pagination: true
          }}>
            <SplideSlide className="slide">
              <CardImoveis image={home}
                title="Front Lake"
                text="Rio Claro | Vila Operária
                Área privativa de 94 m²
                3 Dormitórios (1 suíte)"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home1}
                title="Infinity"
                text="Rio Claro | Cidade Jardim
                Área privativa de 151 m²
                4 Suítes (1 master)"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home2}
                title="Quinta do Vale"
                text="Barra Bonita | Portal São José da Barra
                Com lotes de 200m² a 400m²"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home3}
                title="Office Tower"
                text="Rio Claro | Jardim Claret
                 Salas - 42,06 m² | 43,66 m² | 49,94 m²
                 5 Elevadores (3 panorâmicos)"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home4}
                title="Las Rocas"
                text="Piracicaba | Piracicamirim
                 Área privativa de 55 m²
                 2 Dormitórios"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home5}
                title="Higienópolis"
                text="Piracicaba | Higienópolis
                  Área privativa de 88 m²
                  3 Dormitórios (1 suíte)"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home}
                title="Villa Real"
                text="Americana | Jardim Bela Vista
                  Área privativa de 58 m²
                  2 Dormitórios "/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home1}
                title="Morada do Porto"
                text="Americana | Terramérica
                  Área privativa de 53m² e 68 m²
                  2 ou 3 Dormitórios (1 Suíte)"/>
            </SplideSlide>
          </Splide>

        }
      </Content>
    </ScrollableAnchor >
  );
}

export default Imoveis;
