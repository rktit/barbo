import React, { Fragment, useEffect, useState } from "react";

import {BannerHome, Welcome} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {FlashMessageCookies, ModalPolitica} from 'components';
import {Menu, ListaImoveis, VideoBarbo, Footer} from "container";
import { getAllPosts } from "service/state.posts";

const Home_Page = () => {
    configureAnchors({ offset: -60, scrollDuration: 500 });
  
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
  

  return (
    <Fragment>
      <ModalPolitica />
      <FlashMessageCookies/>
      <Menu/>
      <BannerHome />
      <ListaImoveis posts={posts} loading={loading}/>
      <VideoBarbo/>
      <Footer />
    </Fragment>
  );
};

export default Home_Page;
