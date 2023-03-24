import React, { useState, useEffect } from "react";
import Content from "./style";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

import iluminacao from "images/blog/cards_desk/iluminacao.png";
import imposto from "images/blog/cards_desk/declarar.png";
import plantas from "images/blog/cards_desk/plantas.png";

import iluminacao_mobile from "images/blog/cards_mobile/iluminacao.png";
import imposto_mobile from "images/blog/cards_mobile/declarar.png";
import plantas_mobile from "images/blog/cards_mobile/plantas.png";

import CardBlog from "components/cardBlog";

function Blog() {

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
    <Content className="col-12 d-flex flex-column align-items-center p-0">
      <div className="title py-5">Os melhores toques para o seu novo lar.</div>

      {isMobile ?
        <Splide className="splide col-12" options={{
          rewind: true,
          width: "100%",
          gap: '2rem',
          perPage: 1,
          pagination: true,
          arrows: false
        }}>
          <SplideSlide className="slide col">
            <a href="/barbo/iluminacao">
              <CardBlog image={iluminacao_mobile}
                items="Postado em Dicas - 01/03/2023"
                title="Iluminação"
                text="Para dar um toque mais aconchegante e requintado para os seus espaços" /></a>
            <a href="/barbo/declarar_imposto">
              <CardBlog image={imposto_mobile}
                items="Postado em Dicas - 01/03/2023"
                title="Declarar Imposto"
                text="Declarar imóvel financiado no imposto de renda" />
            </a>
            <a href="/barbo/beneficios_plantas">
              <CardBlog image={plantas_mobile}
                items="Postado em Dicas - 01/03/2023"
                title="Benefícios das Plantas"
                text="Leve a natureza de forma consciente para o design do seu lar" /></a>
            {/* <CardBlog image={iluminacao2}
                items="Postado em Dicas - 01/03/2023"
                title="Iluminação"
                text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
              <CardBlog image={design2}
                items="Postado em Dicas - 01/03/2023"
                title="Benefícios das Plantas"
                text="Leve a natureza de forma consciente para o design do seu lar" />
              <CardBlog image={imposto2}
                items="Postado em Dicas - 01/03/2023"
                title="imposto nas cores"
                text="As paredes dos seus cômodos podem te relaxar ou estimular" /> */}
          </SplideSlide>
        </Splide>

        :
        <div className="maquinas">
          <a href="/barbo/iluminacao">
            <CardBlog image={iluminacao}
              items="Postado em Dicas - 01/03/2023"
              title="Iluminação"
              text="Para dar um toque mais aconchegante e requintado para os seus espaços" /></a>
          <a href="/barbo/declarar_imposto">
            <CardBlog image={imposto}
              items="Postado em Dicas - 01/03/2023"
              title="Declarar Imposto"
              text="Declarar imóvel financiado no imposto de renda" /></a>
          <a href="/barbo/beneficios_plantas">
            <CardBlog image={plantas}
              items="Postado em Dicas - 01/03/2023"
              title="Benefícios das Plantas"
              text="Leve a natureza de forma consciente para o design do seu lar" /></a>
          {/* <CardBlog image={iluminacao2}
              items="Postado em Dicas - 01/03/2023"
              title="Iluminação"
              text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
            <CardBlog image={design2}
              items="Postado em Dicas - 01/03/2023"
              title="Benefícios das Plantas"
              text="Leve a natureza de forma consciente para o design do seu lar" />
            <CardBlog image={imposto2}
              items="Postado em Dicas - 01/03/2023"
              title="imposto nas cores"
              text="As paredes dos seus cômodos podem te relaxar ou estimular" /> */}
        </div>
      }
    </Content>
  );
}

export default Blog;
