import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import shower from "images/empreendimento_interna/shower.png";
import area from "images/empreendimento_interna/area.png";
import doubleBed from "images/empreendimento_interna/double-bed.png";
import garage from "images/empreendimento_interna/garage.png";

function Artigo(props) {

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
            {/* <div className="icones-empreendimentos my-5">

              <div className="icones">
                <img className="" src={shower} alt="garantia" />
                Apartamentos com<br /> 2 ou 3 suítes
              </div>
              <div className="icones">
                <img className="" src={area} alt="assistencia" />
                94 e 134m² de <br />área privativa
              </div>
              <div className="icones">
                <img className="" src={doubleBed} alt="serviço" />
                Apartamentos de <br />2 ou 3 dormitórios
              </div>
              <div className="icones pr-2">
                <img className="" src={garage} alt="serviço" />
                Com 2 ou 3 vagas <br />na garagem
              </div>
            </div> */}
          </div>
        </Fade>
        <Fade right>
          <div className="image-side">
          </div>
        </Fade>
      </Content>
    </ScrollableAnchor>
  );
}

export default Artigo;
