import React, { useEffect, useState } from "react";
import Content from "./style";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from "images/banner/Banner_Terrazul_janeiro.png";
import banner from "images/banner/Banner_Terrazul1.png";
import banner3 from "images/banner/BannerTrator.png";

import banner1Mobile from "images/banner/Mobile_Terrazul_janeiro.png";
import bannerMobile from "images/banner/Mobile_TErrazul.png";
import banner3Mobile from "images/banner/BannerTratorMobile.png";

function Banner() {
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
                    {/* <div className="banner">
                        <img src={banner2Mobile} />
                    </div> */}
                    <div className="banner">
                        <img src={banner3Mobile} />
                    </div>
                    <div className="banner">
                        <img src={bannerMobile} />
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
                        <img src={banner1} />
                    </div>
                    {/* <div className="banner">
                        <img src={banner2} />
                    </div> */}
                    <div className="banner">
                        <img src={banner3} />
                    </div>
                    <div className="banner">
                        <img src={banner} />
                    </div>
                </Carousel>
            }
            

            {/* <div className="text col-12 col-sm-3">
                <img src={logo} alt="LS Consórcio"/><br/>
                Com o Consórcio da <br/>LS Tractor seus sonhos<br/>pode virar realidade<br/>no campo.
            </div> */}
        </Content>
            
    );
}

export default Banner;
