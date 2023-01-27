import ModalMaquinas from 'components/modalMaquinas';
import React, { useState } from 'react';
import Content from "./style";

import love from "images/blog/love.png";
import gostar from "images/blog/gostar.png";
import comentario from "images/blog/comente.png";

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
        <img className="love" src={love} alt="Favoritar" />
        <img src={props.image} className="card-img-top" alt="Imagem maquina" />
        <div className="card-body col-12">
          <div className="col-12 card-items">
            {props.items}
          </div>
          <div className="card-title col-12">
            {props.title}
          </div>
          <div className="col-12 card-text">
            {props.text}
          </div>
          <div className="row">
            <div className="icones col-3">
              <img className="comente" src={comentario} alt="Comentários" />
            </div>
            <div className="icones col-3">
              <img className="favoritos" src={gostar} alt="Favoritos" />
            </div>
          </div>
          <div className="d-flex">
            <a href="#barbo/empreendimentos_interna">Ver mais</a>
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