import React, { Fragment, useEffect, useState } from "react";
import { configureAnchors } from "react-scrollable-anchor";

import { Menu, BannerLasRocas, EmpreendimentoLasrocas, Plantas, MapaLasrocas, ListaImoveis, Footer } from "container";
import { FlashMessageCookies, ModalPolitica } from 'components';
import { getAllPosts } from "service/state.posts";

const LasRocas = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => { }, []);

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  return (
    <Fragment>
      <ModalPolitica />
      <Menu />
      <BannerLasRocas />
      <EmpreendimentoLasrocas />
      <Plantas />
      <MapaLasrocas />
      <ListaImoveis posts={posts} loading={loading} />
      <Footer />
    </Fragment>
  );
};

export default LasRocas;