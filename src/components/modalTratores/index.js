import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Content from "./style";

import styles from "./styles.css";

import fechar from "images/statics/modalLs/botao-fechar.png";
import foto_serieR from "images/statics/modalLs/serieR.png";
import foto2_serieR from "images/statics/modalLs/serieR2.png";
import foto3_serieR from "images/statics/modalLs/serieR3.png";
import foto_serieH from "images/statics/modalLs/serieH.png";
import foto2_serieH from "images/statics/modalLs/serieH2.png";
import foto3_serieH from "images/statics/modalLs/serieH3.png";
import foto_seriePlus from "images/statics/modalLs/seriePlus.png";
import foto2_seriePlus from "images/statics/modalLs/seriePlus2.png";
import foto3_seriePlus from "images/statics/modalLs/seriePlus3.png";
import foto_serieU from "images/statics/modalLs/serieU.png";
import foto2_serieU from "images/statics/modalLs/serieU2.png";
import foto3_serieU from "images/statics/modalLs/serieU3.png";
import foto_serieG from "images/statics/modalLs/serieG.png";
import foto2_serieG from "images/statics/modalLs/serieG2.png";
import foto3_serieG from "images/statics/modalLs/serieG3.png";
import foto_serieM from "images/statics/modalLs/serieM.png";
import foto2_serieM from "images/statics/modalLs/serieM2.png";
import foto3_serieM from "images/statics/modalLs/serieM3.png";


function ModalTratores(props) {

    let foto, foto2, foto3, name, text1, text2;
    switch(props.name){
      case 'Série R':
        foto = foto_serieR;
        name = props.name;
        foto2 =  foto2_serieR;
        foto3 =  foto3_serieR;
        text1 = 
          <div> 
            Apesar de compactos, os modelos da série R da LS Tractor não economizam na potência
             e eficiência para médios produtores. Os modelos são ideais para 
             potencializar qualquer produção.<br/><br/>
            Tecnologia, força e robustez. Sobram adjetivos para as máquinas da série R.
          </div>
        text2 = 
          <div>
            R65 Cabinado  - R65 Cabinado Estreito<br/>
            R65 Plataformado - R65 Plataformado Estreito<br/>
            R 50 Plataformado<br/>
          </div>
        break;
      case 'Série H':
        foto = foto_serieH;
        foto2 = foto2_serieH;
        foto3= foto3_serieH;
        name = props.name;
        text1 = 
          <div>
            A principal característica da série é a sua construção robusta, que confere aos tratores uma grande capacidade de tração. 
            Desenvolvidos para suportarem longas jornadas em operações severas e uma excelente vida útil garantida por um sistema de proteção eletrônica do motor.
            Para mover essas máquinas, adotamos os Motores Perkins, de potência e torque elevados. Eles foram desenvolvidos para as condições mais severas, impostas pela diversidade da agricultura brasileira.
          </div>
        text2 =   
          <div>
            H Cabinado<br/>
          </div>
        break;
      case 'Série Plus':
        foto = foto_seriePlus;
        foto2 = foto2_seriePlus;
        foto3= foto3_seriePlus;
        name = props.name;
        text1 = 
          <div>
            Os modelos da LS Tractor Série Plus, além de ideais para o trabalho no campo ainda são econômicos, 
            pois consomem pouco combustível e também possuem baixa emissão de poluentes, 
            em comparação com os modelos de marcas concorrentes.<br/><br/>
            Além disso, demostram excelente desempenho até mesmo em terrenos irregulares. 
            Para os modelos da Série Plus, qualquer terreno é terreno.<br/><br/>
          </div>
        text2 =   
          <div>
            Plus 80 Cabinado - Plus 90 Cabinado<br/>
            Plus 100 Cabinado - Plus 80 Plataformado<br/>
            Plus 90 Plataformado - Plus 100 Plataformado<br/>
          </div>
        break;
      case 'Série U':
        foto = foto_serieU;
        foto2 = foto2_serieU;
        foto3= foto3_serieU;
        name = props.name;
        text1 = 
          <div>
            Uma máquina que combina tecnologia de ponta com a força e a potência de um motor de alto desempenho. 
            Estes são os modelos da Série U da LS Tractor, equipados para potencializar os seus resultados de 
            maneira completa e durável.<br/><br/>
            Seu sistema hidráulico de centro aberto possui válvulas de controle remoto, atendendo à 
            necessidade do condutor a qualquer momento. O motor de 4 cilindros garante alta performance 
            com o mínimo de vibração e ruídos, e a transmissão 16F x 16R. 32F x 16R proporciona versatilidade 
            a qualquer operação.
          </div>
        text2 =   
          <div>
            U 80 Cabinado - U 60 Cabinado<br/>
            U 80 Cabinado - U 60 Cabinado Plataformado<br/>
          </div>
        break;
      case 'Série G':
        foto = foto_serieG;
        foto2 = foto2_serieG;
        foto3= foto3_serieG;
        name = props.name;
        text1 = 
          <div>
            São projetados para utilização em médias e grandes propriedades, 
            com um nível tecnológico superior. A TDP Independente é facilmente operada a partir de 
            uma tecla no painel de instrumentos.<br/><br/>
            Além disso, conta com um motor LS Tractor potente, com estrutura forte e de longa duração. 
            Tudo isso para uma agricultura conectada e um alto padrão de conforto.
          </div>
        text2 =   
          <div>
            G40 Plataformado<br/>
          </div>
        break;
      case 'Série MT1.25':
        foto = foto_serieM;
        foto2 = foto2_serieM;
        foto3= foto3_serieM;
        name = props.name;
        text1 = 
          <div>
            Desenvolvidos para facilitar o trabalho com rapidez e sem esforço, 
            os modelos da série MT1.25 da LS Tractor proporcionam agilidade na mudança 
            de direção e são equipados com os motores YANMAR, de potência e desempenho confiáveis.<br/><br/>
            Tudo isso demonstrando alta eficiência e baixo consumo de combustível, 
            além de possuir a Tecnologia Tier4 - Eco-amigável.
          </div>
        text2 =   
          <div>
            MT1.25 Plataformado<br/>
          </div>;
        break;
    }

    return (
      <Content>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="p-0">
          <button className="btn-fechar" onClick={props.onHide}><img className="fechar" src={fechar} alt="fechar"/></button>
            <div className="conteudo">
              <div className="image-side col-12 col-md-6" 
                  p={0}
                  style={{backgroundImage: `url(${foto})`}}
              >
                {/* <div>
                    <img className="imagem1" src={foto} alt="Trator LS"/>
                </div> */}
              </div>
              <div className="text-side px-3">
                <div className="topo py-2">
                  <div className="name py-2 col-10">
                    { name }
                  </div>
                  
                </div>
                <div className="title"><strong>Diferenciais</strong></div>
                <div className="texto py-2">
                  { text1 }
                </div>
                <div className="title pb-2"><strong>Modelos</strong></div>
                <div className="texto" id="texto2">
                  {text2}
                </div>
                <div className="row mb-4">
                  <img className="imagem2" src={foto2} alt="" style={{marginRight:"20px"}} />
                  <img className="imagem2" src={foto3} alt=""/>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Content>
    );
  }

  export default ModalTratores;