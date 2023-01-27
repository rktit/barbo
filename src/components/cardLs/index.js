import ModalTratores from 'components/modalTratores';
import React, {useState} from 'react';
import Content from "./style";

function CardLs(props) {

  const [modalShow, setModalShow] = useState(false);

  const [nomeModelo, setNomeModelo] = useState("");

  function abreModal(modelo){
    setNomeModelo(modelo);
    setModalShow(true);
  }


    return (
      <Content>
        <div class="card">
            <img src={props.image} class="card-img-top" alt="Imagem maquina"/>
            <div class="card-body col-12">
                <div class="card-title col-12">
                  {props.title}
                </div>
                <div class="card-text col-12">
                  {props.text}
                </div>
                <div className="col-12 mt-4">
                <a href="/barbo/empreendimentos_interna" class="btn btn-primary" onClick={() => { abreModal(props.title) }}>Mais informações...</a>
                </div>
            </div>
        </div>
        <ModalTratores name={nomeModelo}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Content>
    );
  }

  export default CardLs;