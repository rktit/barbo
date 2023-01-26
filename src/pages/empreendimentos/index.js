import React, { Fragment, useEffect } from "react";
import { configureAnchors } from "react-scrollable-anchor";

import { MenuLs, Banner, ListaImoveis, FooterLs, ConhecaBarbo } from "container";
import {ModalPolitica} from 'components';

const Empreendimentos_Page = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <MenuLs/>
      <Banner />
      <ListaImoveis />
      <ConhecaBarbo />
      <FooterLs />
    </Fragment>
  );
};

export default Empreendimentos_Page;
