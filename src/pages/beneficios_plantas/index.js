import React, { Fragment, useEffect } from "react";

import {Aplicativo, Menu, BannerBeneficios, ArtigoBeneficios, Footer} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {ModalPolitica} from 'components';

const BeneficiosPlantas = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <Aplicativo />
      <Menu />
      <BannerBeneficios />
      <ArtigoBeneficios />
      <Footer />
    </Fragment>
  );
};

export default BeneficiosPlantas;
