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

  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [active, setActive] = useState('#');
  const clickMenu = (link) => {
    setActive(link);
    if (isMobile) {
      setShowMenu(false);
    }
  };
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
        <div className="flex box">
          <form className="d-block d-lg-block form-search-filters" name="form-search-filters"
            id="form-search-filters" method="get" action="https://www.barbo.com.br/empreendimentos/" autocomplete="off">
            {isMobile ?
              <div className="d-flex flex-column align-items-center">
                <div className="filtro__item">
                  <label for="form-search-filter-city" className="filtro__label form-label"></label>
                  <select id="form-search-filter-city" name="cidade" className="filtro__select form-select form-search-filter-city">
                    <option value="">Cidade</option>
                    <option value="piracicaba" data-phases="pronto-para-morar">Piracicaba</option>
                    <option value="americana" data-phases="em-obras">Americana</option>
                    <option value="rio-claro" data-phases="corporativo">Rio Claro</option>
                    <option value="barra-bonita" data-phases="loteamento">Barra Bonita</option>
                  </select>
                </div>
                <div className="filtro__item">
                  <label for="form-search-filter-phase" className="filtro__label form-label"></label>
                  <select name="fase" id="form-search-filter-phase" className="filtro__select form-select form-search-filter-phase">
                    <option value="">Tipos</option>
                    <option value="loteamento">Loteamento</option>
                    <option value="residencial">Residencial</option>
                    <option value="corporativo">Corporativo</option>
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
                    <option value="piracicaba" data-phases="pronto-para-morar">Piracicaba</option>
                    <option value="americana" data-phases="em-obras">Americana</option>
                    <option value="rio-claro" data-phases="corporativo">Rio Claro</option>
                    <option value="barra-bonita" data-phases="loteamento">Barra Bonita</option>
                  </select>
                </div>
                <div className="filtro__item">
                  <label for="form-search-filter-phase" className="filtro__label form-label"></label>
                  <select name="fase" id="form-search-filter-phase" className="filtro__select form-select form-search-filter-phase">
                    <option value="">Tipos</option>
                    <option value="loteamento">Loteamento</option>
                    <option value="residencial">Residencial</option>
                    <option value="corporativo">Corporativo</option>
                  </select>
                </div>
                <button type="submit" class="filtro__button btn_lupa"></button>
              </div>
            }
          </form>
        </div>
        {isMobile ?
          <Splide className="splide col-12" options={{
            type: 'loop',
            focus: 'center',
            rewind: false,
            width: "100%",
            gap: '2rem',
            perPage: 1,
            pagination: true,
            arrows: false,
          }}>
            <SplideSlide className="slide col">
              <a href="https://www.barbo.com.br/frontlake/">
                <CardImoveis image={front_lake}
                  items="Front Lake Edifício"
                  title="Rio Claro | Vila Operária"
                  text="Área privativa de 94 m²"
                  text1="3 Dormitórios (1 suíte)" /></a>
              <a href="https://www.barbo.com.br/higienopolis/">
                <CardImoveis image={higienopolis}
                  items="Higienópolis Edifício"
                  title="Piracicaba | Higienópolis"
                  text="Área privativa de 88 m²"
                  text1="3 Dormitórios (1 suíte)" /></a>
            </SplideSlide>
            <SplideSlide className="slide col">
              <a href="https://alakadim.com.br/infinity/">
                <CardImoveis image={infinity}
                  items="Infinity Residencial"
                  title="Rio Claro | Cidade Jardim"
                  text="Área privativa de 151 m²"
                  text1="4 Suítes (1 master)" /></a>
              <a href="https://alakadim.com.br/lasrocas/">
                <CardImoveis image={lasRocas}
                  items="Las Rocas Residencial"
                  title="Piracicaba | Piracicamirim"
                  text="Área privativa de 55 m²"
                  text1="2 Dormitórios" /></a>
            </SplideSlide>
            <SplideSlide className="slide col">
              <a href="https://alakadim.com.br/morada-do-porto/">
                <CardImoveis image={moradadoporto}
                  items="Morada do Porto Residencial"
                  title="Americana | Terramérica"
                  text="Área privativa de 53m² e 68 m²"
                  text1="2 ou 3 Dormitórios (1 Suíte)" /></a>
              <a href="https://www.barbo.com.br/office_tower/">
                <CardImoveis image={officetower}
                  items="Office Tower Edifício"
                  title="Rio Claro | Jardim Claret"
                  text="Salas - 42,06 m² | 43,66 m² | 49,94 m²"
                  text1="5 Elevadores (3 panorâmicos)" /></a>
            </SplideSlide>
            <SplideSlide className="slide col">
              <a href="https://alakadim.com.br/quinta-do-valle/">
                <CardImoveis image={quintadovale}
                  items="Loteamento Quinta do Vale"
                  title="Barra Bonita | Portal São José da Barra"
                  text="Com lotes de 200m² a 400m²"
                  text1="" /></a>
              <a href="https://alakadim.com.br/villa-real/">
                <CardImoveis image={villareal}
                  items="Villa Real Residencial"
                  title="Americana | Jardim Bela Vista"
                  text="2 Dormitórios" /></a>
            </SplideSlide>
          </Splide>
          :
          <div className="maquinas">
            <a href="https://www.barbo.com.br/frontlake/">
              <CardImoveis image={front_lake}
                items="Front Lake Edifício"
                title="Rio Claro | Vila Operária"
                text="Área privativa de 94 m²"
                text1="3 Dormitórios (1 suíte)" /></a>
            <a href="https://www.barbo.com.br/higienopolis/">
              <CardImoveis image={higienopolis}
                items="Higienópolis Edifício"
                title="Piracicaba | Higienópolis"
                text="Área privativa de 88 m²"
                text1="3 Dormitórios (1 suíte)" /></a>
            <a href="https://alakadim.com.br/infinity/">
              <CardImoveis image={infinity}
                items="Infinity Residencial"
                title="Rio Claro | Cidade Jardim"
                text="Área privativa de 151 m²"
                text1="4 Suítes (1 master)" /></a>
            <a href="https://alakadim.com.br/lasrocas/">
              <CardImoveis image={lasRocas}
                items="Las Rocas Residencial"
                title="Piracicaba | Piracicamirim"
                text="Área privativa de 55 m²"
                text1="2 Dormitórios" /></a>
            <a href="https://alakadim.com.br/morada-do-porto/">
              <CardImoveis image={moradadoporto}
                items="Morada do Porto"
                title="Americana | Terramérica"
                text="Área privativa de 53m² e 68 m²"
                text1="2 ou 3 Dormitórios (1 Suíte)" /></a>
            <a href="https://www.barbo.com.br/office_tower/">
              <CardImoveis image={officetower}
                items="Office Tower Edifício"
                title="Rio Claro | Jardim Claret"
                text="Salas - 42,06 m² | 43,66 m² | 49,94 m²"
                text1="5 Elevadores (3 panorâmicos)" /></a>
            <a href="https://alakadim.com.br/quinta-do-valle/">
              <CardImoveis image={quintadovale}
                items="Quinta do Vale"
                title="Barra Bonita | Portal São José da Barra"
                text="Com lotes de 200m² a 400m²"
                text1="" /></a>
            <a href="https://alakadim.com.br/villa-real/">
              <CardImoveis image={villareal}
                items="Villa Real Residencial"
                title="Americana | Jardim Bela Vista"
                text="2 Dormitórios" /></a>
          </div>
        }
      </Content>
    </ScrollableAnchor>
  );
}
export default Imoveis;



