import styled from "styled-components";
import fonts from "config/fonts";


import plantas from "images/blog/beneficios/beneficios_apartamento.jpg";


const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #ffffff;
  top: -22rem;

  .box-artigo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .maquinas{
    display: flex;
    margin: 2rem 0;
    align-items: center;
    margin-bottom: -16rem;
}
  a {
    color: #007bff;
    font-family: ${fonts.comfortaa};
    text-decoration: underline;
    background-color: transparent;
    &.active {
      background-color: #252525;
    }
    :hover {
      transition: 0.1s ease-in-out;
      font-weight: 900;
      text-decoration: none;
      }
}
  .image-side{
    background: url(${plantas}) no-repeat left center;
    background-size: cover;
    padding-bottom: 24rem;
    height: 40rem;
    width: 35rem !important;
    margin: 8rem 0 0 6px;
}
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
    color: #252525;
  }


  .texto{
    font-family:${fonts.comfortaa};
    text-size: 0.5rem;
    color:#252525;
    strong {
      font-family: ${fonts.comfortaa};
    }
  }

  .btn{
    font-family: ${fonts.comfortaa};
    color: white;
    font-size: 1.2rem;
    text-aling: center;
    background-color:#e73538;
    margin-top:10px;
    width:200px;
    border-radius: 0;

    &.active {
      background-color: #252525;
      }

      :hover {
      transition: 0.1s ease-in-out;
      background-color: #252525;
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
    color: #252525;
    
    img{
      width: 40px;
      heigth: auto;
      padding-bottom: 6px;
    }
  }
 
  

  @media only screen and (max-width: 600px) {
    top: -78rem;

    .box-artigo {
      display: flex;
      flex-direction: column;
      margin-bottom: -70rem;

    }
    .image-side{
      background: url(${plantas}) no-repeat center center;
      background-size: cover;
      padding-bottom: 24rem;
      height: 30rem;
      width: 24rem!important;
      margin: 0rem 0 4rem 4px;
    }
  .title {
    font-family: Comfortaa-VariableFont_wght;
    font-size: 1.5rem;
    padding-top: 4rem;
    font-weight: bold;
    color: #252525;
}
  .splideLoc{
    display: flex;
    justify-content: center;
    align-items: center;
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
    color: #252525;
    
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

.maquinas{
display: flex;
margin: 0.5rem 0 1rem 0;
align-items: center;
margin-bottom: 0rem;

}
  }
`;

export default Content;
