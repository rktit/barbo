import React, { useEffect, useState } from "react";
import Content from './style';
import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';

import { Financiamento, Corretor } from "container";

import whats from "images/icons/ico-whatsapp-white.png"

let limit_scroll = 450;
let limit_scroll_header = 250;

const Aplicativo = (props) => {

  const dispatch = useDispatch()

  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [active, setActive] = useState('#');
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setShowMenu(true);
      setMobile(false);
    } else {
      setMobile(true);
      dispatch(Actions.close_modal('black'));
      limit_scroll = 50;
    }
  }, [window.innerWidth]);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    }
  }, [])

  function listenToScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    // console.log('winScroll', winScroll);
    setScroll(winScroll);
  }

  const updateMenu = () => {
    const { innerWidth: width } = window;
    if (width >= 992) {
      setShowMenu(true);
    } else {
      setShowMenu(!showMenu);
    }
  };

  const clickMenu = (link) => {
    setActive(link);
    if (isMobile) {
      setShowMenu(false);
    }
  };
  const [modalShowCorretor, setModalShowCorretor] = useState(false);
  const [modalShowFinanciamento, setmodalShowFinanciamento] = useState(false);
  const [nomeModelo, setNomeModelo] = useState("");

  function abreModal(modelo) {
    setNomeModelo(modelo);
    if (modelo = "Corretor") {
      setModalShowCorretor(true);
    }
    if (modelo = "Financiamento") {
      setmodalShowFinanciamento(true);
    }
  }


  return (
    <Content className='col-10 text-center'>
      {/* <Button
        className="conteudo btn-danger ml-2"
        type="button"
        onClick={() => handleShow(item.enterprise[0].id)}
      >
      </Button> */}


      <button className='conteudo'>
        <a href="#fale-corretor" onClick={() => abreModal(Actions.toggle_modal('corretor'))}>Fale com o corretor</a>
      </button>

      <button className='conteudo'>
        <a href="#simule-financiamento" onClick={() => abreModal(Actions.toggle_modal('financiamento'))}>Simule seu financiamento</a>
      </button>
      <Financiamento name={nomeModelo}
        show={modalShowFinanciamento}
        onHide={() => setmodalShowFinanciamento(false)}
      />
      <Financiamento />

      <button>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5519996965525&text=Gostaria de falar com um corretor?">
          <img src={whats} />
          Atendimento via WhatsApp
        </a>
      </button>
    </Content>
    // if (setModalShowCorretor = true){
    //   <Corretor name={nomeModelo}
    //     show={modalShowCorretor}
    //     onHide={() => setModalShowCorretor(false)}
    //   />
    //   <Corretor />
    //   } 

  )
}
export default Aplicativo;
