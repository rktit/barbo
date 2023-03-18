import React, { useState, useEffect } from 'react'
import Content from './style'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'

import higienopolis from 'images/home/higienopolis.png'
import lasrocas from 'images/home/lasrocas.png'
import moradadoporto from 'images/home/moradadoporto.png'
import villareal from 'images/home/villareal.png'

import Card from 'components/card'

import CardHIG from 'components/cardHig'
import CardLR from 'components/cardLR'
import CardMP from 'components/cardMP'
import CardVR from 'components/cardVR'

import ScrollableAnchor from 'react-scrollable-anchor'

function ListaImoveis({ data, loading }) {
  const [showMenu, setShowMenu] = useState(false)
  const [active, setActive] = useState('#')
  const [isMobile, setMobile] = useState(false)
  const [img, setImagem] = useState(null)

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [])
  const clickMenu = (link) => {
    setActive(link)
    if (isMobile) {
      setShowMenu(false)
    }
  }
  return (
    <ScrollableAnchor id="">
      <Content className="d-flex flex-column align-items-center p-0">
        <div className="title ">Encontre um imóvel Barbo perto de você!</div>
        {isMobile ? (
          <Splide
            className=""
            options={{
              // type: 'loop',
              // focus: 'center',
              rewind: false,
              width: '100%',
              gap: '0rem',
              perPage: 1,
              pagination: false,
              arrows: false,
            }}
          >
            <SplideSlide className="">
              <div className="slide">
                <CardLR
                  image={lasrocas}
                  title="Las Rocas"
                  items="Piracicaba | Piracicamirim"
                  text="Área privativa de 55 m²"
                />

                <CardHIG
                  image={higienopolis}
                  title="Higienópolis"
                  items="Piracicaba | Higienópolis"
                  text="Área privativa de 88 m²"
                />
              </div>
            </SplideSlide>
            <SplideSlide className="">
              <div className="slide">
                <CardMP
                  image={moradadoporto}
                  title="Morada do Porto"
                  items="Americana | Terramérica"
                  text="Área privativa de 53m² e 68 m²"
                />

                <CardVR
                  image={villareal}
                  title="Villa Real"
                  items="Americana | Jardim Bela Vista"
                  text="Área privativa de 58 m²"
                />
              </div>
            </SplideSlide>
          </Splide>
        ) : (
          <Splide
            className="row slide"
            options={{
              // type: 'loop',
              // focus: 'center',
              rewind: true,
              width: '100%',
              gap: '0rem',
              perPage: 3,
              pagination: true,
            }}
          >
            <div className="maquinas">
              {data.length > 0 ? (
                data.map((item, index) => {
                  return (
                    <Card
                      images={item.images[0].link}
                      // items={item.enterprise.name}
                      title={item.enterprise.name_resume}
                      text={item.enterprise.resume}
                      // text1={item.enterprise.name}
                      onClick={() => clickMenu('barbo/front_lake')}
                    />
                  )
                })
              ) : (
                <div>Não há imóveis!</div>
              )}
            </div>
          </Splide>
        )}
      </Content>
    </ScrollableAnchor>
  )
}

export default ListaImoveis
