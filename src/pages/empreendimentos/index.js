import React, { Fragment, useEffect, useState } from "react";
import { configureAnchors } from "react-scrollable-anchor";

import {Aplicativo, Menu, Banner, Imoveis, Footer, ConhecaBarbo } from "container";
import {ModalPolitica} from 'components';

const Empreendimentos = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <Aplicativo />
      <Menu/>
      <Banner />
      <Imoveis />
      <ConhecaBarbo />
      <Footer />
    </Fragment>
  );
};

export default Empreendimentos;
