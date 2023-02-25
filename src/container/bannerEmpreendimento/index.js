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



import banner1 from "images/banner/banner_frontlake_barbo.png";
import banner2 from "images/banner/banner_infinity_barbo.png";
import banner3 from "images/banner/banner_officetower_barbo.png";
import banner4 from "images/banner/banner_quintadovale_barbo.png";

import banner1Mobile from "images/banner/banner_frontlake_barbo.png";
import banner2Mobile from "images/banner/banner_infinity_barbo.png";
import banner3Mobile from "images/banner/banner_officetower_barbo.png";
import banner4Mobile from "images/banner/banner_quintadovale_barbo.png";
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
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="banner">
                            <a href="https://alakadim.com.br/infinity/"><img src={banner2Mobile} /></a>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="banner">
                            <a href="https://rocketit.com.br/barbo/office_tower/"><img src={banner3Mobile} /></a>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="banner">
                            <a href="https://alakadim.com.br/quinta-do-valle/"><img src={banner4Mobile} /></a>
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
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="row slide">
                            <div className="banner">
                                <a href="https://alakadim.com.br/infinity/"><img src={banner2} /></a>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="row slide">
                            <div className="banner">
                                <a href="https://rocketit.com.br/barbo/office_tower/"><img src={banner3} /></a>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="row slide">
                            <div className="banner">
                                <a href="https://alakadim.com.br/quinta-do-valle/"><img src={banner4} /></a>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            }
        </Content>

    );
}

export default BannerEmpreendimento;
