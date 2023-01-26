import React, { useState, useEffect } from "react";
import Content from "./style";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

import iluminacao from "images/blog/iluminacao.png";
import design from "images/blog/design.png";
import capriche from "images/blog/capriche.png";
import iluminacao2 from "images/blog/iluminacao2.png";
import design2 from "images/blog/design2.png";
import capriche2 from "images/blog/capriche2.png";


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
              <CardImoveis image={iluminacao}
                items="Postado em Dicas - 09/12/2022"
                title="Iluminação"
                text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={design}
                items="Postado em Dicas - 09/12/2022"
                title="Design Biofilico"
                text="Leve a natureza de forma consciente para o design do seu lar" />
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={capriche}
                items="Postado em Dicas - 09/12/2022"
                title="Capriche nas cores"
                text="As paredes dos seus cômodos podem te relaxar ou estimular" />
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={iluminacao2}
                items="Postado em Dicas - 09/12/2022"
                title="Iluminação"
                text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={design2}
                items="Postado em Dicas - 09/12/2022"
                title="Design Biofilico"
                text="Leve a natureza de forma consciente para o design do seu lar" />
            </SplideSlide>
            <SplideSlide className="slide">
              <CardImoveis image={capriche2}
                items="Postado em Dicas - 09/12/2022"
                title="Capriche nas cores"
                text="As paredes dos seus cômodos podem te relaxar ou estimular" />
            </SplideSlide>
          </Splide>

          :
          <div className="maquinas">
            <CardImoveis image={iluminacao}
              items="Postado em Dicas - 09/12/2022"
              title="Iluminação"
              text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
            <CardImoveis image={design}
              items="Postado em Dicas - 09/12/2022"
              title="Design Biofilico"
              text="Leve a natureza de forma consciente para o design do seu lar" />
            <CardImoveis image={capriche}
              items="Postado em Dicas - 09/12/2022"
              title="Capriche nas cores"
              text="As paredes dos seus cômodos podem te relaxar ou estimular" />
            <CardImoveis image={iluminacao2}
              items="Postado em Dicas - 09/12/2022"
              title="Iluminação"
              text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
            <CardImoveis image={design2}
              items="Postado em Dicas - 09/12/2022"
              title="Design Biofilico"
              text="Leve a natureza de forma consciente para o design do seu lar" />
            <CardImoveis image={capriche2}
              items="Postado em Dicas - 09/12/2022"
              title="Capriche nas cores"
              text="As paredes dos seus cômodos podem te relaxar ou estimular" />
          </div>
        }
      </Content>
    </ScrollableAnchor>
  );
}

export default Imoveis;
