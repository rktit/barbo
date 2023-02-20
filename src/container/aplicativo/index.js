import React, { useEffect, useState } from "react";
import Content from './style';

import whats from "images/icons/ico-whatsapp-white.png"

export default function Aplicativo() {

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);


  return ( 
  <Content className='col-10 text-center'>
    {/* <div>
						<Icon.InfoCircle color='#FFFFFF' size={36} className='mr-3 d-none d-md-block'/>
				</div> */}
    <button>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=5519996965525&text=Gostaria de falar com um consultor?">
        Fale com um consultor
      </a>
    </button>
    <button>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=5519996965525&text=Gostaria de falar com um consultor?">
        Simule seu financiamento
      </a>
    </button>
    <button>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=5519996965525&text=Gostaria de falar com um consultor?">
        <img src={whats} />
        Telefone +55 (19) 9.9696-5525
      </a>
    </button>
    {/* <div className='align-items-stretch'>
						<button onClick={closeFlashMessage} className='ml-3 h-100'>Continuar</button>
				</div> */}
  </Content>
  )
}
