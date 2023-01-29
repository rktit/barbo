import styled from "styled-components";
import fonts from "config/fonts";
import colors from "config/colors";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #000000;
  padding-top: 32px;
  padding-bottom: 10px;


  .logo-footer{
	margin:40px -70px 0px 20px;

	img{
		width: 180px;
	}
  }

  .nome-logo{
	  font-size: 1.2rem;
	  font-family: ${fonts.opensans_bold};

	  margin-top:10px;
  }

  .titulo {
    font-size: 1rem;
    font-family: ${fonts.opensans_bold};
    line-height: 120%;
    margin-bottom: 24px;
	color: white;
  }
  
  .info {
	margin-top:24px;
  
  }
  
  .conteudo {
  	font-family: ${fonts.opensans_regular};
  	font-size: 0.8rem;
  	
  	span {
  		color: ${colors.primary};
  	}
  	
  	a {
  		color: ${colors.white};
  		transition: 0.2s ease-in-out;
  		margin-bottom: 8px;
  		:hover {
  			color: ${colors.primary};
  			transition: 0.2s ease-in-out;
  			text-decoration: none;
  		}
  	}
  	
  	.icone_contato {
  		height: 18px;
  	}
  	
  	.icone_midia {
      height: 2rem;
      width: 4rem;
      margin-top: -16px;
      margin-left: -3rem;
      flex-wrap: wrap;
      padding-right: 2.5rem;
    }
  
  .infos {
    margin-top: 10px !important;
  }
.line{

}
  .copyright {
    color: #ffffff;
    margin-top: 100px;
    text-align: center;
    font-size: 12px;
    font-family: ${fonts.opensans_regular};
  }

  @media only screen and (max-width: 600px) {
    
    .info {
    	margin-top: 50px;
    	::before {
  	    content: '';
		    border-left: none;
		    width: 150px;
		    border-top: 1px solid #24c662;
		    position: absolute;
        margin: 0 0 0 20px;

  		}
    }

	.icones{
		display: flex;
		justify-content:center;
	}

	.copyright{
		margin-top: 50px;
	}
  .logo-footer {
    margin: 40px -70px 0px 10px;
  }
   .icone_midia {
    height: 2rem;
    width: 4rem;
    margin-top: -16px;
    margin-left: -3rem;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-right: 20px;
}
  }
`;

export default Content;
