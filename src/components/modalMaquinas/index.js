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
            ??? Qualidade da aplica????o, mant??m a press??o correta do circuito;<br/>
            ??? Cobertura eficiente, em culturas de porte baixo e alto;<br/>
            ??? Agilidade na pulveriza????o, maior volume de ar.
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
            ??? Tecnologia, controle eletr??nico da pulveriza????o;<br/>

            ??? Menor compacta????o com m??xima produtividade; <br/>

            ??? For??a e desempenho no campo;<br/>

            ??? Rendimento operacional: maior produtividade com menor custo;<br/>

            ??? Abastecimento f??cil e r??pido de operar.<br/>
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
      case 'Colhedora de caf??':
        foto = foto_colhedora;
        foto2 = foto2_colhedora;
        name = props.name;
        text1 = 
          <div>
              Alta efici??ncia de derri??a;<br/>
            ??? Baixo ??ndice de perdas de caf??; <br/>
            ??? Reservat??rio grande, mais tempo colhendo e menos tempo manobrando;<br/>
            ??? Alto rendimento operacional.
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
            ??? Alto rendimento;<br/>
            ??? Aplica????o com controle de bordadura;<br/>
            ??? Precis??o de dosagem e distribui????o;<br/>
            ??? Discos e p??s com design exclusivo;<br/>
            ??? Economia de fertilizantes e prote????o ambiental.<br/>
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
            ??? Agilidade e economia;<br/>
            ??? Uniformidade e rendimento operacional nas aplica????es;<br/>
            ??? Tanque resistente aos impactos e corros??es;<br/>
            ??? Menos paradas, bomba de pist??es altamente resistentes.<br/>
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
             Alta resist??ncia e praticidade;<br/>
            ??? Custo reduzido de manuten????o;<br/>
            ??? Estabilidade para as opera????es;<br/>
            ??? Maior produ????o di??ria com excelente custo-benef??cio.<br/>
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
            ??? Agilidade na pulveriza????o;<br/>
            ??? Man??metro simples e dur??vel;<br/>
            ?????Cobertura eficiente, distribui????o divergente do ar; <br/>
            ??? Reservat??rio em polietileno, resistente ?? corros??o.<br/>
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
            ??? F??cil manuten????o;<br/>
            ??? Pulveriza????o uniforme;<br/>
            ??? Comando simples e eficiente;<br/>
            ??? Porta Bico Bijet ou Antigotejo (opcionais).<br/>
          </div>
        text2 =   
          <div>
            Arbus 4000<br/>
            Arbus 2000 TP<br/>
          </div>
        break;
      case 'Pulverizador canh??o acoplado':
        foto = foto_canhao_acoplado;
        foto2 = foto2_canhao_acoplado;
        name = props.name;
        text1 = 
          <div>
            ??? Baixa manuten????o, leve e robusto;<br/>
            ??? Pulveriza????o ??gil e de longo alcance;<br/>
            ??? Altamente resistente ?? corros??o;<br/>
            ??? Eficiente e pr??tico.<br/>
          </div>
        text2 =   
          <div>
            AJ 401<br/>
            Jat??o 400<br/>
            Jat??o 600
          </div>
        break;
      case 'Pulverizador canh??o carreta':
        foto = foto_canhao_carreta;
        foto2 = foto2_canhao_carreta;
        name = props.name;
        text1 = 
          <div>
            ???Vers??til, pode ser utilizado em v??rias culturas e aplica????es n??o-agr??colas;<br/>
            ??? Duto de ar de f??cil regulagem;<br/>
            ???Proporciona estabilidade e conforto na opera????o.<br/>
          </div>
        text2 =   
          <div>
            Jat??o 2000<br/>
          </div>
        break;
      case 'Pulverizador especial acoplado':
        foto = foto_especial_acoplado;
        foto2 = foto2_especial_acoplado;
        name = props.name;
        text1 = 
          <div>
            ??? Press??o na medida certa, sem sobrecarga;<br/>
            ??? Alta resist??ncia e praticidade;<br/>
            ??? Alto rendimento operacional di??rio comparado com aplica????es manuais;<br/>
            ??? Menos paradas, bomba de pist??es altamente resistente.<br/>
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