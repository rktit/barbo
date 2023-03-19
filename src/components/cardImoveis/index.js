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
      <button className="card col-12 d-flex">
        {/* <div className="love" alt="Favoritar">Pronto para morar</div> */}
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
            <a href={props.btn}> Ver mais</a>
            {/* <a href={"/barbo/empreendimentos_interna"}>Ver mais</a> */}
          </div>
        </div>
      </button>
    </Content>
  );
}

export default CardImoveis;