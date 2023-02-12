import React, { Fragment, useEffect } from "react";

import {Menu, BannerImposto, ArtigoImposto, Footer} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {ModalPolitica} from 'components';

const DeclararImposto = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <Menu />
      <BannerImposto />
      <ArtigoImposto />
      <Footer />
    </Fragment>
  );
};

export default DeclararImposto;
