import React, { Fragment, useEffect } from "react";

import {BannerHome, Welcome} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {FlashMessageCookies, ModalPolitica} from 'components';
import {Menu, ListaImoveis, VideoBarbo, Footer} from "container";

const Home_Page = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <FlashMessageCookies/>
      <Menu/>
      <BannerHome />
      <ListaImoveis />
      <VideoBarbo/>
      <Footer />
    </Fragment>
  );
};

export default Home_Page;
