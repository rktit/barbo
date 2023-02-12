import React, { Fragment, useEffect, useState } from "react";
import { configureAnchors } from "react-scrollable-anchor";

import {Menu, BannerVilla, EmpreendimentoVilla, Plantas, MapaVilla, ListaImoveis, Footer} from "container";
import { FlashMessageCookies, ModalPolitica } from 'components';
import { getAllPosts } from "service/state.posts";

const VillaReal = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => { }, []);

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  return (
    <Fragment>
      <ModalPolitica />
      <Menu />
      <BannerVilla />
      <EmpreendimentoVilla />
      <Plantas />
      <MapaVilla />
      <ListaImoveis posts={posts} loading={loading}/>
      <Footer />
    </Fragment>
  );
};

export default VillaReal;
