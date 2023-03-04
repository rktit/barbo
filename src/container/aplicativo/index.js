import React, { useEffect, useState } from "react";
import Content from './style';
import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';


import whats from "images/icons/icone-whatsapp-fundo.png"

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


  return (
    <Content className='btn text-center'>
      <div className='conteudo'>
        <a onClick={() => clickMenu("barbo/empreendimentos")} className={active === "barbo/empreendimentos" ? 'active ' : ''}
          href="barbo/empreendimentos">
          Conheça nossos empreendimentos
        </a>
      </div>
      <div className='conteudo'>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5519996965525&text=Gostaria de falar com um corretor?">
          <img src={whats} />
          Atendimento via WhatsApp
        </a>
      </div>
      <div className='conteudo'>
        <a onClick={() => clickMenu("barbo/empreendimentos")} className={active === "https://alakadim.com.br/quinta-do-valle/" ? 'active ' : ''}
          href="https://alakadim.com.br/quinta-do-valle/">
          Último lançamento
        </a>
      </div>

    </Content>
  )
}
export default Aplicativo;
