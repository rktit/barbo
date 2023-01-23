import React from "react";
import Content from "./style";

import icon_facebook from "images/icons/icon_facebook.png";
import icon_instagram from "images/icons/icon_instagram.png";
import icon_youtube from "images/icons/icon_youtube.png";

function HeaderLS(props) {

  return (
   <Content className="d-flex justify-content-center">
       <div className="boxHeaderLS col-9 justify-content-between">
        <div className="text-left">Concessionária de tratores</div>
        <div className="icones row ">
            <a className="mx-2" href='https://www.instagram.com/babro/' target="_blank"><img src={icon_instagram} alt="instagram"/></a>
            <a className="mx-2" href='https://pt-br.facebook.com/babro/' target="_blank"><img src={icon_facebook} alt="facebook"/></a>
            <a className="mx-2" href='https://www.youtube.com/channel/UCZBSlIsy4JyqkdrdG8cPRaw' target="_blank"><img src={icon_youtube} alt="youtube"/></a>
            <a className="text-right"
               target="_blank" 
               href="https://api.whatsapp.com/send?phone=5515997831666&text=Gostaria de falar com um consultor?"
            >
              | Entre em contato (15) 99783.1666
            </a>
        </div>
       </div>
   </Content>
  );
}

export default HeaderLS;
