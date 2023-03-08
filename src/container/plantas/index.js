import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Content from "./style";
import Fade from "react-reveal/Fade";

import sala from 'images/officetower/Decorado/office-tower-28.jpg';
import humanizada from 'images/officetower/Plantas/planta.jpg';
import aerea from 'images/officetower/VistaAerea/office-tower-15.jpg';
import icone_whatsapp from "images/officetower/whatsapp.png";

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import { getAllByTestId } from '@testing-library/react'

function Plantas(props) {
  const [indexSlide, setIndexSlide] = useState(0);
  const ref = useRef();
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  const moveSlide = (value) => {
    ref.current.splide.go(value);
  }
  const arrayFotos = [
    { planta: sala, button: 'Apto 69m²' },
    { planta: humanizada, button: 'Apto 82m²' },
    { planta: aerea, button: 'Duplex 115m²' },
  ]
  const renderImg = (el) => {
    return (
      <SplideSlide className="w-full">
        <div className="flex items-center justify-center">
          <img src={el.planta} className="p-3 " />
        </div>
        <div className="flex items-center justify-center pt-4">
          <div className="button flex items-center justify-center">
            {el.button}
          </div>
        </div>
      </SplideSlide>
    )
  }

  return (
    isMobile ?
      <ScrollableAnchor id="">
        <Content className="row justify-content-center">
          <Fade left>
            <div className="col-md-12">
              <div className="left-side">
                <div className="flex justify-center align-center">
                  <div className="w-full justify-center pt-64">
                    <div className=" flex flex-row w-auto">
                      <div className="d-flex py-6">
                        <div className='' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                          <div className="fotos text-center">
                            <div className="btn py-7 px-2" onClick={() => { moveSlide(0) }} >Fotos</div>
                            <div className="btn py-7 px-2" onClick={() => { moveSlide(1) }} >Plantas</div>
                            <div className="btn py-7 px-2" onClick={() => { moveSlide(2) }} >Vista Aérea</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex w-auto pt-16">
                        <div className="listaMarcas content-center">
                          <Splide
                            ref={ref}
                            className="splide-badges"
                            options={{
                              rewind: true,
                              width: '100%',
                              gap: '0rem',
                              perPage: 1,
                              pagination: true,
                              arrows: !isMobile,
                            }}
                          >
                            <SplideSlide className="slide">
                              <img src={sala} className="marca" />
                            </SplideSlide>
                            <SplideSlide className="slide">
                              <img src={humanizada} className="marca" />
                            </SplideSlide>
                            <SplideSlide className="slide">
                              <img src={aerea} className="marca" />
                            </SplideSlide>
                          </Splide>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex row">
                    <div className="d-flex consulta">
                      <div className="image-side shadow btn">
                        Whatsapp
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?">
                          <img className="icone_whatsapp" src={icone_whatsapp} alt="Whatsapp" />
                        </a>
                      </div>
                      Fale com um de nossos consultores
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </Content>
      </ScrollableAnchor>
      :
      <ScrollableAnchor id="plantas">
        <Content className="flex row justify-content-center py-4">
          <Fade left>
            <div className="col-md-12 mt-5">
              <div className="left-side">
                <div className="flex justify-center align-center">
                  <div className="w-full justify-center pt-64">
                    <div className=" flex flex-row w-auto">
                      <div className="d-flex py-6">
                        <div className='' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                          <div className="fotos text-center">
                            <div className="btn py-7 px-2" onClick={() => { moveSlide(0) }} >Fotos</div>
                            <div className="btn py-7 px-2" onClick={() => { moveSlide(1) }} >Plantas</div>
                            <div className="btn py-7 px-2" onClick={() => { moveSlide(2) }} >Vista Aérea</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex w-auto pt-16">
                        <div className="listaMarcas content-center">
                          <Splide
                            ref={ref}
                            className="splide-badges"
                            options={{
                              rewind: true,
                              width: '100%',
                              gap: '0rem',
                              perPage: 1,
                              pagination: true,
                              arrows: !isMobile,
                            }}
                          >
                            <SplideSlide className="slide">
                              <img src={sala} className="marca" />
                            </SplideSlide>
                            <SplideSlide className="slide">
                              <img src={humanizada} className="marca" />
                            </SplideSlide>
                            <SplideSlide className="slide">
                              <img src={aerea} className="marca" />
                            </SplideSlide>
                          </Splide>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex row">
                    <div className="d-flex consulta">
                      Fale com um de nossos consultores
                      <div className="image-side shadow btn">
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?">
                          <img className="icone_whatsapp" src={icone_whatsapp} alt="Whatsapp" />WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </Content>
      </ScrollableAnchor>
  )
}
export default Plantas;
