import React, { useEffect, useRef, useState } from 'react'
import Content from "./style";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

function Fotos(props) {

  const [modalShow, setModalShow] = useState(false);
  const [nomeModelo, setNomeModelo] = useState("");

  function abreModal(modelo) {
    setNomeModelo(modelo);
    setModalShow(true);
  }
  const ref = useRef();
  const [isMobile, setMobile] = useState(false)


  return (
    <Content>
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
          <SplideSlide className="card">
            <img src={props.image1} className="card-img-top" />
          </SplideSlide>
          <SplideSlide className="card">
            <img src={props.image2} className="card-img-top" />
          </SplideSlide>
          <SplideSlide className="card">
            <img src={props.image3} className="card-img-top" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
    </Content >
  );
}

export default Fotos;