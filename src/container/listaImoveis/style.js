import styled from "styled-components";
import fonts from "config/fonts";
import * as Color from "config/colors";

const Content = styled.div`
  // flex-direction: row;
  // justify-content: center;
  margin-top: 40px !important;
  
  .demarcador{
    height: 40px;
    width: 40px;

    border-bottom-style: solid;
    border-bottom-color: #20396f;
    border-bottom-width: 3px;
    border-right-style: solid;
    border-right-color: #20396f;
    border-right-width: 2px;

    margin: -10px 0 10px -40px;
  }

  img{
    width: 170px;
  }
  .mobile{
    display: none;
    padding-top: 24px;
  }
  .desktop{
    display: flex;
    justify-content:center;
    align-items:center;
    padding-top: 0px;
  }
  .imagem{
    height:130px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
  }
  .iframe {
    width: 560px;
    height: 315px;
    pointer-events: auto;
    margin-top: 5%;
  }
  .title {
    font-size: 2rem;
    font-family: ${fonts.opensans_bold};
    color: #20396f;
    margin-bottom: -20px;
  }
  .content {
    margin-left: 3%;
  }
  .content-separator {
    margin-left: 0;
  }
  @media only screen and (max-width: 600px) {
     .mobile{
       display: block;
     }
     .desktop{
       display: none;
     }

     .title{
        justify-content: center;
        font-size: 1.3rem;
        // text-align: end;
     }
     .boxTitulo{
        margin-top: -20px !important;
     }

     .imagem{
       margin-top:20px;
     }
  }
`;

export default Content;