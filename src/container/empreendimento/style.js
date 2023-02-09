import styled from "styled-components";
import fonts from "config/fonts";


import empreendimento from "images/empreendimento/banner/Infinity.jpg";


const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #eeeeee;
  
  .image-side{
    background: url(${empreendimento}) no-repeat center center;
    background-size: cover;
    padding-bottom: 24rem;
    height: 450px;
    width: 450px!important;
    margin-right: 15px;

  }

  .imgConsorcio{
    width:100%;
    height:auto;

    min-width: auto;
    min-height: auto;
  }

  .left-side{
    margin-left: 20px;
  }

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

  .icone_whatsapp{
    margin-top: 10px;
    margin-left:10px;
    width:40px;
    height: 40px;
  }

  .title{
    font-family: ${fonts.comfortaa};
    font-size: 1.5rem;
    color: #000000;
  }


  .texto{
    font-family:${fonts.comfortaa};
    text-size: 0.5rem;
    color:#000000;
    strong {
      font-family: ${fonts.opensans_bold};
    }
  }

  .btn{
    font-family: ${fonts.opensans_bold};
    color: white;
    font-size: 1.2rem;
    text-aling: center;
    background-color:#fc1347;
    margin-top:10px;
    width:200px;
    border-radius: 0;

    &.active {
      background-color: #000000;
      }

      :hover {
      transition: 0.1s ease-in-out;
      background-color: #000000;
      text-decoration: none;
      }
  }
  .icones-empreendimentos{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-items: center;

  }
  .icones{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0em 2em;
    font-family: ${fonts.comfortaa};
    font-size: 0.75rem;
    text-align: center;
    color: #000000;
    
    img{
      width: 40px;
      heigth: auto;
      padding-bottom: 6px;
    }
  }
 
  

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    .splideLoc{
      display: flex;
      justify-content: center;
      align-items: center;
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
    padding: 0px;
    .content {
      margin: -1rem 0 2rem 0;
    }
    .topo{
      justify-content: center;
      align-items: center;
    }

    .orcamento{
      width: 100%;
      margin-top: 0px;
      margin-left: 15px;
      .form{
        margin-top: 15px;
      }

      // input{
      //   width: 120%;
      // }
    }
    .icones{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0em 2em;
      font-family: ${fonts.comfortaa};
      font-size: 1.2rem;
      text-align: center;
      color: #000000;
      
      img{
        width: 5rem;
        heigth: auto;
        padding-bottom: 6px;
      }
    }
    .boxTitle{
      font-size: 1.6rem;
      margin-left: 0px;
      line-height: 1.8rem;
      strong{
        font-size: 2.3rem;
  
      }
  }
  
  .btn{
    font-size: 0.7rem;
  }
  .icone_whatsapp{
    width:35px;
    height:35px;
  }
  .infoCotacao{
    font-size:1rem;
  }
  .splide__arrow svg {
    width: 1.5em;
    height: 1.5em;
    fill: transparent;
    transition: fill .2s linear;
}
  }
`;

export default Content;
