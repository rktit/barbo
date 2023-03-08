import styled from "styled-components";
import fonts from "config/fonts";


import office_tower from "images/officetower/OfficeTower.png";
import office_tower_mobile from "images/officetower/OfficeTower_mobile.png";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #eeeeee;
  top: -23rem;

  .image-side{
    background: url(${office_tower}) no-repeat center center;
    background-size: cover;
    padding-bottom: 24rem;
    height: 32rem;
    width: 32rem!important;

  }
.box-descrição {
  margin: 0rem 0rem 0rem 0rem;
}
  .imgConsorcio{
    width:100%;
    height:auto;

    min-width: auto;
    min-height: auto;
  }

  .left-side{
    margin-left: 0px;
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

.box-empreendimento {
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .texto{
    font-family:${fonts.comfortaa};
    text-size: 0.5rem;
    color:#252525;
    letter-spacing: 0.065em;
    strong {
      font-family: ${fonts.comfortaa};
    }
  }
.texto-empreendimento {
    font-family:${fonts.comfortaa};
    text-size: 0.5rem;
    color:#252525;
    text-align: center;
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
    flex-direction: column;
    align-items: flex-start;
    justify-items: center;
  }
  .icones{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1em 0em 1em 6em;
    font-family: ${fonts.comfortaa};
    font-size: 0.75rem;
    align-items: center;
    color: #252525;
    
    img{
      width: 50px;
      heigth: auto;
      padding: 0px 10px 0px 0px;
    }
  }
  .icones1{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1em 0em 1em 5em;
    font-family: ${fonts.comfortaa};
    font-size: 0.75rem;
    align-items: center;
    color: #252525;
    
    img{
      width: 50px;
      heigth: auto;
      padding: 0px 10px 0px 0px;
    }
  }
  .icones2{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1em 3em 1em 2em;
    font-family: ${fonts.comfortaa};
    font-size: 0.75rem;
    align-items: center;
    color: #252525;
    
    img{
      width: 50px;
      heigth: auto;
      padding: 0px 10px 0px 0px;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    top: -93rem;

.image-side {
  background: url(${office_tower_mobile}) no-repeat center center;
  height: 24rem;
  width: 24rem!important;
}
.icones-empreendimentos{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-items: center;
}
.icones{
    margin: 1em 2em;
    flex-direction: column;
    font-size: 1rem;
    text-align: center;
    margin: 0em 2em;
  img{
    width: 5rem;
    padding: 0px 10px 0px 0px;
    margin: 1em 2em;
  }
}
.icones1{
    margin: 1em 2em;
    flex-direction: column;
    font-size: 1rem;
    text-align: center;
    margin: 0em 2em;
  img{
    width: 6rem;
    padding: 0px 10px 0px 0px;
    margin: 1em 2em;
  }
}
.icones2{
    margin: 1em 2em;
    flex-direction: column;
    font-size: 1rem;
    text-align: center;
    margin: 0em 2em;
  img{
    width: 6rem;
    padding: 0px 10px 0px 0px;
    margin: 1em 2em;
  }
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
    // .icones{
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   margin: 0em 2em;
    //   font-family: ${fonts.comfortaa};
    //   font-size: 1.2rem;
    //   text-align: center;
    //   color: #252525;
      
    //   img{
    //     width: 6rem;
    //     heigth: auto;
    //     padding-bottom: 6px;
    //   }
    // }
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
  .texto-empreendimento {
    font-size: 1.75rem;
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
