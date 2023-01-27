import styled from "styled-components";
import fonts from "config/fonts";


const Content = styled.div`
    width: 100%;
    background-size:100%;
    .banner{
        height: 36rem;
        background-repeat: no-repeat;
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