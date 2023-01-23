import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Content from "./style";

import styles from "./styles.css";

import fechar from "images/statics/popups/botao-fechar.png";
import foto_especial_carreta from "images/statics/popups/pulverizador-especial-carreta3.png";
import foto2_especial_carreta from "images/statics/popups/pulverizador-especial-carreta2.png";
import foto_automotriz from "images/statics/popups/automotriz.jpg";
import foto2_automotriz from "images/statics/popups/automotriz2.jpg";
import foto_colhedora from "images/statics/popups/colhedora.jpg";
import foto2_colhedora from "images/statics/popups/colhedora2.jpg";
import foto_adubadora from "images/statics/popups/adubadora.jpg";
import foto2_adubadora from "images/statics/popups/adubadora2.jpg";
import foto_barra_acoplado from "images/statics/popups/barra-acoplado.jpg";
import foto2_barra_acoplado from "images/statics/popups/barra-acoplado2.jpg";
import foto_turbo_acoplado from "images/statics/popups/turbo_acoplado.jpg";
import foto2_turbo_acoplado from "images/statics/popups/turbo_acoplado2.jpg";
import foto_barra_carreta from "images/statics/popups/barra_carreta.jpg";
import foto2_barra_carreta from "images/statics/popups/barra_carreta2.jpg";
import foto_turbo_carreta from "images/statics/popups/turbo_carreta.jpg";
import foto2_turbo_carreta from "images/statics/popups/turbo_carreta2.jpg";
import foto_canhao_acoplado from "images/statics/popups/canhao_acoplado.jpg";
import foto2_canhao_acoplado from "images/statics/popups/canhao_acoplado2.jpg";
import foto_canhao_carreta from "images/statics/popups/canhao_carreta.jpg";
import foto2_canhao_carreta from "images/statics/popups/canhao_carreta2.jpg";
import foto_especial_acoplado from "images/statics/popups/especial_acoplado.jpg";
import foto2_especial_acoplado from "images/statics/popups/especial_acoplado2.jpg";

