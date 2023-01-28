import React, { Fragment, useEffect } from "react";

import {Menu, BannerBlog,Blog,  Footer} from "container";
import { configureAnchors } from "react-scrollable-anchor";

import {FlashMessageCookies, ModalPolitica} from 'components';

const Blog_Page = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <ModalPolitica />
      <Menu/>
      <BannerBlog />
      <Blog />
      <Footer />
    </Fragment>
  );
};

export default Blog_Page;
