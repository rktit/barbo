import React, { Fragment, useEffect } from "react";

import {MenuLs, BannerLs, BadgesLs, Parceiros, ListaTratores, ConsorcioLs, FormCatalogoLs, ImplementosLs, PecasLs, PosVendaLs, NewsletterLs, FooterLs, HeaderLS} from "container";
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
      <BannerLs />
      {/* <BadgesLs /> */}
      <ConsorcioLs/>
      <ImplementosLs/>
      {/* <Parceiros/> */}
      <ListaTratores />
      <HeaderLS />
      {/* <FormCatalogoLs/> */}
      <PecasLs/>
      {/* <PosVendaLs/> */}
      {/* <NewsletterLs/> */}
      <FooterLs />
    </Fragment>
  );
};

export default PortalCorretor_Page;
