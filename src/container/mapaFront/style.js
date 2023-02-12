import styled from "styled-components";
import fonts from "config/fonts";


import mapa from "images/empreendimento/mapa.png";
import mapaMobile from "images/empreendimento/mapa_mobile.png";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #eeeeee;
  padding-top: 4rem;
  align-items: center;

  .image-side{
    background: url(${mapa}) no-repeat center center;
    background-size: cover;
    width: 50%;
    height:auto;

    min-width: 50rem;
    min-height: 20rem;
  }
.left-side {
  padding-right: 4rem;
  margin-left: -10rem;
}
  

  .title{
    font-family: ${fonts.comfortaa};
    font-size: 2rem;
    color: #000000;
  }


  .texto{
    font-family:${fonts.comfortaa};
    text-size: 0.5rem;
    color:#000000;
  }

  .btn{
    font-family: ${fonts.comfortaa};
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
    justify-content: flex-start;
    padding-top: 20px;
  }
  .icones{
    width: auto;
  }
  
  .icone_whatsapp{
    width: auto;
    padding-left: 20px;
  }
 
  

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0;
    .title{
      font-size: 1.5rem;
    }
    .icones{
      font-size: 0.9rem;
    }
    .image-side{
      background: url(${mapaMobile}) no-repeat center center;
      background-size: auto;
      width:100%;
      height:auto;
  
      min-width: 0rem;
      min-height: 0rem;
      margin-right: 0rem;
    }
    .icones-empreendimentos{
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 20px;
    }
    .left-side {
      padding-right: 0rem;
      margin-left: -3rem;
      padding-top: 2rem;
    }
  }
`;

export default Content;
