import React, { useState } from 'react';
import Content from "./style";


function CardHigienopolis(props) {

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
        <img src={props.image} className="card-img-top" />
        <div className="card-body">
          <div className="card-items">
            {props.items}
          </div>
          <div className="card-title">
            {props.title}
          </div>
          <div className="card-text">
            {props.text}
          </div>
          <div className="card-text">
            {props.text1}
          </div>
          <div className="d-flex btn col-12">
            <a href="/barbo/higienopolis">Ver Mais</a>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default CardHigienopolis;