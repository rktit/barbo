import styled from "styled-components";
import fonts from "config/fonts";


import implemento from "images/statics/implemento.png";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #ffffff;
  
   .icone_whatsapp{
     padding-right: 14px;
     width: 2rem;
     height: 1rem;   

    }

  a {
      color: #252525;
    :hover {
      color: #e73538;
      text-decoration: none;
  }
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
    border-radius: 0rem;

    &.active {
      background-color: #e73538;
      }

      :hover {
      transition: 0.1s ease-in-out;
      text-decoration-color: #e73538;
      text-decoration-thickness: 3px;
      }
  }
  .left-side {
    margin:-22rem 0rem 0rem 0rem;
  }
  .image-side{
    font-family: ${fonts.comfortaa};
    color: #252525;
    font-size: 1.2rem;
    text-aling: center;
    background-color: #ffffff;
    margin: 10px 10px 10px 5rem;
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
    width: 74.5rem;
    margin-left: 4rem;
    justify-content: center;
  }
  .consulta{
    background: #252525;
    color: #ffffff;
    font-family: ${fonts.comfortaa};
    align-items: center;
    width: 74.5rem;
    margin-left: 4rem;    
    justify-content: center;
    :hover {
      transition: 0.1s ease-in-out;
      text-decoration-color: #e73538;
      text-decoration-thickness: 3px;
      }
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
    .left-side {
      margin:-80rem 0rem 0rem 0rem;
    }
    .image-side{
      width: 10rem;
      height: 5rem;
      padding: 0px !important;
    }
    .fotos {
      width: 20rem;
      margin-left: 1.25rem;
  }
    .marca {
      width: 16rem;
      height: 20rem;
      position: relative;
  }
  .consulta {
    width: 100%;
    height: 6rem;
    margin-left: 0rem;
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
