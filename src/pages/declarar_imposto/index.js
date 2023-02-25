import React, { Fragment, useEffect } from "react";

import {Aplicativo, Menu, BannerImposto, ArtigoImposto, Footer} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {ModalPolitica} from 'components';

const DeclararImposto = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <Aplicativo />
      <Menu />
      <BannerImposto />
      <ArtigoImposto />
      <Footer />
    </Fragment>
  );
};

export default DeclararImposto;
