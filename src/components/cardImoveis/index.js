import React, { useState } from 'react';
import Content from "./style";


function CardImoveis(props) {

  const [modalShow, setModalShow] = useState(false);
  const [nomeModelo, setNomeModelo] = useState("");

  function abreModal(modelo) {
    setNomeModelo(modelo);
    setModalShow(true);
  }


  return (
    <Content>
      <div className="card col-12 d-flex">
        <div className="love" alt="Favoritar">Pronto para morar</div>
        <img src={props.image} className="card-img-top"/>
        <div className="card-body col-12">
          <div className="card-title col-12">
            {props.title}
          </div>
          <div className="col-12 card-text">
            {props.text}
          </div>
          <div className="d-flex btn col-12">
            <a href="/barbo/empreendimentos_interna">Ver mais</a>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default CardImoveis;