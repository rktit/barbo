import styled from "styled-components";
import fonts from "config/fonts";
import * as Color from "config/colors";

const Content = styled.div`
    width: 100vw;
    padding-top: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid #fff;
    margin-bottom: 10px;

    .boxHeaderLS{
        display: flex;
    }
    .text-left{
        color: #fff;
        font-family: ${fonts.opensans_regular};
    }

    .text-right{
        color:#fff;
        font-family: ${fonts.opensans_bold};
    }

    .icones{
        img{
            width:20px;
            height:auto;
        }
    }

    a{
        :hover{
            text-decoration: none;
        }
    }
    @media only screen and (max-width: 600px) {
        border-bottom: 0px solid #fff;
        .boxHeaderLS{
            display: none !important;
        }
    }
`;

export default Content;
