import styled from "styled-components";
import fonts from "config/fonts";


import banner from "images/banner/banner-lista-ls.png";
import bannerMobile from "images/banner/BannerJSMobile.png";

const Content = styled.div`
background-color: #eeeeee;

#panorama {
    width: 65rem;
    height: 400px;
    }
    #controls {
        position: absolute;
        bottom: 0;
        z-index: 2;
        text-align: center;
        width: 100%;
        padding-bottom: 3px;
    }
    .ctrl {
        padding: 8px 5px;
        width: 30px;
        text-align: center;
        background: rgba(200, 200, 200, 0.8);
        display: inline-block;
        cursor: pointer;
    }
    .ctrl:hover {
        background: rgba(200, 200, 200, 1);
    }
    .fotos {
        font-family: ${fonts.opensans_regular};
        font-size: 2rem;
        padding: 2rem 0;
    }

`;

export default Content;