import styled from "styled-components";
import fonts from "config/fonts";

import banner from "images/banner/banner-economia-combustivel.jpg";
import bannerMobile from "images/banner/BackgroundJactoMobile.jpg";


const Content = styled.div`

    background: url(${banner}) no-repeat top center;
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;

    height: auto;
    width: 100%;

    .banner{
        width:100%;
        height:auto;
    }

    .text{
        font-size: 2rem;
        color: #ff7313;
        font-family: ${fonts.opensans_bold};
        margin-right: 50%;
        padding: 200px 0 200px 0;
    }


    @media only screen and (max-width: 600px) {
        background: url(${bannerMobile}) no-repeat top center;
        background-size: cover;
        padding: 400px 0 200px 0;
        .text{
            margin-right: 0;
            text-align:center;
            font-size: 1.5rem;
            margin-top: -450px;
            padding: 0;
        }
    }

`;

export default Content;