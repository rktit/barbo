import styled from "styled-components";
import fonts from "config/fonts";
import * as Color from "config/colors";

const Content = styled.div`
  // flex-direction: row;
  // justify-content: center;
  margin-top: 40px !important;
.splide {
  display: inline-grid;

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
  .splide__arrow svg {
    width: 1.5em;
    height: 1.5em;
    fill: #000000;
    transition: fill .2s linear;
}
.splide__pagination__page {
    display: inline-block;
    width: 20px;
    height: 5px;
    background: #fc1347;
    border-radius: 2.5px;
    margin: 3px;
    padding: 0;
    transition: all .2s linear;
    border: none;
}
.splide__pagination__page.is-active {
    background: #000000;
    width: 5px;
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
     .content {
      margin-left: 0;
    }
  }
`;

export default Content;