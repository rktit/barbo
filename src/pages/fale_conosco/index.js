import React, { Fragment, useEffect } from "react";

import {MenuLs, Contato, Login, FooterLs} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {FlashMessageCookies, ModalPolitica} from 'components';

const FaleConosco_Page = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <MenuLs/>
      <Contato />
      {/* <Login /> */}
      <FooterLs />
    </Fragment>
  );
};

export default FaleConosco_Page;
