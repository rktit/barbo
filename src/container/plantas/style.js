import styled from "styled-components";
import fonts from "config/fonts";


import implemento from "images/statics/implemento.png";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #eeeeee;
  
   .icone_whatsapp{
    width: 30px;
    height: 30px;
    padding-right: 4px;
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
  
  .btn{
    font-family: ${fonts.comfortaa};
    color: #252525;
    font-size: 1.2rem;
    text-aling: center;
    background-color: #ffffff;
    margin: 10px;
    width: 200px;

    &.active {
      background-color: #e73538;
      }

      :hover {
      transition: 0.1s ease-in-out;
      text-decoration-line: underline;
      text-decoration-color: #e73538;
      text-decoration-thickness: 3px;
      }
  }
  .image-side{
    font-family: ${fonts.comfortaa};
    color: #252525;
    font-size: 1.2rem;
    text-aling: center;
    background-color: #ffffff;
    margin: 10px;
    width: 200px;    
  }
  .icones{
    margin-bottom: 20px;
    font-family: ${fonts.comfortaa};
    color: #20396f;

    img{
      width: 40px;
      heigth: auto;
      margin-left: 10px;
    }
  }
  .splide__arrow svg {
    width: 1.5em;
    height: 1.5em;
    fill: #252525;
    transition: fill .2s linear;
}
.splide__pagination__page {
    display: inline-block;
    width: 20px;
    height: 5px;
    background: #e73538;
    border-radius: 2.5px;
    margin: 3px;
    padding: 0;
    transition: all .2s linear;
    border: none;
}
.splide__pagination__page.is-active {
    background: #252525;
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
    background: #252525;
    color: #ffffff;
    align-items: center;
    width: 65rem;
    margin-left: 9rem; 
    justify-content: center;
  }
  .consulta{
    background: #252525;
    color: #ffffff;
    align-items: center;
    width: 65rem;
    margin-left: 9rem;    
    justify-content: center;
  }
  .marca{
    width: 65rem;
    height: 30rem;
    position: relative;

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
      padding: 110px 0 !important;
    }
    .fotos{
      width: 20rem;
      margin-left: 2rem;
    }
    .marca {
      width: 18rem;
      height: 30rem;
      position: relative;
  }
  .chyJPT .consulta {
    width: 20rem;
    margin-left: 2rem;
}
    .left-side{
      padding: 2rem 0rem;
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
