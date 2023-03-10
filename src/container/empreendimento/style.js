import styled from "styled-components";
import fonts from "config/fonts";


import imgConsorcio from "images/empreendimento_interna/nome_empreendimento.png";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #eeeeee;
  
  .image-side{
    background: url(${imgConsorcio}) no-repeat center center;
    background-size: cover;
  }

  .imgConsorcio{
    width:100%;
    height:auto;

    min-width: 620px;
    min-height: 600px;
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
    font-family: ${fonts.opensans_light};
    font-size: 1.5rem;
    color: #000000;
  }


  .texto{
    font-family:${fonts.opensans_light};
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
    font-family: ${fonts.opensans_light};
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
    padding: 0;
    .title{
      font-size: 1.5rem;
    }
    .icones{
      font-size: 0.9rem;
    }

    .image-side{
      padding: 250px 0 !important;
    }
  }
`;

export default Content;
