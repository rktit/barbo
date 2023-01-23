import styled from "styled-components";
import fonts from "config/fonts";

import banner from "images/banner/Banner_Terrazul.png";
import bannerMobile from "images/banner/Mobile__Terrazul.png";

const Content = styled.div`

    /* background: url(${banner}) no-repeat bottom center; */

    /* display:flex;
    justify-content: center;
    align-items: center; */

    height: auto;
    width: 100%;
    background-size:100%;
    .banner{
        width:100%;
        height:auto;
        background-repeat: no-repeat;
        // padding-top: 80px;
    }

    .text{
        font-size:1.5rem;
        color: #20396f;
        font-family: ${fonts.opensans_bold};
        font-weight: bold;
        margin-right: 57%;
    }

    img{
        width: 180px;
    }

    .logo{
        width: 200px;
        height: auto;
    }


    @media only screen and (max-width: 600px) {
        .text{
            margin-right: 0;
            text-align:center;
            font-size: 1.2rem;
            margin-top: -310px;
        }
        img{
            width: 180px;
        }
        .banner{
            padding: 115px 0 0px 0;

            
        }
    }
`;

export default Content;