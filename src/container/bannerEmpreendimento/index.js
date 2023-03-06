import React, { useEffect, useState } from "react";
import Content from "./style";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

// import banner1 from "images/empreendimento_interna/cozinha.png";
// import banner2 from "images/empreendimento_interna/predio.png";
// import banner3 from "images/empreendimento_interna/sala.png";

// import banner1Mobile from "images/empreendimento_interna/nome_empreendimento.png";
// import banner2Mobile from "images/empreendimento_interna/nome_empreendimento.png";
// import banner3Mobile from "images/empreendimento_interna/nome_empreendimento.png";



import banner1 from "images/banner/banner_home_frontlake.png";
import banner2 from "images/banner/banner_home_infinity.png";
import banner3 from "images/banner/banner_home_officetower.png";
import banner4 from "images/banner/banner_home_quintadovale.png";

import banner1Mobile from "images/banner/banner_frontlake_mobile.png";
import banner2Mobile from "images/banner/banner_infinity_mobile.png";
import banner3Mobile from "images/banner/banner_officetower_mobile.png";
import banner4Mobile from "images/banner/banner_quintadovale_mobile.png";
import { loadOptions } from "@babel/core";

function BannerEmpreendimento() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    return (
        <Content>
            {isMobile ?
                <Splide className="splide col-12" options={{
                    rewind: false,
                    width: "auto",
                    gap: '2rem',
                    perPage: 1,
                    pagination: false,
                    arrows: false,
                }}>
                    <SplideSlide className="slide">
                        <div className="banner">
                            <a href="https://rocketit.com.br/frontlake/"><img src={banner1Mobile} /></a>
                            <div className="welcome">
                                <div className="box-texto">
                                    <div className="title">Front Lake </div>
                                    <div className="title1">Residencial</div>
                                    <p className="text">
                                        Rio Claro | Vila Operária <br />
                                        Área privativa de 94 m² <br />
                                    </p>
                                    <a href="https://rocketit.com.br/frontlake/" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
                                        Ver mais
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="banner">
                            <a href="https://alakadim.com.br/infinity/"><img src={banner2Mobile} /></a>
                            <div className="welcome">
                                <div className="box-texto">
                                    <div className="title">Infinity </div>
                                    <div className="title1">Residencial</div>
                                    <p className="text">
                                        Rio Claro | Cidade Jardim <br />
                                        Área privativa de 151 m² <br />
                                    </p>
                                    <a href="https://alakadim.com.br/infinity/" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
                                        Ver mais
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="banner">
                            <a href="https://rocketit.com.br/barbo/office_tower/"><img src={banner3Mobile} /></a>
                            <div className="welcome">
                                <div className="box-texto">
                                    <div className="title">Office Tower </div>
                                    <div className="title1">Corporativo</div>
                                    <p className="text">
                                        Rio Claro | Jardim Claret <br />
                                        Salas - 42,06 m² / 43,66 m² / 49,94 m² <br />
                                    </p>
                                    <a href="https://rocketit.com.br/barbo/office_tower/" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
                                        Ver mais
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="banner">
                            <a href="https://alakadim.com.br/quinta-do-valle/"><img src={banner4Mobile} /></a>
                            <div className="welcome">
                                <div className="box-texto">
                                    <div className="title">Quinta do Vale </div>
                                    <div className="title1">Loteamento</div>
                                    <p className="text">
                                        Barra Bonita | Portal São José da Barra <br />
                                        Com lotes de 200m² a 400m² <br />
                                    </p>
                                    <a href="https://alakadim.com.br/quinta-do-valle/" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
                                        Ver mais
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
                :
                <Splide className="" options={{
                    rewind: false,
                    autoplay: "auto",
                    type: 'loop',
                    focus: 'center',
                    width: "100%",
                    gap: '1.5rem',
                    perPage: 1,
                    pagination: true
                }}>
                    <SplideSlide>
                        <div className="row slide">
                            <div className="banner">
                                <a href="https://rocketit.com.br/frontlake/"><img src={banner1} /></a>
                                <div className="welcome">
                                    <div className="box-texto">
                                        <div className="title">Front Lake </div>
                                        <div className="title1">Residencial</div>
                                        <p className="text">
                                            Rio Claro | Vila Operária <br />
                                            Área privativa de 94 m² <br />
                                        </p>
                                        <a href="https://rocketit.com.br/frontlake/" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
                                            Ver mais
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="row slide">
                            <div className="banner">
                                <a href="https://alakadim.com.br/infinity/"><img src={banner2} /></a>
                                <div className="welcome">
                                    <div className="box-texto">
                                        <div className="title">Infinity </div>
                                        <div className="title1">Residencial</div>
                                        <p className="text">
                                            Rio Claro | Cidade Jardim <br />
                                            Área privativa de 151 m² <br />
                                        </p>
                                        <a href="https://alakadim.com.br/infinity/" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
                                            Ver mais
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="row slide">
                            <div className="banner">
                                <a href="https://rocketit.com.br/barbo/office_tower/"><img src={banner3} /></a>
                                <div className="welcome">
                                    <div className="box-texto">
                                        <div className="title">Office Tower </div>
                                        <div className="title1">Corporativo</div>
                                        <p className="text">
                                            Rio Claro | Jardim Claret <br />
                                            Salas - 42,06 m² / 43,66 m² / 49,94 m² <br />
                                        </p>
                                        <a href="https://rocketit.com.br/barbo/office_tower/" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
                                            Ver mais
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="row slide">
                            <div className="banner">
                                <a href="https://alakadim.com.br/quinta-do-valle/"><img src={banner4} /></a>
                                <div className="welcome">
                                    <div className="box-texto">
                                        <div className="title">Quinta do Vale </div>
                                        <div className="title1">Loteamento</div>
                                        <p className="text">
                                            Barra Bonita | Portal São José da Barra <br />
                                            Com lotes de 200m² a 400m² <br />
                                        </p>
                                        <a href="https://alakadim.com.br/quinta-do-valle/" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
                                            Ver mais
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            }
        </Content>

    );
}

export default BannerEmpreendimento;
