import ModalMaquinas from 'components/modalMaquinas';
import React, {useState} from 'react';
import Content from "./style";

function Card(props) {

  const [modalShow, setModalShow] = useState(false);

  const [nomeModelo, setNomeModelo] = useState("");

  function abreModal(modelo){
    setNomeModelo(modelo);
    setModalShow(true);
  }


    return (
      <Content>
        <div className="card">
            <img src={props.image} className="card-img-top" alt="Imagem maquina"/>
            <div className="card-body col-12">
              <div className="card-title col-12">
                {props.title}
              </div>
              <div className="col-12 card-text">
                {props.text}
              </div>
              <div className="col-12 mt-4">
                <a href="#" className="btn btn-primary" onClick={() => { abreModal(props.title) }}>Ver mais</a>
              </div>
                
            </div>
        </div>
        <ModalMaquinas name={nomeModelo}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Content>
    );
  }

  export default Card;