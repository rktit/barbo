import React, { Fragment, useEffect, useState } from "react";
import { configureAnchors } from "react-scrollable-anchor";

import {Menu, BannerFront, EmpreendimentoFront, Plantas, MapaFront, ListaImoveis, Footer} from "container";
import { FlashMessageCookies, ModalPolitica } from 'components';
import { getAllPosts } from "service/state.posts";

const FrontLake = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => { }, []);

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  return (
    <Fragment>
      <ModalPolitica />
      <Menu />
      <BannerFront />
      <EmpreendimentoFront />
      <Plantas />
      <MapaFront />
      <ListaImoveis posts={posts} loading={loading}/>
      <Footer />
    </Fragment>
  );
};

export default FrontLake;
