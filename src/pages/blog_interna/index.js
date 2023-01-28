import React, { Fragment, useEffect } from "react";

import {Menu, BannerEmpreendimento, Empreendimento, Footer} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {ModalPolitica} from 'components';

const Blog_Interna = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <Menu />
      <BannerEmpreendimento />
      <Empreendimento />
      <Footer />
    </Fragment>
  );
};

export default Blog_Interna;
