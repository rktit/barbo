import React, { Fragment, useEffect, useState } from "react";

import { configureAnchors } from "react-scrollable-anchor";

import {FlashMessageCookies, ModalPolitica} from 'components';
import {  Aplicativo,  Menu, BannerEmpreendimento, ListaImoveis, VideoBarbo, Footer} from "container";
import { Services_State } from "service";

const Home_Page = () => {
    configureAnchors({ offset: -60, scrollDuration: 500 });

    useEffect(() => {
      loadInfos();
  
      if (window.innerWidth >= 992) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    }, []);

    const loadInfos = async () => {
      const enterprises = await Services_State.getAllEnterprises()
      if(!enterprises.error) {
        setData(enterprises.data);
        console.log("enterprises", enterprises);
      }

      setLoading(false);
    }
  
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  

  return (
    <Fragment>
      <ModalPolitica />
      <Aplicativo />
      <FlashMessageCookies/>
      <Menu/>
      <BannerEmpreendimento />
      <ListaImoveis data={data} loading={loading}/>
      <VideoBarbo/>
      <Footer />
    </Fragment>
  );
};

export default Home_Page;
