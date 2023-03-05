import React, { useState } from 'react';
import Content from "./style";


function CardMP(props) {

  const [modalShow, setModalShow] = useState(false);
  const [nomeModelo, setNomeModelo] = useState("");

  function abreModal(modelo) {
    setNomeModelo(modelo);
    setModalShow(true);
  }


  return (
    <Content>
      <button className="card" onClick={() => { window.location.href = 'https://alakadim.com.br/morada-do-porto/' }} >        
      <img src={props.image} className="card-img-top" />
        <div className="card-body">
          <div className="card-title col-12">
            {props.title}
          </div>
          <div className="col-12 card-items">
            {props.items}
          </div>
          <div className="col-12 card-text">
            {props.text}
          </div>
          <div className="btn d-flex col-12">
            <a href="https://alakadim.com.br/morada-do-porto/">Mais informações</a>
          </div>
        </div>
      </button>
    </Content>
  );
}

export default CardMP;