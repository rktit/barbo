import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Content from "./style";

import styles from "./styles.css";

import fechar from "images/statics/modalLs/botao-fechar.png";
import baldan from 'images/statics/modalImplementos/baldan.png';
import casale from 'images/statics/modalImplementos/casale.png';
import herder from 'images/statics/modalImplementos/Herder.png';
import ipacol from 'images/statics/modalImplementos/Ipacol.png';
import jacto from 'images/statics/modalImplementos/jacto.png';
import jan from 'images/statics/modalImplementos/Jan.png';
import jf from 'images/statics/modalImplementos/JF.png';
import kamaq from 'images/statics/modalImplementos/Kamaq.png';
import lavrale from 'images/statics/modalImplementos/Lavrale.png';
import marispan from 'images/statics/modalImplementos/Marispan.png';
import miac from 'images/statics/modalImplementos/miac.png';
import nogueira from 'images/statics/modalImplementos/Nogueira.png';
import piccin from 'images/statics/modalImplementos/piccin.png';
import plantiCenter from 'images/statics/modalImplementos/planticenter.png';
import santaizabel from 'images/statics/modalImplementos/santaizabel.png';
import saojose from 'images/statics/modalImplementos/saojose.png';
import tatu from 'images/statics/modalImplementos/tatu.png';


function ModalImplementos(props) {

  const [isMobile, setMobile] = useState(false);
  const [ modalSize, setSize] = useState("sm");

  useEffect(() => {
      if (window.innerWidth >= 992) {
              setMobile(false);
              setSize("lg");
      } else {
              setMobile(true);
              setSize("sm");
      }
  }, [window.innerWidth]);

    let foto;
    switch(props.name){
      case 'baldan':
        foto = baldan;
        break;
      case 'casale':
        foto = casale;
        break;
      case 'herder':
        foto = herder;
        break;
      case 'ipacol':
        foto = ipacol;
        break;
      case 'jacto':
        foto = jacto;
        break;
      case 'jan':
        foto = jan;
        break;
      case 'jf':
        foto = jf;
        break;
      case 'kamaq':
        foto = kamaq;
        break;
      case 'lavrale':
        foto = lavrale;
        break;
      case 'marispan':
        foto = marispan;
        break;
      case 'miac':
        foto = miac;
        break;
      case 'nogueira':
        foto = nogueira;
        break;
      case 'piccin':
        foto = piccin;
        break;
      case 'plantiCenter':
        foto = plantiCenter;
        break;
      case 'santaizabel':
        foto = santaizabel;
        break;
      case 'saojose':
        foto = saojose;
        break;
      case 'tatu':
        foto = tatu;
        break;
    }

    return (
      <Content>
        <Modal
          {...props}
          size= {modalSize}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body p={0} >
            <div>
              <button className="btn-fechar" onClick={props.onHide}><img className="fechar" src={fechar} alt="fechar"/></button>
            </div>
            <div>
              <img src={foto} className="imagem" />
            </div>
            
          </Modal.Body>
        </Modal>
      </Content>
    );
  }

  export default ModalImplementos;