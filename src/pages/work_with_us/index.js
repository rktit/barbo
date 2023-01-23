import React, { Fragment, useEffect } from "react";

import { MenuLs, FooterLs, BannerWorkWithUs, DescriptionWorkWithUs, FormWorkWithUs, Social} from "container";

import { configureAnchors } from "react-scrollable-anchor";

import {Alerts} from 'components';

const WorkWithUs_Page = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  useEffect(() => {}, []);

  return (
    <Fragment>
      <MenuLs/>
      <Alerts />
      <BannerWorkWithUs />
      <DescriptionWorkWithUs />
      <FormWorkWithUs />
      {/* <Social /> */}
      <FooterLs />
    </Fragment>
  );
};

export default WorkWithUs_Page;