function ModalMaquinas(props) {

    let foto, foto2, name, text1, text2;
    switch(props.name){
      case 'Pulverizador especial carreta':
        foto = foto_especial_carreta;
        name = props.name;
        foto2 =  foto2_especial_carreta;
        text1 = 
          <div> 
            Robustez e versatilidade;<br/>
            • Qualidade da aplicação, mantém a pressão correta do circuito;<br/>
            • Cobertura eficiente, em culturas de porte baixo e alto;<br/>
            • Agilidade na pulverização, maior volume de ar.
          </div>
        text2 = 
          <div>
            Arbus 500<br/>
            Arbus 1000 <br/>
            Arbus 1500 / Arbus 1500 Diamond <br/>
            Arbus 2000 TF <br/>
          </div>
        break;
      case 'Pulverizador automotriz':
        foto = foto_automotriz;
        foto2 = foto2_automotriz;
        name = props.name;
        text1 = 
          <div>
            • Tecnologia, controle eletrônico da pulverização;<br/>

            • Menor compactação com máxima produtividade; <br/>

            • Força e desempenho no campo;<br/>

            • Rendimento operacional: maior produtividade com menor custo;<br/>

            • Abastecimento fácil e rápido de operar.<br/>
          </div>
        text2 =   
          <div>
            Uniport 2000 Plus<br/>
            Uniport 2030<br/>
            Uniport 2030 Canavieiro <br/>
            Uniport 2530<br/>
            Uniport 3030<br/>
            Uniport 3030 Canavieiro <br/>
            Uniport 3030 EletroVortex <br/>
            Uniport 4530<br/>
          </div>
        break;
      case 'Colhedora de café':
        foto = foto_colhedora;
        foto2 = foto2_colhedora;
        name = props.name;
        text1 = 
          <div>
              Alta eficiência de derriça;<br/>
            • Baixo índice de perdas de café; <br/>
            • Reservatório grande, mais tempo colhendo e menos tempo manobrando;<br/>
            • Alto rendimento operacional.
          </div>
        text2 =   
          <div>
            K 3500<br/>
            KTR 3500
          </div>
        break;
      case 'Adubadora':
        foto = foto_adubadora;
        foto2 = foto2_adubadora;
        name = props.name;
        text1 = 
          <div>
            • Alto rendimento;<br/>
            • Aplicação com controle de bordadura;<br/>
            • Precisão de dosagem e distribuição;<br/>
            • Discos e pás com design exclusivo;<br/>
            • Economia de fertilizantes e proteção ambiental.<br/>
          </div>
        text2 =   
          <div>
            Uniport 5030 NPK<br/>
            Tellus 10.000 NPK<br/>
            Uniport 3030 NPK<br/>
            SmartSet<br/>
          </div>
        break;
      case 'Pulverizador barra acoplado':
        foto = foto_barra_acoplado;
        foto2 = foto2_barra_acoplado;
        name = props.name;
        text1 = 
          <div>
            • Agilidade e economia;<br/>
            • Uniformidade e rendimento operacional nas aplicações;<br/>
            • Tanque resistente aos impactos e corrosões;<br/>
            • Menos paradas, bomba de pistões altamente resistentes.<br/>
          </div>
        text2 =   
          <div>
            Condor 800 M12<br/>
            Condor 800 AM12/AM14<br/>
            Condor 800 AM18<br/>
            Falcon AM14/Vortex<br/>
          </div>
        break;
      case 'Pulverizador barra carreta':
        foto = foto_barra_carreta;
        foto2 = foto2_barra_carreta;
        name = props.name;
        text1 = 
          <div>
             Alta resistência e praticidade;<br/>
            • Custo reduzido de manutenção;<br/>
            • Estabilidade para as operações;<br/>
            • Maior produção diária com excelente custo-benefício.<br/>
          </div>
        text2 =   
          <div>
            Advance 2000 AM18 / Advance 2000 AM18 Vortex<br/>
            Advance 3000 AM18 / Advance 3000 AM18 Vortex<br/>
            Advance 3000 AM21<br/>
            Advance 3000 AM24 / Advance 3000 AM24 Tandem Arroz<br/>
            Coral PEC<br/>
            Coral 2P/EM<br/>
            Coral B12<br/>
            Coral AM14<br/>
            Columbia Cross<br/>
            Columbia AD18<br/>
          </div>
        break;
      case 'Pulverizador turbo acoplado':
        foto = foto_turbo_acoplado;
        foto2 = foto2_turbo_acoplado;
        name = props.name;
        text1 = 
          <div>
            • Agilidade na pulverização;<br/>
            • Manômetro simples e durável;<br/>
            • Cobertura eficiente, distribuição divergente do ar; <br/>
            • Reservatório em polietileno, resistente à corrosão.<br/>
          </div>
        text2 =   
          <div>
            Arbus 200<br/>
            Arbus 300<br/>
          </div>
        break;
      case 'Pulverizador turbo carreta':
        foto = foto_turbo_carreta;
        foto2 = foto2_turbo_carreta;
        name = props.name;
        text1 = 
          <div>
            • Fácil manutenção;<br/>
            • Pulverização uniforme;<br/>
            • Comando simples e eficiente;<br/>
            • Porta Bico Bijet ou Antigotejo (opcionais).<br/>
          </div>
        text2 =   
          <div>
            Arbus 4000<br/>
            Arbus 2000 TP<br/>
          </div>
        break;
      case 'Pulverizador canhão acoplado':
        foto = foto_canhao_acoplado;
        foto2 = foto2_canhao_acoplado;
        name = props.name;
        text1 = 
          <div>
            • Baixa manutenção, leve e robusto;<br/>
            • Pulverização ágil e de longo alcance;<br/>
            • Altamente resistente à corrosão;<br/>
            • Eficiente e prático.<br/>
          </div>
        text2 =   
          <div>
            AJ 401<br/>
            Jatão 400<br/>
            Jatão 600
          </div>
        break;
      case 'Pulverizador canhão carreta':
        foto = foto_canhao_carreta;
        foto2 = foto2_canhao_carreta;
        name = props.name;
        text1 = 
          <div>
            •Versátil, pode ser utilizado em várias culturas e aplicações não-agrícolas;<br/>
            • Duto de ar de fácil regulagem;<br/>
            •Proporciona estabilidade e conforto na operação.<br/>
          </div>
        text2 =   
          <div>
            Jatão 2000<br/>
          </div>
        break;
      case 'Pulverizador especial acoplado':
        foto = foto_especial_acoplado;
        foto2 = foto2_especial_acoplado;
        name = props.name;
        text1 = 
          <div>
            • Pressão na medida certa, sem sobrecarga;<br/>
            • Alta resistência e praticidade;<br/>
            • Alto rendimento operacional diário comparado com aplicações manuais;<br/>
            • Menos paradas, bomba de pistões altamente resistente.<br/>
          </div>
        text2 =   
          <div>
            Condorito 400<br/>
            Condorito 600 / Condor 600 AM12/AM14<br/>
            Arbus 400<br/>
            Arbus 400 Kit PH<br/>
            Condorito EM<br/>
            Condor EM<br/>
            BC 610 PEC<br/>
            PH 400<br/>
            PJ401<br/>
          </div>
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
              <div className="image-side col-12 col-md-7" 
                  p={0}
                  style={{backgroundImage: `url(${foto})`}}>
                {/* <div>
                    <img className="foto" src={foto} alt="maquina jacto"/>
                </div> */}
              </div>
              <div>
                <div className="text-side mx-3">
                  <div className="topo py-2">
                    <div className="col-12 tituloTopo py-2 col-10">
                      { name }
                    </div>
                  </div>
                  <div className="tituloModal"><strong>Diferenciais</strong></div>
                  <div className="textoModal py-2">
                    { text1 }
                  </div>
                  <div className="tituloModal pb-2"><strong>Modelos</strong></div>
                  <div className="textoModal" id="texto2">
                    {text2}
                  </div>
                  <div>
                    <img className="foto2" src={foto2} alt=""/>
                  </div>
                </div>
              </div>
            </div>
            
          </Modal.Body>
        </Modal>
      </Content>
    );
  }

  export default ModalMaquinas;