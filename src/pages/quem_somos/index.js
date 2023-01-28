import React, { Fragment, useEffect } from "react";

import {Menu, QuemSomos, Descricao, Essencia, ConhecaBarbo, Footer} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {ModalPolitica} from 'components';

const QuemSomos_Page = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <Menu/>
      <QuemSomos />
      <Essencia/>
      <ConhecaBarbo/>
      <Descricao />
      <Footer />
    </Fragment>
  );
};

export default QuemSomos_Page;
