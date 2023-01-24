import React, { Fragment, useEffect } from "react";

import {MenuLs, BannerContato, MenuFormulario, Formulario, FooterLs} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {ModalPolitica} from 'components';

const Contato_Page = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <MenuLs/>
      <BannerContato />
      <MenuFormulario />
      {/* <Formulario/> */}
      <FooterLs />
    </Fragment>
  );
};

export default Contato_Page;
