import React, { Fragment, useEffect } from "react";
import { configureAnchors } from "react-scrollable-anchor";

import {Menu, BannerEmpreendimento, Empreendimento, Plantas, Mapa, Footer} from "container";
import { FlashMessageCookies, ModalPolitica } from 'components';

const EmpreendimentosInterna = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => { }, []);

  return (
    <Fragment>
      <ModalPolitica />
      <Menu />
      <BannerEmpreendimento />
      <Empreendimento />
      <Plantas />
      <Mapa />
      <Footer />
    </Fragment>
  );
};

export default EmpreendimentosInterna;
