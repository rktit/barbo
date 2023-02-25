import React, { Fragment, useEffect } from "react";

import {Aplicativo, Menu, BannerIluminacao, ArtigoIluminacao, Footer} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {ModalPolitica} from 'components';

const BlogIluminacao = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <Aplicativo />
      <Menu />
      <BannerIluminacao />
      <ArtigoIluminacao />
      <Footer />
    </Fragment>
  );
};

export default BlogIluminacao;
