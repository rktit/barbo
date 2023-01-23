import React, { Fragment, useEffect } from "react";

import {MenuLs, BannerLs, ListaTratores, ConsorcioLs, ImplementosLs, PecasLs, FooterLs, HeaderLS} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {ModalPolitica} from 'components';

const Empreendimentos_Page = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <MenuLs/>
      <BannerLs />
      <ConsorcioLs/>
      <ImplementosLs/>
      <ListaTratores />
      <HeaderLS />
      <PecasLs/>
      <FooterLs />
    </Fragment>
  );
};

export default Empreendimentos_Page;
