import React, {useState, useEffect} from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

import automotriz from "images/statics/maquinas/Pulverizador automotriz.jpg";
import colhedora from "images/statics/maquinas/Colhedora de cafe.jpg";
import adubadora from "images/statics/maquinas/Adubadora.jpg";
import barra_acoplado from "images/statics/maquinas/Pulverizador barra acoplado.jpg";
import barra_carreta from "images/statics/maquinas/Pulverizador barra carreta.jpg";
import turbo_acoplado from "images/statics/maquinas/Pulverizador turbo acoplado.jpg";
import turbo_carreta from "images/statics/maquinas/Pulverizador turbo carreta.jpg";
import canhao_acoplado from "images/statics/maquinas/Pulverizador canhao acoplado.png";
import canhao_carreta from "images/statics/maquinas/Pulverizador canhao carreta.jpg";
import especial_acoplado from "images/statics/maquinas/Pulverizador especial acoplado.jpg";
import especial_carreta from "images/statics/maquinas/Pulverizador especial carreta.jpg";

import banner from "images/banner/banner-conheca-tratores.png";
import bannerMobile from "images/banner/BannerJactoNovosTempos.png";

import Card from "components/card";


function ListaMaquinas() {

  const [isMobile, setMobile] = useState(false);
  const [img, setImagem] = useState(null);

  useEffect(() => {
      if (window.innerWidth >= 992) {
              setMobile(false);
              setImagem(banner);
      } else {
              setMobile(true);
              setImagem(bannerMobile);
      }
  }, [window.innerWidth]);


  return (
    <ScrollableAnchor id="maquinas">
      <Content className="col-12 d-flex flex-column align-items-center">
        <img className="banner" src={img} alt=""/>
        { isMobile ? 
          <div className="textos">
            <strong>NOVOS TEMPOS, NOVAS SOLUÇÕES.</strong>
            <p>A PRODUTIVIDADE DO SEU AGRO É O <br/>NOSSO OBJETIVO</p>
          </div>
          :
            <>
            <div className="demarcador"></div>
            <div className="textos">
              <div className="demarcadorTexto"></div>
              <strong>NOVOS TEMPOS,<br/>NOVAS SOLUÇÕES.</strong>
              <p>A PRODUTIVIDADE DO<br/>SEU AGRO É O NOSSO<br/>OBJETIVO</p>
            </div>
            </>
          }
        <div className="title ">Conheça nossas Máquinas</div>
        { isMobile ?  
              <Splide className="splide col-12" options={{
                  rewind: true,
                  width: "100%",
                  gap: '2rem',
                  perPage: 1,
                  pagination: true,
                  arrows: false
              }}>
                  <SplideSlide className="slide">
                    <Card image={automotriz} title="Pulverizador automotriz" text="Equipamentos para produtores que buscam conforto, qualidade de aplicação e produtividade. Excelente custo/benefício. Enfrenta os maiores desafios com facilidade e alto desempenho."/>
                  </SplideSlide>
                  <SplideSlide className="slide">
                    <Card image={colhedora} title="Colhedora de café" text="Qualidade e rendimento para a melhor cafeicultura do mundo. Oferece ao produtor qualidade dos grãos colhidos, menos perdas, maior rendimento diário, conforto e segurança."/>
                  </SplideSlide>
                  <SplideSlide className="slide">  
                    <Card image={adubadora} title="Adubadora" text="Máquinas versáteis que trazem maior precisão na dosagem e uniformidade de aplicação de fertilizantes, além de possibilitar a aplicação de produtos em pó. Qualidade e precisão com a melhor tecnologia Jacto."/>
                  </SplideSlide>
                  <SplideSlide className="slide">  
                    <Card image={barra_acoplado} title="Pulverizador barra acoplado" text="Qualidade e precisão com a melhor tecnologia Jacto. Desenvolvido para uma pulverização uniforme, com alto rendimento operacional diário e custo reduzido de manutenção."/>
                  </SplideSlide>
                  <SplideSlide className="slide">  
                  <Card image={barra_carreta} title="Pulverizador barra carreta" text="Robustez e versatilidade na proteção da sua lavoura. Com melhor estabilidade para a máquina e consequentemente para a barra."/>
                  </SplideSlide>
                  <SplideSlide className="slide">  
                  <Card image={turbo_acoplado} title="Pulverizador turbo acoplado" text="Versátil, Ágil e Compacto. Cobertura Eficiente, atende com a melhor eficiência de aplicação em diversos cultivos e condução de plantios."/>
                  </SplideSlide>
                  <SplideSlide className="slide">  
                  <Card image={turbo_carreta} title="Pulverizador turbo carreta" text="Modelos que atendem suas necessidades. Oferecem uma excelente produtividade na pulverização e protege grandes extensões de cultura em um menor espaço de tempo."/>
                  </SplideSlide>
                  <SplideSlide className="slide">  
                  <Card image={canhao_acoplado} title="Pulverizador canhão acoplado" text="Pulverização de Longo Alcance. Bastante versátil, pode ser utilizado em várias culturas como: horticultura, floricultura, cereais, pecuária e fruticultura."/>
                  </SplideSlide>
                  <SplideSlide className="slide">  
                    <Card image={canhao_carreta} title="Pulverizador canhão carreta" text="Proteção para sua lavoura. Com vento favorável, alcança até 35 metros, que proporciona uma boa cobertura nesta faixa de aplicação."/>
                  </SplideSlide>
                  <SplideSlide className="slide">  
                    <Card image={especial_acoplado} title="Pulverizador especial acoplado" text="Equipamento versátil com baixo custo de manutenção. Maior conforto, desenvolvida com enroladores de mangueira para uma pulverização uniforme, com alto rendimento operacional."/>
                  </SplideSlide>
                  <SplideSlide className="slide">  
                    <Card image={especial_carreta} title="Pulverizador especial carreta" text="Produtividade para sua Pastagem. Desenvolvido especialmente para pulverização em pastagens, com alto rendimento operacional diário e custo reduzido de manutenção."/>         
                  </SplideSlide>
              </Splide>
            
            :
              <div className="maquinas">
                <Card image={automotriz} title="Pulverizador automotriz" text="Equipamentos para produtores que buscam conforto, qualidade de aplicação e produtividade. Excelente custo/benefício. Enfrenta os maiores desafios com facilidade e alto desempenho."/>
                <Card image={colhedora} title="Colhedora de café" text="Qualidade e rendimento para a melhor cafeicultura do mundo. Oferece ao produtor qualidade dos grãos colhidos, menos perdas, maior rendimento diário, conforto e segurança."/>
                <Card image={adubadora} title="Adubadora" text="Máquinas versáteis que trazem maior precisão na dosagem e uniformidade de aplicação de fertilizantes, além de possibilitar a aplicação de produtos em pó. Qualidade e precisão com a melhor tecnologia Jacto."/>
                <Card image={barra_acoplado} title="Pulverizador barra acoplado" text="Qualidade e precisão com a melhor tecnologia Jacto. Desenvolvido para uma pulverização uniforme, com alto rendimento operacional diário e custo reduzido de manutenção."/>
                <Card image={barra_carreta} title="Pulverizador barra carreta" text="Robustez e versatilidade na proteção da sua lavoura. Com melhor estabilidade para a máquina e consequentemente para a barra."/>
                <Card image={turbo_acoplado} title="Pulverizador turbo acoplado" text="Versátil, Ágil e Compacto. Cobertura Eficiente, atende com a melhor eficiência de aplicação em diversos cultivos e condução de plantios."/>
                <Card image={turbo_carreta} title="Pulverizador turbo carreta" text="Modelos que atendem suas necessidades. Oferecem uma excelente produtividade na pulverização e protege grandes extensões de cultura em um menor espaço de tempo."/>
                <Card image={canhao_acoplado} title="Pulverizador canhão acoplado" text="Pulverização de Longo Alcance. Bastante versátil, pode ser utilizado em várias culturas como: horticultura, floricultura, cereais, pecuária e fruticultura."/>
                <Card image={canhao_carreta} title="Pulverizador canhão carreta" text="Proteção para sua lavoura. Com vento favorável, alcança até 35 metros, que proporciona uma boa cobertura nesta faixa de aplicação."/>
                <Card image={especial_acoplado} title="Pulverizador especial acoplado" text="Equipamento versátil com baixo custo de manutenção. Maior conforto, desenvolvida com enroladores de mangueira para uma pulverização uniforme, com alto rendimento operacional."/>
                <Card image={especial_carreta} title="Pulverizador especial carreta" text="Produtividade para sua Pastagem. Desenvolvido especialmente para pulverização em pastagens, com alto rendimento operacional diário e custo reduzido de manutenção."/>         
              </div>
          }
        </Content>
    </ScrollableAnchor>
      
  );
}

export default ListaMaquinas;
