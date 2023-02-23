import React, { useState, useEffect } from "react";
import Content from "./style";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

import iluminacao from "images/blog/iluminacao/iluminacao_casa.jpeg";
import imposto from "images/blog/declarar/declarar_imovel.jpeg";
import plantas from "images/blog/beneficios/beneficios_apartamento.jpg";

import CardIluminacao from "components/cardBlog_iluminacao";
import CardBeneficios from "components/cardBlog_beneficios";
import CardImposto from "components/cardBlog_imposto";
import ScrollableAnchor from "react-scrollable-anchor";

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
    <ScrollableAnchor id="blog">
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
              <CardIluminacao image={iluminacao}
                items="Postado em Dicas - 09/12/2022"
                title="Iluminação"
                text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
              <CardImposto image={imposto}
                items="Postado em Dicas - 09/12/2022"
                title="Declarar Imposto"
                text="Declarar imóvel financiado no imposto de renda" />
              <CardBeneficios image={plantas}
                items="Postado em Dicas - 09/12/2022"
                title="Benefícios das Plantas"
                text="Leve a natureza de forma consciente para o design do seu lar" />
              {/* <CardBlog image={iluminacao2}
                items="Postado em Dicas - 09/12/2022"
                title="Iluminação"
                text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
              <CardBlog image={design2}
                items="Postado em Dicas - 09/12/2022"
                title="Benefícios das Plantas"
                text="Leve a natureza de forma consciente para o design do seu lar" />
              <CardBlog image={imposto2}
                items="Postado em Dicas - 09/12/2022"
                title="imposto nas cores"
                text="As paredes dos seus cômodos podem te relaxar ou estimular" /> */}
            </SplideSlide>
          </Splide>

          :
          <div className="maquinas">
           <CardIluminacao image={iluminacao}
                items="Postado em Dicas - 09/12/2022"
                title="Iluminação"
                text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
              <CardImposto image={imposto}
                items="Postado em Dicas - 09/12/2022"
                title="Declarar Imposto"
                text="Declarar imóvel financiado no imposto de renda" />
              <CardBeneficios image={plantas}
                items="Postado em Dicas - 09/12/2022"
                title="Benefícios das Plantas"
                text="Leve a natureza de forma consciente para o design do seu lar" />
            {/* <CardBlog image={iluminacao2}
              items="Postado em Dicas - 09/12/2022"
              title="Iluminação"
              text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
            <CardBlog image={design2}
              items="Postado em Dicas - 09/12/2022"
              title="Benefícios das Plantas"
              text="Leve a natureza de forma consciente para o design do seu lar" />
            <CardBlog image={imposto2}
              items="Postado em Dicas - 09/12/2022"
              title="imposto nas cores"
              text="As paredes dos seus cômodos podem te relaxar ou estimular" /> */}
          </div>
        }
      </Content>
    </ScrollableAnchor>
  );
}

export default Blog;
