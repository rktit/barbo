import React, { Fragment, useEffect } from "react";

import {Aplicativo, Menu, QuemSomos, Essencia, ConhecaBarbo, Descricao, Footer} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {ModalPolitica} from 'components';

const QuemSomos_Page = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <Aplicativo />
      <Menu/>
      <QuemSomos />
      <Essencia/>
      <ConhecaBarbo/>
      {/* <Descricao /> */}
      <Footer />
    </Fragment>
  );
};

export default QuemSomos_Page;
