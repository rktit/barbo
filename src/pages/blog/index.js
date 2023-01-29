import React, { Fragment, useEffect, useState } from "react";
import { configureAnchors } from "react-scrollable-anchor";

import { FlashMessageCookies, ModalPolitica } from 'components';
import { Menu, BannerBlog, Blog, ConhecaBarbo, Footer } from "container";
import { getAllPosts } from "service/state.posts";


const Blog_Page = () => {
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
      <Menu />
      <BannerBlog />
      <Blog posts={posts} loading={loading} />
      <ConhecaBarbo />
      <Footer />
    </Fragment>
  );
};

export default Blog_Page;
