import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import juros from "images/icons/icone-juros.png";
import calendario from "images/icons/icone-calendario.png";
import dinheiro from "images/icons/icone-dinheiro.png";
import credito from "images/icons/icone-credito.png";
import imgConsorcio from "images/statics/consorcio-ls.png";
import icone_whatsapp_fundo from "images/icons/icone-whatsapp-fundo.png";
import { Button } from "react-bootstrap";

function ConsorcioLs(props) {

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);

  return (
    <ScrollableAnchor id="assistencia_tecnica">
      <Content className="col-12 row justify-content-center">

        <Fade left>
          <div className="left-side mt-5">
            {isMobile ? ""
              :
              <div className=""></div>
              // <div className="demarcador"></div>

            }
            <div className="flex m-4">
              <span className="title">Nome do Empreendimento</span><p />
              <span className="texto">
              Somos movidos por planejar sonhos e transformar vidas. São <br />
              mais de 5.000 lares e empresas impactadas com a nossa entrega. <br />
              O relacionamento e transparência são parte do que chamamos <br />
              de comprometimento com o cliente. Missão essa que motiva e <br />
              impulsiona toda a nossa equipe a buscar por inovações e as <br />
              melhores formas de construir sonhos que se tornarão realidade.<p />
              Com mais de 10 anos de mercado, estamos criando narrativas e <br />
              dando continuidade a tantas outras. Histórias e pessoas que <br />
              acreditam em nosso trabalho e confiam que juntos podemos <br />
              construir uma sociedade ainda melhor.
              </span>
            </div>
            <div className="icones-empreendimentos my-5">

              <div className="icones">
                <img className="" src={juros} alt="garantia" />
                Apartamentos com<br /> 2 ou 3 suítes
              </div>
              <div className="icones">
                <img className="" src={calendario} alt="assistencia" />
                94 e 134m² de <br />área privativa
              </div>
              <div className="icones">
                <img className="" src={dinheiro} alt="serviço" />
                Apartamentos de <br />2 ou 3 dormitórios
              </div>
              <div className="icones pr-2">
                <img className="" src={credito} alt="serviço" />
                Com 2 ou 3 vagas <br />na garagem
              </div>
            </div>
            {/* <span className="texto">Produtividade garantida para seu agronegócio e garantia<br />para um futuro rentável a sua família. Tudo sem<br />comprometer o seu orçamento e seu limite de crédito.
            </span> */}

            {/* <div className="row">
              <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?" className="shadow btn mb-4 d-flex align-items-center justify-content-center">
                Solicite Agora
              </a>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?">
                <img className="icone_whatsapp mr-1" src={icone_whatsapp_fundo} alt="Whatsapp"/>
              </a>
            </div> */}

          </div>
        </Fade>
        <Fade right>
          <div className="image-side my-5">
            {/* <img className="imgConsorcio" src={imgConsorcio} alt="imagem Consorcio"/> */}
          </div>
        </Fade>
      </Content>
    </ScrollableAnchor>
  );
}

export default ConsorcioLs;
