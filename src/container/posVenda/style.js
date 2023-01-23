import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #eeeeee;
  
  .funcionarios{
    width:500px;
    height:auto;
  }

  .demarcador{
    height: 40px;
    width: 40px;
  
    border-bottom-style: solid;
    border-bottom-color: #ff7313;
    border-bottom-width: 3px;
    border-right-style: solid;
    border-right-color: #ff7313;
    border-right-width: 3px;
  
    margin-top: -40px;
    margin-bottom: 10px;
  }

  .conteudo{
    flex-direction: column;
    margin-left: 20px;
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
    color:#ff7313;
  }

  .texto{
    font-family:${fonts.opensans_regular};
  }

  .btn{
    font-family:${fonts.opensans_bold};
    color: white;
    font-size: 1.2rem;
    text-align: justify;
    background-color:#ff7313;
    border-color:#ff7313;
    margin-top:10px;
    width:200px;
    border-radius: 0;
  }
  
  .icones{
    margin-bottom:20px;
    font-family:${fonts.opensans_bold};

    img{
      width:40px;
      height:auto;
    }
  }
 
  

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0px;

    .left-side{
      paddind: 0 30px;
    }
    .funcionarios{
      width:100%;
    }
    .btn{
      font-size: 0.8rem;
      width:180px;
    }
    .icone_whatsapp{
      width: 35px;
      height: 35px;
    }
  }
`;

export default Content;
