import React, { useState, useEffect } from "react";
import Content from "./style";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

import home from "images/home/empreendimento_home.png";
import home1 from "images/home/empreendimento_home1.png";
import home2 from "images/home/empreendimento_home2.png";
import home3 from "images/home/empreendimento_home3.png";
import home4 from "images/home/empreendimento_home4.png";
import home5 from "images/home/empreendimento_home5.png";


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
    <ScrollableAnchor id="maquinas">
      <Content className="col-12 d-flex flex-column align-items-center p-0">
        <div className="title ">Os melhores toques para o seu novo lar.</div>
        {isMobile ?
          <Splide className="splide col-12" options={{
            rewind: true,
            width: "100%",
            gap: '2rem',
            perPage: 1,
            pagination: true,
            arrows: false
          }}>
            <SplideSlide className="slide">
              <CardImoveis image={home}
                  title="Nome do Empreendimento"
                  text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home1}
                  title="Nome do Empreendimento"
                  text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home2}
                  title="Nome do Empreendimento"
                  text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home3}
                  title="Nome do Empreendimento"
                  text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home4}
                  title="Nome do Empreendimento"
                  text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={home5}
                  title="Nome do Empreendimento"
                  text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            </SplideSlide>
          </Splide>

          :
          <div className="maquinas">
            <CardImoveis image={home}
                  title="Nome do Empreendimento"
                  text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            <CardImoveis image={home1}
                  title="Nome do Empreendimento"
                  text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            <CardImoveis image={home2}
                  title="Nome do Empreendimento"
                  text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            <CardImoveis image={home3}
                  title="Nome do Empreendimento"
                  text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            <CardImoveis image={home4}
                  title="Nome do Empreendimento"
                  text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
            <CardImoveis image={home5}
                  title="Nome do Empreendimento"
                  text="São Paulo | Vila Mariano  
                    Área privativa de 253 m² 
                    2 suítes"/>
          </div>
        }
      </Content>
    </ScrollableAnchor>
  );
}

export default Imoveis;
