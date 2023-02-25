import React, { useState } from 'react';
import Content from "./style";


function CardOffice(props) {

  const [modalShow, setModalShow] = useState(false);
  const [nomeModelo, setNomeModelo] = useState("");

  function abreModal(modelo) {
    setNomeModelo(modelo);
    setModalShow(true);
  }


  return (
    <Content>
      <button className="card" onClick={() => { window.location.href='/barbo/office_tower'}} >
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
            <a href="/barbo/office_tower">Ver mais</a>
          </div>
        </div>
      </button>
    </Content>
  );
}

export default CardOffice;