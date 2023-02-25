import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import iluminacao from "images/blog/iluminacao/iluminacao_casa.jpeg";
import imposto from "images/blog/declarar/declarar_imovel.jpeg";
import CardIluminacao from "components/cardBlog_iluminacao";
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
            {isMobile ?
              <div className="flex m-4">
                <span className="title">Benefícios das plantas em casa</span><p />
                <span className="texto">
                  Quer deixar a
                  <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> seu apartamento mais confortável</a>, saudável <br />
                  e com muito bom gosto? Aposte na inclusão de plantas na 
                  decoração. Elas podem favorecer na contribuição de saúde 
                  e bem-estar. Mas como acrescentá-las à decoração? Basta ter 
                  criatividade e levar em contas <strong> necessidades da planta</strong>, 
                  deixando um espaço preparado para cada tipo. Algumas das 
                  espécies mais utilizadas na <strong>decoração</strong> são a areca-bambu,
                  a samambaia, a hera inglesa, a gérbera e o lírio da paz.<br/><br/>

                  Você sabia que
                  <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> diferentes cômodos do apartamento </a>são 
                  ambientes ideais para diferentes tipos de plantas? A sala, 
                  por exemplo, é o <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> melhor lugar para você </a>aproveitar a
                  decoração verde e, por geralmente ser o maior cômodo 
                  da casa, pode receber plantas maiores e mais destacadas. 
                  Elas ficam bem ao lado do sofá, do hack ou nos cantos das 
                  paredes. Já plantas minimalistas vão bem em móveis como 
                  mesas de centro, prateleiras e estantes. As plantas ideais 
                  para a sala são a samambaia, o cacto, a costela de adão a 
                  jade e a pleomele.<br/><br/>

                  Você anda muito estressado ou tem problemas para dormir? 
                  Então aposte em plantas, elas têm a capacidade de desestressar 
                  e melhorar o sono. Nesse ambiente aposte em espécies menores 
                  como a suculenta, a samambaia, a lavanda, a babosa e a hera 
                  para colocar em estantes, prateleiras e nichos.<br/><br/>

                  Sabia que você não precisa colocar apenas plantas artificiais 
                  no seu banheiro? Espécies como o bambu da sorte, a lança de 
                  São Jorge, o cacto, a espada de Santa Bárbara e o lírio da paz 
                  podem ser colocados em vasos menores e se adaptam à umidade 
                  do ambiente fechado, porém, tente deixar as <strong>janelas 
                    abertas para melhorar a circulação de ar</strong>. 
                  E aí, gostou dessas dicas de decoração?
                </span>
              </div>
              :

              <div className="flex m-4">
                <span className="title">Benefícios das plantas em casa</span><p />
                <span className="texto">
                  Quer deixar a
                  <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> seu apartamento mais confortável</a>, saudável <br />
                  e com muito bom gosto? Aposte na inclusão de plantas na <br />
                  decoração. Elas podem favorecer na contribuição de saúde <br />
                  e bem-estar. Mas como acrescentá-las à decoração? Basta ter <br />
                  criatividade e levar em contas <strong> necessidades da planta</strong>, <br />
                  deixando um espaço preparado para cada tipo. Algumas das <br />
                  espécies mais utilizadas na <strong>decoração</strong> são a areca-bambu,<br />
                  a samambaia, a hera inglesa, a gérbera e o lírio da paz.<br /><br />


                  Você sabia que
                  <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> diferentes cômodos do apartamento </a>são <br />
                  ambientes ideais para diferentes tipos de plantas? A sala, <br />
                  por exemplo, é o <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> melhor lugar para você </a>aproveitar a<br />
                  decoração verde e, por geralmente ser o maior cômodo <br />
                  da casa, pode receber plantas maiores e mais destacadas. <br />
                  Elas ficam bem ao lado do sofá, do hack ou nos cantos das <br />
                  paredes. Já plantas minimalistas vão bem em móveis como <br />
                  mesas de centro, prateleiras e estantes. As plantas ideais <br />
                  para a sala são a samambaia, o cacto, a costela de adão a <br />
                  jade e a pleomele.<br /><br />

                  Você anda muito estressado ou tem problemas para dormir? <br />
                  Então aposte em plantas, elas têm a capacidade de desestressar <br />
                  e melhorar o sono. Nesse ambiente aposte em espécies menores <br />
                  como a suculenta, a samambaia, a lavanda, a babosa e a hera <br />
                  para colocar em estantes, prateleiras e nichos.<br /><br />

                  Sabia que você não precisa colocar apenas plantas artificiais <br />
                  no seu banheiro? Espécies como o bambu da sorte, a lança de <br />
                  São Jorge, o cacto, a espada de Santa Bárbara e o lírio da paz <br />
                  podem ser colocados em vasos menores e se adaptam à umidade <br />
                  do ambiente fechado, porém, tente deixar as <strong>janelas <br />
                    abertas para melhorar a circulação de ar</strong>. <br />
                  E aí, gostou dessas dicas de decoração?
                </span>
              </div>

            }
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
                <CardIluminacao image={iluminacao}
                  items="Postado em Dicas - 01/03/2023"
                  title="Iluminação"
                  text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
              </div>
              <div className="maquinas">
                <CardImposto image={imposto}
                  items="Postado em Dicas - 01/03/2023"
                  title="Declarar Imposto"
                  text="Declarar imóvel financiado no imposto de renda" />
              </div>
            </div>
          </Fade>
          :
          <Fade>
            <div className="box-artigo">
              <span className="title">VEJA MAIS</span><p />
              <div className="maquinas">
                <CardIluminacao image={iluminacao}
                  items="Postado em Dicas - 01/03/2023"
                  title="Iluminação"
                  text="Para dar um toque mais aconchegante e requintado para os seus espaços" />
                <CardImposto image={imposto}
                  items="Postado em Dicas - 01/03/2023"
                  title="Declarar Imposto"
                  text="Declarar imóvel financiado no imposto de renda" />
              </div>
            </div>
          </Fade>
        }
      </Content>
    </ScrollableAnchor >
  );
}

export default ArtigoBeneficios;
