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
      <div className="card">
        <div className="love" alt="Favoritar">Pronto para morar</div>
        <img src={props.image} className="card-img-top" alt="Imagem maquina" />
        <div className="card-body col-12">
          <div className="card-title col-12">
            {props.title}
          </div>
          <div className="col-8 card-text">
            {props.text}
          </div>
          <div className="d-flex btn justify-content-center">
            <a href="/barbo/empreendimentos_interna">Ver mais</a>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default CardImoveis;