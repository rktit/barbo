import styled from "styled-components";
import fonts from "config/fonts";


import imgPosVenda from "images/statics/imgPosVendaLs.png";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #eeeeee;
  
  .demarcador{
    height: 40px;
    width: 40px;

  
    border-bottom-style: solid;
    border-bottom-color: #20396f;
    border-bottom-width: 3px;
    border-right-style: solid;
    border-right-color: #20396f;
    border-right-width: 3px;
  
    margin: -10px 0 10px -40px;
  }

  .funcionarios{
    width:auto;
    height:650px;
  }

  .icone_whatsapp{
    margin-top: 10px;
    margin-left:10px;
    width:40px;
    height: 40px;
  }

  .title1{
    font-family: ${fonts.opensans_bold};
    font-size: 2rem;
    margin-right:5px;
    color:#20396f;
  }


  .texto{
    font-family:${fonts.opensans_regular};
    text-size:0.8rem;
    color:#20396f;
  }

  .btn{
    font-family:${fonts.opensans_bold};
    color: white;
    font-size: 1.2rem;
    text-aling: justify;
    background-color:#fc1347;
    border-color:#fc1347;
    margin-top:10px;
    width:200px;
    border-radius: 0;
  }

  .botao{
    text-align: center;
  }
  
  .icones{
    margin-bottom:20px;
    font-family:${fonts.opensans_bold};

    img{
      width:40px;
      heigth:auto;
    }
  }
 
  .image-side{
    background: url(${imgPosVenda}) no-repeat center center;
    background-size: cover;
  }
  

  @media only screen and (max-width: 600px) {
    padding:0px;
    flex-direction: column;
    .icones{
      font-size: 0.8rem;
    }
    .left-side{
      padding: 0 30px;
    }

    .image-side{
      padding: 110px 0 !important;
    }
  }
`;

export default Content;
