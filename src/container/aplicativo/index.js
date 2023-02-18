import React, { useEffect, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Content from "./style";

import whats from 'images/icons/icone-whatsapp-fundo.png'

export default function Page(props) {
  return (
    <ScrollableAnchor id={'aplicativo'}>
      <div className="fixed whats-message">
        <a
          target="_blank"
          href="https://wa.me/message/NIRO6DB4APXMG1"
        >
          <img
            className="flex items-start md:items-end mr-2 md:mr-28 w-14 md:w-20"
            src={whats}
            alt="Whatsapp"
          />
        </a>
        
      </div>
    </ScrollableAnchor>

  )
}