import styled from "styled-components";
import fonts from "config/fonts";


import implemento from "images/statics/implemento.png";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #eeeeee;
  
   .icone_whatsapp{
    width: 60%;
    height: auto;
    padding-left: 10px;
  }

  .title1{
    font-family: ${fonts.comfortaa};
    font-size: 2rem;
    margin-right: 5px;
    color: #20396f;
  }

  .texto{
    font-family: ${fonts.comfortaa};
    text-size: 0.8rem;
    color: #20396f;
  }
  .btn1{
    font-family: ${fonts.comfortaa};
    color: #000000;
    font-size: 1.2rem;
    text-aling: center;
    background-color: #ffffff;
    margin: 10px;
    width: 200px;

    &.active {
      background-color: #ff3a66;
      }

      :hover {
        background-color: #00000075;
        color: #ffffff;
      }
  }
  .btn{
    font-family: ${fonts.comfortaa};
    color: #000000;
    font-size: 1.2rem;
    text-aling: center;
    background-color: #ffffff;
    margin: 10px;
    width: 200px;

    &.active {
      background-color: #ff3a66;
      }

      :hover {
      transition: 0.1s ease-in-out;
      text-decoration-line: underline;
      text-decoration-color: #ff3a66;
      text-decoration-thickness: 3px;
      }
  }
  .image-side{
    font-family: ${fonts.comfortaa};
    color: #000000;
    font-size: 1.2rem;
    background-color: #ffffff;
    margin: 10px;
    padding: 4px;
    width: 200px;  
    display: flex;
    justify-content: center;
    align-items: center;  
  }
  .icones{
    margin-bottom: 20px;
    font-family: ${fonts.comfortaa};
    color: #20396f;

    img{
      width: auto;
      heigth: auto;
      margin-left: 10px;
    }
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
  .listaMarcas{
    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
    justify-content: center;
    margin-bottom: 30px;
  }

  .fotos{
    background: #000000;
    color: #ffffff;
    align-items: center;
    width: 65rem; 
    justify-content: center;
  }
  .consulta{
    background: #000000;
    color: #ffffff;
    align-items: center;
    width: 65rem;    
    justify-content: center;
    margin-bottom: 4px;
  }
  .marca{
    width: 65rem;
    height: 30rem;

    a{
      display: flex;
      justify-content: center;
      align-items: center;
      
    }
    img{
      width: 100px;
    }
  }

  .slide{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .planta-info {
    font-size: 2em;
  }
  .planta-attention strong{
    font-family: ${fonts.comfortaa};
  }
  .planta-attention {
    font-size: 1.4em;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0px;
    .image-side{
      padding: 0px!important;
    }
    .fotos{
      background: #000000;
      color: #ffffff;
      align-items: center;
      width: 24rem; 
      justify-content: center;
    }
    .consulta{
      background: #000000;
      color: #ffffff;
      align-items: center;
      width: 24rem;    
      justify-content: center;
      margin-bottom: 4px;
      flex-direction: column-reverse;
      font-size: 1.25rem;
      padding-top: 0.5rem;
    }
    .image-side{
      width: 15rem;
      padding: 0px;
    }
    .left-side{
      padding: 0 0px;
    }

    .slide{
      a{
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export default Content;
