import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import imposto from "images/blog/declarar/declarar_imovel.jpeg";
import plantas from "images/blog/beneficios/beneficios_apartamento.jpg";

import CardBeneficios from "components/cardBlog_beneficios";
import CardImposto from "components/cardBlog_imposto";

function ArtigoBeneficios(props) {

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);

  return (
    <ScrollableAnchor id="">
      <Content className="col-12 row justify-content-center">

        <Fade left>
          <div className="left-side my-5">
            {/* {isMobile ? ""
              : */}
            <div className=""></div>
            {/* } */}

            <div className="flex m-4">
              <span className="title">Iluminação para cada ambiente</span><p />
              <span className="texto">
                Com a pandemia passamos muito mais tempo dentro de casa, <br />
                e isso nos mostrou a necessidade de criarmos
                <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> ambientes mais<br />
                  confortáveis</a>. Entretanto, ao contrário do que você pode pensar,<br />
                conforto não é apenas ter um sofá fofinho, mas detalhes que <br />
                proporcionem um espaço mais acolhedor, incluindo a iluminação. <br />
                Porém, a iluminação vai das lâmpadas, refletores, lustres, pendentes, <br />
                abajures, spots e arandelas.<br /><br />


                Leve em conta o aspecto funcional do cômodo e descubra qual é o <br />
                tipo de lâmpada, cor da parede, portas, janelas e disposição dos<br />
                móveis para criar o efeito de iluminação que você deseja. <br />
                Em ambientes como
                <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> salas de estar, jantar e quartos </a>, o ideal são <br />
                as luzes amarelas e iluminação suave, algo pontual e aconchegante. <br />
                Já em ambientes que exigem concentração, como escritórios, <br />
                cozinhas e salas de estudo, aposte em luz direta, ampla, branca e <br />
                abundante, elas ajudam a manter o estado de alerta e garante um <br />
                detalhamento maior da visão. Já quando falamos nas cores de cada<br />
                cômodo, as cores mais neutras como branco, off white, cinza e bege <br />
                são as preferidas para compor ambientes mais iluminados. Da mesma <br />
                forma, cores mais quentes como a terracota, dão a sensação de <br />
                acolhimento e suavidade para o ambiente. Outra forma de garantir <br />
                mais conforto e iluminação para cada espaço é investir em portas e <br />
                janelas amplas, integrar a sala de estar com a varanda e usar cortinas<br />
                mais delicadas. Dessa forma, você vai aproveitar a luz do dia e um <br />
                ambiente ainda mais claro. Agora é só se colocar a mão na massa e <br />
                deixar o <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> seu apartamento </a>
                com a iluminação ideal em cada ambiente!
              </span>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="image-side">
          </div>
        </Fade>
        {isMobile ?
          <Fade>
            <div className="box-artigo">
              <span className="title">VEJA MAIS</span><p />
              <div className="maquinas">
                <CardImposto image={imposto}
                  items="Postado em Dicas - 09/12/2022"
                  title="Iluminação"
                  text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
              </div>
              <div className="maquinas pb-5">
                <CardBeneficios image={plantas}
                  items="Postado em Dicas - 09/12/2022"
                  title="Benefícios das Plantas"
                  text="Leve a natureza de forma consciente para o design do seu lar" />
              </div>
            </div>
          </Fade>
          :
          <Fade>
            <div className="box-artigo">
              <span className="title">VEJA MAIS</span><p />
              <div className="maquinas">
                <CardImposto image={imposto}
                  items="Postado em Dicas - 09/12/2022"
                  title="Iluminação"
                  text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
                <CardBeneficios image={plantas}
                  items="Postado em Dicas - 09/12/2022"
                  title="Benefícios das Plantas"
                  text="Leve a natureza de forma consciente para o design do seu lar" />
              </div>
            </div>
          </Fade>
        }
      </Content>
    </ScrollableAnchor >
  );
}

export default ArtigoBeneficios;
