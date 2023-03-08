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
  .row {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}
  .image-side{
    background: url(${mapa}) no-repeat center center;
    background-size: cover;
    width: 45rem;
    min-width: auto;
    min-height: 18rem;
    margin: 0 0rem 0 0rem;
  }
  .left-side {
    padding-right: 5rem;
    margin-left: 0rem;
  }
  

  .title{
    font-family: ${fonts.comfortaa};
    font-size: 2rem;
    color: #252525;
  }


  .texto{
    font-family:${fonts.comfortaa};
    text-size: 0.5rem;
    color:#252525;
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
      background: url(${mapa}) no-repeat center center;
      background-size: cover;
      width: 24rem;
      height:auto;
      margin-bottom: 4rem;
      min-width: auto;
      min-height: 20rem;
      margin: 0 0rem 0 0rem;
    }
    .icones-empreendimentos{
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 20px;
      padding-bottom: 2rem;
    }
    .left-side {
      padding-right: 0rem;
      margin-left: 0rem;
      padding-top: 2rem;
      margin-top: -44rem;

    }
  }
`;

export default Content;
