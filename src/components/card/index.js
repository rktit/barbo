import React, { useEffect, useState } from "react";
import Content from "./style";

import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';

let limit_scroll = 450;
let limit_scroll_header = 250;

function Card(props) {
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

  return (
    <Content>
      <div class="card">
        <img src={props.image} class="card-img-top" alt="Empreendimento" />
        <div class="card-body col-12">
          <div class="card-title col-8">
            {props.title}
          </div>
          <div class="card-text col-8">
            {props.text}
          </div>
          <div className="btn btn-primary">
            <a onClick={() => clickMenu("/empreendimentos_interna")} className={active === "/empreendimentos_interna" ? 'active ' : ''}
              href="/empreendimentos_interna">Mais informações...</a>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Card;