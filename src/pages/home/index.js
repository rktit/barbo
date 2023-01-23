import React, { Fragment, useEffect } from "react";

import {Welcome} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {FlashMessageCookies, ModalPolitica} from 'components';
import {MenuLs, ListaImoveis, VideoBarbo, FooterLs} from "container";

const Home_Page = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <FlashMessageCookies/>
      <MenuLs/>
      <Welcome />
      <ListaImoveis />
      <VideoBarbo/>
      <FooterLs />
    </Fragment>
  );
};

export default Home_Page;
