import React, { Fragment, useEffect } from "react";
import { configureAnchors } from "react-scrollable-anchor";

import { MenuLs, Banner, Imoveis, FooterLs, ConhecaBarbo } from "container";
import {ModalPolitica} from 'components';

const Empreendimentos = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <MenuLs/>
      <Banner />
      <Imoveis />
      <ConhecaBarbo />
      <FooterLs />
    </Fragment>
  );
};

export default Empreendimentos;
