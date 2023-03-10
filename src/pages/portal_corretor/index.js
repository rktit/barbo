import React, { Fragment, useEffect } from "react";

import {MenuLs, BannerPortal, Portal, Contato, Corretor, FooterLs, HeaderLS} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {FlashMessageCookies, ModalPolitica} from 'components';

const PortalCorretor_Page = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <MenuLs/>
      <BannerPortal />
      <Contato/>
      <Portal />
      <HeaderLS />
      <Corretor/>
      <FooterLs />
    </Fragment>
  );
};

export default PortalCorretor_Page;
