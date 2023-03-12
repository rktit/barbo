import React, { useState } from 'react';
import Content from "./style";


function CardIluminacao(props) {

  const [modalShow, setModalShow] = useState(false);
  const [nomeModelo, setNomeModelo] = useState("");

  function abreModal(modelo) {
    setNomeModelo(modelo);
    setModalShow(true);
  }


  return (
    <Content>
      <div className="card">
        <img src={props.image} className="card-img-top" alt="Iluminação" />
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
          <div className="btn1 d-flex">
            <a href="/barbo/iluminacao">Ver mais</a>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default CardIluminacao;