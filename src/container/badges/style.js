import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
  background-color: #ffffff;
  padding: 32px;

  .medalhas{
    flex-direction: row;
    justify-content: space-between;

    margin-top: 250px;
  }

  .icones{
    display:flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
    color:#ff7313;
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
    color: #ff7313;
    font-size: 2rem;
    font-family: ${fonts.opensans_bold};
  }

  .title2{
    color: #ff7313;
    font-size: 1rem;
    margin-top:10px;
    font-family: ${fonts.opensans_bold};
  }

  .orcamento{
    background-color: #ff7313;
    color: white;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: -250px;
    margin-left: 110px;
  }

  .boxTitle{
    margin-left: -55px;
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
    background-color:#ff7313;
    color: #fff;
    border: 1px solid #18be57;
    border-radius: 0px;
    // width:400px;
    height: 50px;

    ::-webkit-input-placeholder {
        color: #fff;
    }
    
        &.active {
        background-color: #ff7313;
        color: #fff;
        }

        :hover {
        transition: 0.1s ease-in-out;
        background-color: #ff7313;
        text-decoration: none;
        }
        
        :focus{
            background-color: #ff7313;
            color: #fff;
        }
  }

    .btn{
      font-family:${fonts.opensans_bold};
      color: white;
      font-size: 1.2rem;
      text-aling: justify;
      background-color:#18be57;
      border-color:#18be57;
      border-radius: 0;
      margin:
    }
  
  .content {
	  display: flex;
	  flex-direction: column;
  	justify-content: space-between;
  }


  @media only screen and (max-width: 600px) {    
    padding: 0px;
    .boxTitle{
      font-size: 2rem;
  
    }
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
  @media only screen and (max-width: 350px) {
    .orcamento{
    margin-top: 25px;
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
