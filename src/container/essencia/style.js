import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
  background-color: #ffffff;
  padding: 32px;

  .medalhas{
    flex-direction: row;
    justify-content: space-between;
  }

  .icones{
    display:flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
    color:#20396f;
    font-family: ${fonts.opensans_regular};
    font-size: 1.2rem;
    color: #000;

    margin-bottom:20px;  
      
    img{
      width:70px;
      heigth:auto;
    }
  }

  .title{
    color: #000000;
    font-size: 2rem;
    font-family: ${fonts.opensans_light};
    text-align: center;
    padding-bottom: 3rem;
  }

  .text{
    font-family: ${fonts.opensans_light};
    color: #000000;
  strong{
      font-family: ${fonts.opensans_regular};
    }
  }

  .orcamento{
    background-color: #20396f;
    color: white;

    display:flex;
    flex-direction: column;
    align-items: center;

    margin-top: -350px;
  }

  .boxTitle{
    margin-left: -25px;
    font-size: 2rem;
    font-family: ${fonts.opensans_light};
    text-align: start;
    line-height:2.3rem;
    strong{
      font-size: 3rem;
      font-family: ${fonts.opensans_bold};
    }
  }

  .infoCotacao{
    border-top: 1px solid #fff;
    margin-top: 20px;
    padding-top:5px;
    font-size:1rem;
    font-family: ${fonts.opensans_regular};
  }

  .btnWhat{
    display: flex;
    flex-direction: row;
  }

  .icone_whatsapp{
    width:45px;
    height:45px;
    margin-left:10px;
  }

  input{
    background-color:#20396f;
    color: #fff;
    border: 1px solid #b3b3b3;
    border-radius: 0px;
    // width:400px;
    height: 50px;

    ::-webkit-input-placeholder {
        color: #fff;
    }
    
        &.active {
        background-color: #20396f;
        color: #fff;
        }

        :hover {
        transition: 0.1s ease-in-out;
        background-color: #20396f;
        text-decoration: none;
        }
        
        :focus{
            background-color: #20396f;
            color: #fff;
        }
  }

    .btn{
      font-family:${fonts.opensans_bold};
      color: #fc1347;
      font-size: 1rem;
      text-aling: justify;
      background-color:#fff;
      border-color:#fff;
      border-radius: 0;
      
      
      &.active {
        background-color: #ff3a66;
        }

        :hover {
        transition: 0.1s ease-in-out;
        background-color: #ff3a66;
        text-decoration: none;
        }
    }
  
  .content {
	  display: flex;
	  flex-direction: column;
  	justify-content: space-between;
  }

  .localizacoes{
    margin-top: 60px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .localizacao{
    background-color: #20396f;
    height: 420px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items:center;
    margin-rigth: -100px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.3);

    img{
      width: 325px;
      heigth: auto;
    }
  }

  .cidade{
    color: white;
    font-family: ${fonts.opensans_bold};
    font-size: 1.2rem;
    margin-top:2px;
    margin-bottom: 5px;
  }

  .splideLoc{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  


  @media only screen and (max-width: 600px) {
    padding: 0px;
    .content {
      margin-bottom: 32px;
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
`;

export default Content;
