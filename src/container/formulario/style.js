import styled from "styled-components";
import fonts from "config/fonts";


import mapa from "images/statics/mapa_local.png";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #eeeeee;
  
  .image-side{
    background: url(${mapa}) no-repeat center center;
    background-size: cover;
    width:100%;
    height:auto;

    min-width: 50rem;
    min-height: 20rem;
    margin-right: -20rem;
  }
.left-side {
  padding-right: 4rem;
  margin-left: -10rem;
}
  .icone_whatsapp{
    margin-top: 10px;
    margin-left:10px;
    width:40px;
    height: 40px;
  }

  .title{
    font-family: ${fonts.opensans_light};
    font-size: 2rem;
    color: #000000;
  }


  .texto{
    font-family:${fonts.opensans_light};
    text-size: 0.5rem;
    color:#000000;
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
      width:40px;
      heigth:auto;
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
