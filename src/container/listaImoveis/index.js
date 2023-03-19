import React, { useState, useEffect } from 'react'
import Content from './style'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'

import higienopolis from 'images/home/higienopolis.png'
import lasrocas from 'images/home/lasrocas.png'
import moradadoporto from 'images/home/moradadoporto.png'
import villareal from 'images/home/villareal.png'

import Card from 'components/card'


import ScrollableAnchor from 'react-scrollable-anchor'

function ListaImoveis({ data, loading }) {
  const [isMobile, setMobile] = useState(false)
  const [img, setImagem] = useState(null)

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [])

  return (
    <ScrollableAnchor id="">
      <Content className="d-flex flex-column align-items-center p-0">
        <div className="title ">Encontre um imóvel Barbo perto de você!</div>
        {isMobile ?
          <Splide className="splide col-12" options={{
            type: 'loop',
            focus: 'center',
            rewind: true,
            width: "100%",
            perPage: 1,
            pagination: true,
            arrows: true,
          }}>
            <SplideSlide className="slide col">
              <a href="https://alakadim.com.br/lasrocas/">
                <Card image={lasrocas}
                  title="Las Rocas"
                  items="Piracicaba | Piracicamirim"
                  text="Área privativa de 55 m²" /></a>
              <a href="https://rocketit.com.br/higienopolis/">
                <Card image={higienopolis}
                  title="Higienópolis"
                  items="Piracicaba | Higienópolis"
                  text="Área privativa de 88 m²" /></a>
            {/* </SplideSlide>
            <SplideSlide className="slide col"> */}
              <a href="https://alakadim.com.br/morada-do-porto/">
                <Card image={moradadoporto}
                  title="Morada do Porto"
                  items="Americana | Terramérica"
                  text="Área privativa de 53m² e 68 m²" /></a>
              <a href="https://alakadim.com.br/villa-real/">
                <Card image={villareal}
                  title="Villa Real"
                  items="Americana | Jardim Bela Vista"
                  text="Área privativa de 58 m²" /></a>
            </SplideSlide>
          </Splide>
          :
          <Splide
            className=""
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
            <SplideSlide>
              <div className="row slide">
                <a href="https://alakadim.com.br/lasrocas/">
                  <Card image={lasrocas}
                    title="Las Rocas"
                    items="Piracicaba | Piracicamirim"
                    text="Área privativa de 55 m²" /></a>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="row slide">
                <a href="https://rocketit.com.br/higienopolis/">
                  <Card image={higienopolis}
                    title="Higienópolis"
                    items="Piracicaba | Higienópolis"
                    text="Área privativa de 88 m²" /></a>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="row slide">
                <a href="https://alakadim.com.br/morada-do-porto/">
                  <Card image={moradadoporto}
                    title="Morada do Porto"
                    items="Americana | Terramérica"
                    text="Área privativa de 53m² e 68 m²" /></a>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="row slide">
                <a href="https://alakadim.com.br/villa-real/">
                  <Card image={villareal}
                    title="Villa Real"
                    items="Americana | Jardim Bela Vista"
                    text="Área privativa de 58 m²" /></a>
              </div>
            </SplideSlide>
          </Splide>
        }
      </Content>
    </ScrollableAnchor>
  )
}

export default ListaImoveis
