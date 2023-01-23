import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
  background-color: #ffffff;
  padding: 32px;

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .conteudo{
    flex-direction: row;
    justify-content: space-between;
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
  
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .title{
    color: #ff7313;
    font-size: 2rem;
    font-family: ${fonts.opensans_bold};
  }
  .title2{
    font-family: ${fonts.opensans_regular};
  }
  .logo{
    width: 210px;
    height: auto;
  }


  .icones{
    display:flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
    color:#ff7313;
    font-family: ${fonts.opensans_bold};
    font-size: 1.2rem;

    margin-bottom:20px;  
      
    img{
      width:60px;
      height:auto;
    }
  }
  .btn{
    font-family: ${fonts.opensans_bold};
    color: white;
    font-size: 1.2rem;
    text-align: justify;
    background-color:#ff7313;
    border-color:#ff7313;
    margin-top:5px;
    width:300px;
    border-radius: 0;
    margin-right:10px;
  }

  .boxBtn{
    margin-top: 20px;
    justify-content: center;
  }

  .infos{
    color: #000000;
    font-size: 1.2rem;
  }

  .btnWhat{
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color:#ff7313;
    border-color:#ff7313;
    font-family: ${fonts.opensans_bold};
    border-radius: 0;
  }
  .txtWhats{
    color: #ffffff;
    text-align: center;
    font-size: 1.3rem;
    margin-top:10px;
    margin-left:5px;
    margin-right:5px;
  }
  .icone_whatsapp{
    width:45px;
    height:45px;
    margin-top:5px;
    margin-bottom:5px;
  }

    .texto{
      margin-top:5px;
      text-align:center;
      font-size: 1.2rem;
      font-family:${fonts.opensans_regular};
    }

  @media only screen and (max-width: 600px) {
  .content {
  margin-bottom: 32px;
  }
    .topo{
      display:flex;
      flex-direction: column-reverse;
      justify-content: center;
    }

    .logo{
      margin-bottom: 30px;
    }

    .conteudo{
      display:flex;
      flex-direction: column;
      justify-content: center;
    }

    .icones{
      margin-bottom: 60px;
    }

    .right{
      display:flex;
      justify-content: center;
    }

    .left{
      text-align: center;
    }
    
    .txtWhats{
      font-size: 1rem;
    }
    .icone_whatsapp{
      width:35px;
      height:35px;
    }
    .btn{
      font-family:${fonts.raleway_bold};
      color: white;
      font-size: 0.8rem;
      text-align: justify;
      margin-top:5px;
      width:200px;
      border-radius: 0;
      margin-right:10px;
    }
  }
`;

export default Content;
