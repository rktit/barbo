import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import iluminacao from "images/blog/iluminacao/iluminacao_casa.jpeg";
import plantas from "images/blog/beneficios/beneficios_apartamento.jpg";

import CardIluminacao from "components/cardBlog_iluminacao";
import CardBeneficios from "components/cardBlog_beneficios";
function ArtigoImposto(props) {

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
              <div className="flex m-0">
                <span className="title">Declarar imóvel financiado <br />no imposto de renda</span><p />
                <span className="texto">
                  Imposto de renda é uma tarefa muito importante e que pode ser muito <br />
                  complicada, ainda mais quando você<br />
                  precisa declarar um
                  <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> imóvel financiado. </a><br />
                  Duas coisas que você precisa saber: <br />
                  a primeira é que um
                  <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> financiamento <br />
                    imobiliário </a> não deve ser declarado <br />
                  como uma dívida, a segunda é que <br />
                  você não deve colocar o valor total do
                  <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> financiamento </a>, pois esse valor pode <br />
                  mudar. Você precisa declarar somente <br />
                  o valor pago até o momento, isso inclui <br />
                  a entrada, as prestações já quitadas, <br />
                  os impostos, custos de corretagem, e <br />
                  por aí vai, mas nunca as parcelas que <br />
                  ainda serão pagas no futuro. Para <br />
                  facilitar a sua declaração preste aten-<br />
                  ção: Imóveis devem ser discriminados <br />
                  na ficha de ‘Bens e Direitos’.
                  <a href='/barbo/empreendimentos_interna' target="_blank"> Os aparta- <br />
                    mentos </a>ficam na linha 11, casas na linha <br />
                  12 e terrenos na linha 13. Não esqueça<br />
                  de fornecer o máximo de informações. <br />
                  O endereço, a inscrição municipal e a <br />
                  área total do terreno têm um espaço <br />
                  específico para preenchimento. O pre-<br />
                  enchimento do campo ‘Situação em <br />
                  31/12/2022’ funciona assim: se o imóvel <br />
                  foi financiado em 2023 preencha esse <br />
                  campo com ‘R$ 0’. Se foi financiado<br />
                  antes de 2023 permanece o mesmo <br />
                  valor declarado no início de 2023. <br />
                  Já no campo ‘Situação em 31/12/2023’, <br />
                  se o imóvel foi financiado em 2023 <br />
                  coloque o valor da entrada mais as <br />
                  parcelas já pagas. Se financiou antes<br />
                  de 2023, você precisa somar o valor <br />
                  declarado em 2022 com as parcelas <br />
                  adicionais que foram pagas.

                </span>
              </div>
              :
              <div className="flex m-4">
                <span className="title">Declarar imóvel financiado no imposto de renda</span><p />
                <span className="texto">
                  Imposto de renda é uma tarefa muito importante e que pode ser muito <br />
                  complicada, ainda mais quando você precisa declarar um
                  <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> imóvel financiado. <br /></a>

                  Duas coisas que você precisa saber: a primeira é que um
                  <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> financiamento <br /> imobiliário </a>

                  não deve ser declarado como uma dívida, a segunda é que <br />
                  você não deve colocar o valor total do
                  <a href='https://www.instagram.com/barboempreendimentos/' target="_blank"> financiamento </a>

                  , pois esse valor pode mudar.<br />
                  Você precisa declarar somente o valor pago até o momento, isso inclui <br />
                  a entrada, as prestações já quitadas, os impostos, custos de corretagem, <br />
                  e por aí vai, mas nunca as parcelas que ainda serão pagas no futuro.<br />
                  Para facilitar a sua declaração preste atenção: Imóveis devem ser discriminados <br />
                  na ficha de ‘Bens e Direitos’.
                  <a href='/barbo/empreendimentos_interna' target="_blank"> Os apartamentos </a>

                  ficam na linha 11, casas na linha <br />
                  12 e terrenos na linha 13. Não esqueça de fornecer o máximo de informações. <br />
                  O endereço, a inscrição municipal e a área total do terreno têm um espaço <br />
                  específico para preenchimento.<br />
                  O preenchimento do campo ‘Situação em 31/12/2022’ funciona assim: <br />
                  se o imóvel foi financiado em 2023 preencha esse campo com ‘R$ 0’. <br />
                  Se foi financiado antes de 2023 permanece o mesmo valor declarado <br />
                  no início de 2023. Já no campo ‘Situação em 31/12/2023’, se o imóvel <br />
                  foi financiado em 2023 coloque o valor da entrada mais as parcelas já pagas. <br />
                  Se financiou antes de 2023, você precisa somar o valor declarado em 2022 <br />
                  com as parcelas adicionais que foram pagas.

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
                <CardIluminacao image={iluminacao}
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
    </ScrollableAnchor>
  );
}

export default ArtigoImposto;
