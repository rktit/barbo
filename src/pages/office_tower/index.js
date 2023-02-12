import React, { Fragment, useEffect } from "react";
import { configureAnchors } from "react-scrollable-anchor";

import {Menu, BannerOffice, EmpreendimentoOffice, Plantas, MapaOffice, Footer} from "container";
import { FlashMessageCookies, ModalPolitica } from 'components';

const OfficeTower = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => { }, []);

  return (
    <Fragment>
      <ModalPolitica />
      <Menu />
      <BannerOffice />
      <EmpreendimentoOffice />
      <Plantas />
      <MapaOffice />
      <Footer />
    </Fragment>
  );
};

export default OfficeTower;
