import React, { useState } from 'react';
import Content from "./style";


function VistaAerea
  (props) {

  const [modalShow, setModalShow] = useState(false);
  const [nomeModelo, setNomeModelo] = useState("");

  function abreModal(modelo) {
    setNomeModelo(modelo);
    setModalShow(true);
  }


  return (
    <Content>
      <div className="card">
        <img src={props.image} className="card-img-top" />
      </div>
    </Content>
  );
}

export default VistaAerea
  ;