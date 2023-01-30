import React, { useState, useEffect } from "react";
import Content from "./style";
import { getAllEnterprises, getPostById } from '../../service/state.posts'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';


import home from "images/home/empreendimento_home.png";
import home1 from "images/home/empreendimento_home1.png";
import home2 from "images/home/empreendimento_home2.png";
// import home3 from "images/home/empreendimento_home3.png";
// import home4 from "images/home/empreendimento_home4.png";
// import home5 from "images/home/empreendimento_home5.png";

import Card from "components/card";
import CardLs from "components/cardLs";
import ScrollableAnchor from "react-scrollable-anchor";



function ListaImoveis() {
  const [enterprises, setEnterprises] = useState(null);

  async function Enterprise() {
    const result = await getAllEnterprises()
    console.log("result", result)
    if (!result.error) {
      setEnterprises(result.data)
    }
  }


  useEffect(() => {
    Enterprise()
  }, [])
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {

    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);


  return (
    <ScrollableAnchor id="imoveis">
      <Content className="col-12 d-flex flex-column align-items-center p-0">
        <div className="title ">Os melhores imóveis estão aqui</div>
        {isMobile ?
          <Splide className="splide col-12" options={{
            rewind: true,
            width: "100%",
            gap: '2rem',
            perPage: 1,
            pagination: true,
            arrows: false
          }}>
            <SplideSlide className="slide col">
              <CardLs image={home}
                title="Front Lake"
                text="Rio Claro | Vila Operária
                Área privativa de 94 m²
                3 Dormitórios (1 suíte)"/>
              <Card image={home1}
                title="Infinity"
                text="Rio Claro | Cidade Jardim
                Área privativa de 151 m²
                4 Suítes (1 master)"/>
              <CardLs image={home2}
                title="Quinta do Vale"
                text="Barra Bonita | Portal São José da Barra
                Com lotes de 200m² a 400m²"/>
              <CardLs image={home}
                title="Office Tower"
                text="Rio Claro | Jardim Claret
                Salas - 42,06 m² | 43,66 m² | 49,94 m²
                5 Elevadores (3 panorâmicos)"/>
              <Card image={home1}
                title="Las Rocas"
                text="Piracicaba | Piracicamirim
                Área privativa de 55 m²
                2 Dormitórios"/>
              <CardLs image={home2}
                title="Higienópolis"
                text="Piracicaba | Higienópolis
                Área privativa de 88 m²
                3 Dormitórios (1 suíte)
                "/>
            </SplideSlide>
          </Splide>

          : enterprises !== null ?
            <Splide className="splide col-12"
              options={{
                rewind: true,
                width: "100%",
                gap: '1.5rem',
                perPage: 3,
                pagination: true
              }}>
              <SplideSlide>
                {enterprises.map((post, index) => {
                  console.log("POST::: ", post);


                  //  0a8b41db8e193716baf153a0d07f77e1.jpg
                  // return <CardLs image={".../uploads/"+post.images[0].link}
                  return <CardLs image={home2}
                    key={index}
                    title={post.name_resume}
                    text={post.resume} />
                })}
                <CardLs image={home}
                  title="Nome do Empreendimento"
                  text="São Paulo | Vila Mariano  
                Área privativa de 253 m² 
                2 suítes"/>

              </SplideSlide>
            </Splide>
            : "Não há resultados!"
        }
      </Content>
    </ScrollableAnchor >
  );
}

export default ListaImoveis;
