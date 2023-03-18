import React, { useState, useEffect } from 'react'
import Content from './style'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'

import higienopolis from 'images/home/higienopolis.png'
import lasrocas from 'images/home/lasrocas.png'
import moradadoporto from 'images/home/moradadoporto.png'
import villareal from 'images/home/villareal.png'

import CardHIG from 'components/cardHig'
import CardLR from 'components/cardLR'
import CardMP from 'components/cardMP'
import CardVR from 'components/cardVR'

import ScrollableAnchor from 'react-scrollable-anchor'

function ListaImoveis({ data = [], loading }) {
  const [showMenu, setShowMenu] = useState(false)
  const [isMobile, setMobile] = useState(false)
  const [active, setActive] = useState('#')
  const [imoveis, setImoveis] = useState([]);

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

  useEffect(() => {
    if (data.length > 0) carregaImoveis()
  }, [data])

  const carregaImoveis = () => {
    let result = []
    for (let i = 0; i < 4; i++) {
      result.push(data[i]);
    }

    setImoveis(result);
  }
  const divCard = (info, index) => {
    const _address = info.enterprise.name_resume.split(',')
    return <CardHIG
      images={info.images[0].link}
      items={info.enterprise.name}
      title={_address[0]}
      text={_address[1]}
      // text1="3 Dormitórios (1 suíte)"
      onClick={() => clickMenu('barbo/front_lake')}
      key={index}
    />
  }

  return (
    !loading && (
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
              className="maquinas"
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
              {/* <SplideSlide>
                <div className="row slide">
                  <CardLR
                    image={lasrocas}
                    title="Las Rocas"
                    items="Piracicaba | Piracicamirim"
                    text="Área privativa de 55 m²"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="row slide">
                  <CardHIG
                    image={higienopolis}
                    title="Higienópolis"
                    items="Piracicaba | Higienópolis"
                    text="Área privativa de 88 m²"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="row slide">
                  <CardMP
                    image={moradadoporto}
                    title="Morada do Porto"
                    items="Americana | Terramérica"
                    text="Área privativa de 53m² e 68 m²"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="row slide">
                  <CardVR
                    image={villareal}
                    title="Villa Real"
                    items="Americana | Jardim Bela Vista"
                    text="Área privativa de 58 m²"
                  />
                </div>
              </SplideSlide> */}
              <div className="row slide">
                {data.length > 0 ? imoveis.map((item, index) => divCard(item, index)) : <div>Não há imóveis!</div>}
              </div>
            </Splide>

          )}
        </Content>
      </ScrollableAnchor>
    )
  )
}

export default ListaImoveis





