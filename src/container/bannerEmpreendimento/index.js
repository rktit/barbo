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



import banner1 from "images/banner/banner_frontlake.png";
import banner2 from "images/banner/banner_infinity.png";
import banner3 from "images/banner/banner_officetower.png";
import banner4 from "images/banner/banner_quintadovale.png";

import banner1Mobile from "images/banner/banner_frontlake.png";
import banner2Mobile from "images/banner/banner_infinity.png";
import banner3Mobile from "images/banner/banner_officetower.png";
import banner4Mobile from "images/banner/banner_quintadovale.png";
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
                                    <div className="title">Nome do </div>
                                    <div className="title1">Empreendimento</div>
                                    <p className="text">
                                        São Paulo | Vila Mariano <br />
                                        Área privativa de 253 m² <br />
                                        2 suítes
                                    </p>
                                    <a href="/site/jacto" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
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
                                    <div className="title">Nome do </div>
                                    <div className="title1">Empreendimento</div>
                                    <p className="text">
                                        São Paulo | Vila Mariano <br />
                                        Área privativa de 253 m² <br />
                                        2 suítes
                                    </p>
                                    <a href="/site/jacto" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
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
                                    <div className="title">Nome do </div>
                                    <div className="title1">Empreendimento</div>
                                    <p className="text">
                                        São Paulo | Vila Mariano <br />
                                        Área privativa de 253 m² <br />
                                        2 suítes
                                    </p>
                                    <a href="/site/jacto" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
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
                                    <div className="title">Nome do </div>
                                    <div className="title1">Empreendimento</div>
                                    <p className="text">
                                        São Paulo | Vila Mariano <br />
                                        Área privativa de 253 m² <br />
                                        2 suítes
                                    </p>
                                    <a href="/site/jacto" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
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
                                        <div className="title">Nome do </div>
                                        <div className="title1">Empreendimento</div>
                                        <p className="text">
                                            São Paulo | Vila Mariano <br />
                                            Área privativa de 253 m² <br />
                                            2 suítes
                                        </p>
                                        <a href="/site/jacto" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
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
                                        <div className="title">Nome do </div>
                                        <div className="title1">Empreendimento</div>
                                        <p className="text">
                                            São Paulo | Vila Mariano <br />
                                            Área privativa de 253 m² <br />
                                            2 suítes
                                        </p>
                                        <a href="/site/jacto" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
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
                                        <div className="title">Nome do </div>
                                        <div className="title1">Empreendimento</div>
                                        <p className="text">
                                            São Paulo | Vila Mariano <br />
                                            Área privativa de 253 m² <br />
                                            2 suítes
                                        </p>
                                        <a href="/site/jacto" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
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
                                        <div className="title">Nome do </div>
                                        <div className="title1">Empreendimento</div>
                                        <p className="text">
                                            São Paulo | Vila Mariano <br />
                                            Área privativa de 253 m² <br />
                                            2 suítes
                                        </p>
                                        <a href="/site/jacto" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
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
