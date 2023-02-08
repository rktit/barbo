import React, { useState } from 'react';
import Content from "./style";

function Card(props) {

  const [modalShow, setModalShow] = useState(false);
  const [nomeModelo, setNomeModelo] = useState("");

  function abreModal(modelo) {
    setNomeModelo(modelo);
    setModalShow(true);
  }


  return (
    <Content>
      <div className="card">
        <img src={props.image} className="card-img-top"/>
        <div className="card-body col-10">
          <div className="col-12 card-items">
            {props.items}
          </div>
          <div className="card-title col-12">
            {props.title}
          </div>
          <div className="col-12 card-text">
            {props.text}
          </div>
          <div className="card-mais d-flex">
            <a href="/barbo/empreendimentos_interna">Mais informações...</a>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Card;