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
                    <option value="iperioclarouna" data-phases="pronto-para-morar">Rio Claro</option>
                    <option value="barrabonita" data-phases="pronto-para-morar">Barra Bonita</option>
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
                <button type="submit" class="filtro__button btn_lupa">Pesquisar</button>
              </div>
              :
              <div className="d-flex justify-content-between">
                <div className="filtro__item">
                  <label for="form-search-filter-city" className="filtro__label form-label"></label>
                  <select id="form-search-filter-city" name="cidade" className="filtro__select form-select form-search-filter-city">
                    <option value="">Cidade</option>
                    <option value="piracicaba" data-phases="pronto-para-morar,final-de-obras,em-obras">Piracicaba</option>
                    <option value="americana" data-phases="pronto-para-morar">Americana</option>
                    <option value="iperioclarouna" data-phases="pronto-para-morar">Rio Claro</option>
                    <option value="barrabonita" data-phases="pronto-para-morar">Barra Bonita</option>
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
                <button type="submit" class="filtro__button btn_lupa">Pesquisar</button>
              </div>
            }
          </form>
        </div>        {isMobile ?
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
                text=""/>
            
              <CardLR image={lasrocas}
                title=""
                text=""/>
            
              <CardMP image={moradadoporto}
                title=""
                text=""/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardVR image={villareal}
                title=""
                text=""/>
           
              <CardHIG image={higienopolis}
                title=""
                text=""/>
         
              <CardLR image={lasrocas}
                title=""
                text=""/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardMP image={moradadoporto}
                title=""
                text=""/>
           
              <CardVR image={villareal}
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
              <div className="row slide">
                <CardHIG image={higienopolis}
                  title=""
                  text=""/>
                <CardLR image={lasrocas}
                  title=""
                  text=""/>
                <CardMP image={moradadoporto}
                  title=""
                  text=""/>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="row slide">
                <CardVR image={villareal}
                  title=""
                  text=""/>
                <CardHIG image={higienopolis}
                  title=""
                  text=""/>
                <CardLR image={lasrocas}
                  title=""
                  text=""/>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="row slide">
                <CardMP image={moradadoporto}
                  title=""
                  text=""/>
                <CardVR image={villareal}
                  title=""
                  text=""/>
                <CardHIG image={higienopolis}
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
