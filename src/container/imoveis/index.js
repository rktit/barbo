import React, { useState, useEffect } from "react";
import Content from "./style";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

import front_lake from "images/empreendimento/front_lake.png";
import higienopolis from "images/empreendimento/higienopolis.png";
import infinity from "images/empreendimento/infinity.png";
import lasRocas from "images/empreendimento/lasRocas.png";
import moradadoporto from "images/empreendimento/moradadoporto.png";
import officetower from "images/empreendimento/officetower.png";
import quintadovale from "images/empreendimento/quintadovale.png"
import villareal from "images/empreendimento/villareal.png"


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
    <ScrollableAnchor id="blog">
      <Content className="col-12 d-flex flex-column align-items-center p-0">
        <div className="title ">Encontre seu imóvel</div>
        <div className="flex box">
          <form className="d-block d-lg-block form-search-filters" name="form-search-filters"
            id="form-search-filters" method="get" action="https://www.rocketit.com.br/barbo/imoveis/" autocomplete="off">
            {isMobile ?
              <div className="d-flex flex-column align-items-center">
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
              :
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
            }
          </form>
        </div>
        {isMobile ?
          <Splide className="splide col-12" options={{
            rewind: true,
            width: "100%",
            gap: '2rem',
            perPage: 1,
            pagination: true,
            arrows: false
          }}>
            <SplideSlide className="slide col">
              <CardImoveis image={front_lake}
                items="Front Lake"
                title="Rio Claro | Vila Operária"
                text="Área privativa de 94 m²"
                text1="3 Dormitórios (1 suíte)" />
              <CardImoveis image={higienopolis}
                items="Higienópolis"
                title="Piracicaba | Higienópolis"
                text="Área privativa de 88 m²"
                text1="3 Dormitórios (1 suíte)
              " />
              <CardImoveis image={infinity}
                items="Infinity"
                title="Rio Claro | Cidade Jardim"
                text="Área privativa de 151 m²"
                text1="4 Suítes (1 master)
              " />
              <CardImoveis image={lasRocas}
                items="Las Rocas"
                title="Piracicaba | Piracicamirim"
                text="Área privativa de 55 m²"
                text1="2 Dormitórios
              " />
              <CardImoveis image={moradadoporto}
                items="Morada do Porto"
                title="Americana | Terramérica"
                text="Área privativa de 53m² e 68 m²"
                text1="2 ou 3 Dormitórios (1 Suíte)
              " />
              <CardImoveis image={officetower}
                items="Office Tower"
                title="Rio Claro | Jardim Claret"
                text="Salas - 42,06 m² | 43,66 m² | 49,94 m²"
                text1="5 Elevadores (3 panorâmicos)
              " />
              <CardImoveis image={quintadovale}
                items="Quinta do Vale"
                title="Barra Bonita | Portal São José da Barra"
                text="Com lotes de 200m² a 400m²"
                text1="" />
              <CardImoveis image={villareal}
                items="Villa Real"
                title="Americana | Jardim Bela Vista"
                text="2 Dormitórios" />
            </SplideSlide>
          </Splide>
          :
          <div className="maquinas">
            <CardImoveis image={front_lake}
              items="Front Lake"
              title="Rio Claro | Vila Operária"
              text="Área privativa de 94 m²"
              text1="3 Dormitórios (1 suíte)" />
            <CardImoveis image={higienopolis}
              items="Higienópolis"
              title="Piracicaba | Higienópolis"
              text="Área privativa de 88 m²"
              text1="3 Dormitórios (1 suíte)
              " />
            <CardImoveis image={infinity}
              items="Infinity"
              title="Rio Claro | Cidade Jardim"
              text="Área privativa de 151 m²"
              text1="4 Suítes (1 master)
              " />
            <CardImoveis image={lasRocas}
              items="Las Rocas"
              title="Piracicaba | Piracicamirim"
              text="Área privativa de 55 m²"
              text1="2 Dormitórios
              " />
            <CardImoveis image={moradadoporto}
              items="Morada do Porto"
              title="Americana | Terramérica"
              text="Área privativa de 53m² e 68 m²"
              text1="2 ou 3 Dormitórios (1 Suíte)
              " />
            <CardImoveis image={officetower}
              items="Office Tower"
              title="Rio Claro | Jardim Claret"
              text="Salas - 42,06 m² | 43,66 m² | 49,94 m²"
              text1="5 Elevadores (3 panorâmicos)
              " />
            <CardImoveis image={quintadovale}
              items="Quinta do Vale"
              title="Barra Bonita | Portal São José da Barra"
              text="Com lotes de 200m² a 400m²"
              text1="" />
            <CardImoveis image={villareal}
              items="Villa Real"
              title="Americana | Jardim Bela Vista"
              text="2 Dormitórios" />
          </div>
        }
      </Content>
    </ScrollableAnchor>
  );
}
export default Imoveis;