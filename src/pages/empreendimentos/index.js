import React, { Fragment, useEffect, useState } from "react";
import { configureAnchors } from "react-scrollable-anchor";

import { Menu, Banner, Imoveis, Footer, ConhecaBarbo } from "container";
import {ModalPolitica} from 'components';
import { getAllPosts } from "service/state.posts";

const Empreendimentos = () => {
  configureAnchors({ offset: -60, scrollDuration: 500 });

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadRegisters();
  }, []);

  const loadRegisters = async () => {
    setLoading(true);
    const result = await getAllPosts();
    setPosts(result.data);
    setLoading(false);
  };

  return (
    <Fragment>
      <ModalPolitica />
      <Menu/>
      <Banner />
      <Imoveis posts={posts} loading={loading} />
      <ConhecaBarbo />
      <Footer />
    </Fragment>
  );
};

export default Empreendimentos;
