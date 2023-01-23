import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Zoom from "react-reveal/Zoom";

import logo from "images/logo/jacto-consorcio.jpg"
import economia from "images/icons/economia.png";
import burocracia from "images/icons/burocracia.png";
import liberdade from "images/icons/liberdade.png";
import icone_whatsapp_fundo from "images/icons/icone-whatsapp-fundo.png";

function Badges() {

    const [isMobile, setMobile] = useState(false);

  useEffect(() => {
      if (window.innerWidth >= 992) {
              setMobile(false);
      } else {
              setMobile(true);
      }
  }, [window.innerWidth]);

  return (
      <ScrollableAnchor id="consorcio">
        <Content className="col-12">
            <div className="topo col-10  mb-4">
                <div className="left">
                    { isMobile ? 
                        ""
                        :
                        <div className="demarcador"></div>
                    }
                    
                    <div className="title ml-md-5">Consórcio Jacto</div>
                    <div className="title2 ml-md-5 mt-md-2">Você pode comprar seu implemento agrícola Jacto, com Planos Especiais:</div>
                </div>
                <div className="right">
                    <img className="logo" src={logo} alt="logo Jacto Consórcio nacional"/>
                </div>
            </div>
            <div className="col-12 col-md-10 mt-2">
                <div className="conteudo row col-12">
                    <div className="icones col-12 col-md-4">
                        <img className="image" style={{width:"75px"}} src={economia} alt="Economia"/><br/>
                        <span style={{marginTop:"-10px"}}><strong>ECONOMIA</strong></span>
                        <span className="infos">
                            - Sem entrada e Sem Juros;
                            <br/><br/>
                            - Paga Somente taxa de administração fixa<br/>de forma diluída.
                        </span>
                    </div>
                    <div className="icones col-12 col-md-4">
                        <img className="image" src={burocracia} alt="Sem burocracia"/>
                        <span style={{marginTop:"10px"}}><strong>SEM BUROCRACIA</strong></span>
                        <span className="infos">
                            - Não é preciso comprovar<br/>renda nem avalista;
                            <br/><br/> 
                            - Cadastro analisado apenas<br/>na contemplação e liberação<br/>do crédito.
                        </span>
                    </div>
                    <div className="icones col-12 col-md-4">
                        <img className="image" style={{width:"75px"}} src={liberdade} alt="Mais liberdade" />
                        <span style={{marginTop:"10px"}}><strong>MAIS LIBERDADE</strong></span>
                        <span className="infos">
                            - O contemplado tem total<br/>liberdade para escolher marca<br/>e modelo;
                            <br/><br/>
                            - A escolha pode ser nacional<br/>ou importado, usado ou 0 KM.
                        </span>
                    </div>
                </div>
                <div className="texto mb-5">    
                    Mais de 7 milhões de pessoas participam de consórcios em todo o Brasil.<br/>
                    Fiscalizado pelo Banco Central do Brasil, mais garantia e segurança para você.
                </div>
                <div className="boxBtn row">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?" className="shadow btn mb-4 d-flex align-items-center">
                    Solicite agora uma consulta
                </a>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?">
                    <img className="icone_whatsapp mr-1" src={icone_whatsapp_fundo} alt="Whatsapp"/>
                </a>
                
              </div>
            </div>
        </Content>
      </ScrollableAnchor>
  );
}

export default Badges;
