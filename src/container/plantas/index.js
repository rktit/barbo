import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Content from "./style";
import Fade from "react-reveal/Fade";

import sala from 'images/empreendimento/Decorado/Infinity_Rio_Claro_Barbo_14.jpg';
import casale from 'images/empreendimento/Plantas/01_Planta_Humanizada_Tipo.jpg';
import herder from 'images/empreendimento/VistaAerea/Infinity_Rio_Claro_Barbo_aerea.jpg';
import Fotos from "components/fotos";
import Planta from "components/planta";
import VistaAerea from "components/vista_aerea";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import icone_whatsapp from "images/empreendimento/whatsapp.png";

import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

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
    { planta: casale, button: 'Apto 82m²' },
    { planta: herder, button: 'Duplex 115m²' },
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
            <div className="left-side col-md-5 mt-5">
              <div className="">
                <div className="box-mobile mx-2">
                  <div className="">
                    <Splide
                      className="splide-badges "
                      options={{
                        rewind: true,
                        width: 'auto',
                        height: '100%',
                        gap: '0rem',
                        perPage: 1,
                        pagination: false,
                        arrows: true,
                      }}
                    >
                      {arrayFotos.map(el => { return (renderImg(el)) })}
                    </Splide>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </Content>
      </ScrollableAnchor>
      :
      <ScrollableAnchor id="">
        <Content className="d-flex">
          <Fade left>
            <div className="left-side col-md-12 mt-5">
              <div className="flex">
                <div className="flex justify-center align-center">
                  <div className="w-full justify-center pt-64">
                    <div className="flex flex-row w-auto">
                      <div className="d-flex justify-content-center py-6">
                        <div className='justify-content-center' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
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
                            <Planta image={sala} />
                            </SplideSlide>
                            

                            <SplideSlide className="slide">
                            <Fotos image={casale} />
                            </SplideSlide>


                            <SplideSlide className="slide">
                            <VistaAerea image={herder} />
                            </SplideSlide>
                          </Splide>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex row justify-content-center">
                    <div className="d-flex  consulta">
                      <div className="image-side shadow btn1">
                        Whatsapp
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=5519996965525&text=Gostaria de falar com um consultor?">
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
  )
}
export default Plantas;
