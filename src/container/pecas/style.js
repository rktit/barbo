import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
  
.conteudo{
  display:flex;
  flex-direction: row;
  justify-content: center;  
}

  
  .pecas{
    width:500px;
    height:auto;
  }

  .icone_whatsapp{
    margin-top: 10px;
    margin-left:10px;
    width:40px;
    height: 40px;
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
  
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 150px;
  }

  .title{
    font-family: ${fonts.opensans_bold};
    font-size: 2rem;
    margin:10px 190px;
    color:#ff7313;
  }


  .texto{
    font-family:${fonts.opensans_regular};
    font-size:1rem;
  }

  .btn{
    font-family:${fonts.opensans_bold};
    color: white;
    font-size: 1.2rem;
    text-align: justify;
    background-color:#ff7313;
    border-color:#ff7313;
    margin-top:10px;
    width:250px;
    border-radius: 0;
  }
  .txtBtn{
    color:#ffffff;
    margin-top:15px;

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
    .conteudo{
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    

    .title{
      text-align: center;
    }

    .texto{
      text-align: center;
      font-size:0.8rem;
    }

    .left-side{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .right-side{
      height: 350px;
    }

    .btn{
      display: flex;
      flex-direction: row;
      justify-content:center;
      font-size: 0.8rem;
      width:200px;
    }
    .pecas{
      width:100%;
      height:auto;
    }
    .icone_whatsapp{
      margin-left:10px;
      width: 35px;
      height: 35px;
    }
  }
`;

export default Content;
