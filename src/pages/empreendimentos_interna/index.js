import React, { Fragment, useEffect } from "react";
import { configureAnchors } from "react-scrollable-anchor";

import {MenuLs, BannerEmpreendimento, Tour, Empreendimento, Plantas, Mapa, FooterLs} from "container";
import { FlashMessageCookies, ModalPolitica } from 'components';

const EmpreendimentosInterna_Page = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => { }, []);

  return (
    <Fragment>
      <ModalPolitica />
      <MenuLs />
      <BannerEmpreendimento />
      <Empreendimento />
      <Plantas />
      <Tour />
      <Mapa />
      <FooterLs />
    </Fragment>
  );
};

export default EmpreendimentosInterna_Page;
