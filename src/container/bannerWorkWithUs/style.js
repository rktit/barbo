import styled from "styled-components";
import fonts from "config/fonts";
import colors from "config/colors";
import banner_trabalheConosco from "images/banner/BannerTrabalheConosco.jpg";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  background: url(${banner_trabalheConosco}) no-repeat center top;
  background-size: cover;

  .left-side{
    padding: 0 !important;
  }

  .contentItens{
    display: flex;
    flex-direction: row;
    align-items: center !important;
  }

  .textos{
    padding-top: 80px;
    padding-left: 50px;
    color:#000000;
    font-size: 2rem;
    z-index: 1;
    font-family: ${fonts.opensans_regular};
    margin-top: 130px;
    margin-bottom: 130px;
  }
  
  span{
    padding-bottom:30px;
    font-family: ${fonts.raleway_regular}
  }
  strong{
    font-family: ${fonts.raleway_bold}
  }
  

  .trabalhe-conosco {
  	margin-top: 20px !important;
  
  	span {
  		font-family: ${fonts.raleway_bold};
  		font-size: 0.7rem;
  	}
  }

  @media only screen and (max-width: 1024px) {
    min-height: auto;
	  max-height: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .textos{
      padding-top: 50px;
      padding-left: 50px;
      font-size: 2rem
    }
    
  }

  @media only screen and (max-width: 900px) {
    min-height: auto;
    max-height: none;
    
    .textos{
      padding-top: 5px;
      padding-left: 50px;
      font-size: 2rem
    }
    .contentItens{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center !important;
    }
  }

  @media only screen and (max-width: 600px) {
    min-height: auto;
	  max-height: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .textos{
      padding-top: 80px;
      padding-left: 50px;
      font-size: 1.5rem;
      margin-top: 100px;
      margin-bottom: 100px;
      text-align: center;
    }
    .contentItens{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center !important;
    }
    .mobile {
      width: 100%;
      max-width: 400px;
      height: 100%;
    }
    
    .left-side{
    padding-top:20px !important;
  }
    .form{
      display: flex;
      flex-direction: row;
    }
    
  }

`;