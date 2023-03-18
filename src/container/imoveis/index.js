import React, { useState, useEffect } from 'react'
import Content from './style'

import { Services_State } from '../services'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'

import front_lake from 'images/empreendimento/front_lake.png'
import higienopolis from 'images/empreendimento/higienopolis.png'
import infinity from 'images/empreendimento/infinity.png'
import lasRocas from 'images/empreendimento/lasRocas.png'
import moradadoporto from 'images/empreendimento/moradadoporto.png'
import officetower from 'images/empreendimento/officetower.png'
import quintadovale from 'images/empreendimento/quintadovale.png'
import villareal from 'images/empreendimento/villareal.png'

import CardFront from 'components/cardFront'
import CardHigienopolis from 'components/cardHigienopolis'
import CardInfinity from 'components/cardInfinity'
import CardLasrocas from 'components/cardLasrocas'
import CardMorada from 'components/cardMorada'
import CardOffice from 'components/cardOffice'
import CardQuinta from 'components/cardQuinta'
import CardVilla from 'components/cardVilla'

import ScrollableAnchor from 'react-scrollable-anchor'

function Imoveis({ data, loading }) {
  const [showMenu, setShowMenu] = useState(false)
  const [isMobile, setMobile] = useState(false)
  const [active, setActive] = useState('#')

  const clickMenu = (link) => {
    setActive(link)
    if (isMobile) {
      setShowMenu(false)
    }
  }

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [])

  const list_data = () => {
    for (var i = 0; i < 4; i++) {
      return (
        <CardFront
          image={front_lake}
          items={data[i].enterprise.name}
          title="Rio Claro | Vila Operária"
          text="Área privativa de 94 m²"
          text1="3 Dormitórios (1 suíte)"
          onClick={() => clickMenu('barbo/front_lake')}
        />
      )
    }
  }

  return (
    !loading && (
      <ScrollableAnchor id="">
        <Content className="col-12 d-flex flex-column align-items-center p-0">
          <div className="title ">Encontre um imóvel Barbo perto de você!</div>
          <div className="flex box">
            <form
              className="d-block d-lg-block form-search-filters"
              name="form-search-filters"
              id="form-search-filters"
              method="get"
              action="https://www.rocketit.com.br/barbo/empreendimentos/"
              autocomplete="off"
            >
              {isMobile ? (
                <div className="d-flex flex-column align-items-center">
                  <div className="filtro__item">
                    <label
                      for="form-search-filter-city"
                      className="filtro__label form-label"
                    ></label>
                    <select
                      id="form-search-filter-city"
                      name="cidade"
                      className="filtro__select form-select form-search-filter-city"
                    >
                      <option value="">Cidade</option>
                      <option
                        value="piracicaba"
                        data-phases="pronto-para-morar"
                      >
                        Piracicaba
                      </option>
                      <option value="americana" data-phases="em-obras">
                        Americana
                      </option>
                      <option value="rio-claro" data-phases="corporativo">
                        Rio Claro
                      </option>
                      <option value="barra-bonita" data-phases="loteamento">
                        Barra Bonita
                      </option>
                    </select>
                  </div>
                  <div className="filtro__item">
                    <label
                      for="form-search-filter-phase"
                      className="filtro__label form-label"
                    ></label>
                    <select
                      name="fase"
                      id="form-search-filter-phase"
                      className="filtro__select form-select form-search-filter-phase"
                    >
                      <option value="">Tipos</option>
                      <option value="loteamento">Loteamento</option>
                      <option value="residencial">Residencial</option>
                      <option value="corporativo">Corporativo</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    class="filtro__button btn_lupa"
                  ></button>
                </div>
              ) : (
                <div className="d-flex justify-content-between">
                  <div className="filtro__item">
                    <label
                      for="form-search-filter-city"
                      className="filtro__label form-label"
                    ></label>
                    <select
                      id="form-search-filter-city"
                      name="cidade"
                      className="filtro__select form-select form-search-filter-city"
                    >
                      <option value="">Cidade</option>
                      <option
                        value="piracicaba"
                        data-phases="pronto-para-morar"
                      >
                        Piracicaba
                      </option>
                      <option value="americana" data-phases="em-obras">
                        Americana
                      </option>
                      <option value="rio-claro" data-phases="corporativo">
                        Rio Claro
                      </option>
                      <option value="barra-bonita" data-phases="loteamento">
                        Barra Bonita
                      </option>
                    </select>
                  </div>
                  <div className="filtro__item">
                    <label
                      for="form-search-filter-phase"
                      className="filtro__label form-label"
                    ></label>
                    <select
                      name="fase"
                      id="form-search-filter-phase"
                      className="filtro__select form-select form-search-filter-phase"
                    >
                      <option value="">Tipos</option>
                      <option value="loteamento">Loteamento</option>
                      <option value="residencial">Residencial</option>
                      <option value="corporativo">Corporativo</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    class="filtro__button btn_lupa"
                  ></button>
                </div>
              )}
            </form>
          </div>
          {isMobile ? (
            <Splide
              className="splide col-12"
              options={{
                type: 'loop',
                focus: 'center',
                rewind: false,
                width: '100%',
                gap: '2rem',
                perPage: 1,
                pagination: true,
                arrows: false,
              }}
            >
              <SplideSlide className="slide col">
                <CardFront
                  image={front_lake}
                  items="Front Lake Edifício"
                  title="Rio Claro | Vila Operária"
                  text="Área privativa de 94 m²"
                  text1="3 Dormitórios (1 suíte)"
                  onClick={'barbo/front_lake'}
                />
                <CardHigienopolis
                  image={higienopolis}
                  items="Higienópolis Edifício"
                  title="Piracicaba | Higienópolis"
                  text="Área privativa de 88 m²"
                  text1="3 Dormitórios (1 suíte)
              "
                />
              </SplideSlide>
              <SplideSlide className="slide col">
                <CardInfinity
                  image={infinity}
                  items="Infinity Residencial"
                  title="Rio Claro | Cidade Jardim"
                  text="Área privativa de 151 m²"
                  text1="4 Suítes (1 master)
              "
                />
                <CardLasrocas
                  image={lasRocas}
                  items="Las Rocas Residencial"
                  title="Piracicaba | Piracicamirim"
                  text="Área privativa de 55 m²"
                  text1="2 Dormitórios
              "
                />
              </SplideSlide>
              <SplideSlide className="slide col">
                <CardMorada
                  image={moradadoporto}
                  items="Morada do Porto Residencial"
                  title="Americana | Terramérica"
                  text="Área privativa de 53m² e 68 m²"
                  text1="2 ou 3 Dormitórios (1 Suíte)
              "
                />
                <CardOffice
                  image={officetower}
                  items="Office Tower Edifício"
                  title="Rio Claro | Jardim Claret"
                  text="Salas - 42,06 m² | 43,66 m² | 49,94 m²"
                  text1="5 Elevadores (3 panorâmicos)
              "
                />
              </SplideSlide>
              <SplideSlide className="slide col">
                <CardQuinta
                  image={quintadovale}
                  items="Loteamento Quinta do Vale"
                  title="Barra Bonita | Portal São José da Barra"
                  text="Com lotes de 200m² a 400m²"
                  text1=""
                />
                <CardVilla
                  image={villareal}
                  items="Villa Real Residencial"
                  title="Americana | Jardim Bela Vista"
                  text="2 Dormitórios"
                />
              </SplideSlide>
            </Splide>
          ) : (
            <div className="maquinas">
              {data.length > 0 ? list_data() : <div>Não há imóveis!</div>}
            </div>
          )}
        </Content>
      </ScrollableAnchor>
    )
  )
}
export default Imoveis
