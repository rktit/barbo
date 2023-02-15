import React, { useEffect, useState } from "react";
import Content from "./style";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from "images/empreendimento_interna/cozinha.png";
import banner2 from "images/empreendimento_interna/predio.png";
import banner3 from "images/empreendimento_interna/sala.png";

import banner1Mobile from "images/empreendimento_interna/nome_empreendimento.png";
import banner2Mobile from "images/empreendimento_interna/nome_empreendimento.png";
import banner3Mobile from "images/empreendimento_interna/nome_empreendimento.png";

function BannerEmpreendimento() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    return (
        <Content>
            {isMobile ?
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                >
                    <div className="banner">
                        <img src={banner1Mobile} />
                    </div>
                    <div className="banner">
                        <img src={banner2Mobile} />
                    </div>
                    <div className="banner">
                        <img src={banner3Mobile} />
                    </div>
                </Carousel>
                :
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showArrows={true}
                    showStatus={false}
                >
                    <div className="banner">
                        <img src={banner1} height={650} />
                    </div>
                    <div className="banner">
                        <img src={banner2} height={650} />
                    </div>
                    <div className="banner">
                        <img src={banner3} height={650}/>
                    </div>
                </Carousel>
            }
        </Content>

    );
}

export default BannerEmpreendimento;
