import React, { Fragment, useEffect } from "react";

import {MenuLs, QuemSomos, Descricao, Essencia, ConhecaBarbo, FooterLs, HeaderLS} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {ModalPolitica} from 'components';

const QuemSomos_Page = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <MenuLs/>
      <QuemSomos />
      <Essencia/>
      <HeaderLS />
      <ConhecaBarbo/>
      <Descricao />
      <FooterLs />
    </Fragment>
  );
};

export default QuemSomos_Page;
