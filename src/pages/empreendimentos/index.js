import React, { Fragment, useEffect, useState } from "react";
import { configureAnchors } from "react-scrollable-anchor";

import { Services_State } from "service";
import {Aplicativo, Menu, Banner, Imoveis, Footer, ConhecaBarbo } from "container";
import {ModalPolitica} from 'components';

const Empreendimentos = () => {
  // const _translate = useSelector(({translate}) => translate);

  configureAnchors({ offset: -60, scrollDuration: 500 });
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const loadInfos = async () => {
    const enterprises = await Services_State.getAllEnterprises()
    if(!enterprises.error) {
      setData(enterprises.data);
      console.log("enterprises", enterprises);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadInfos();
  }, [])

  return (
    <Fragment>
      <ModalPolitica />
      <Aplicativo />
      <Menu/>
      <Banner />
      <Imoveis data={data} loading={loading}/>
      <ConhecaBarbo />
      <Footer />
    </Fragment>
  );
};

export default Empreendimentos;
