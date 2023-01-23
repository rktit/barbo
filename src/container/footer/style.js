import styled from "styled-components";
import fonts from "config/fonts";
import colors from "config/colors";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #ff7313;
  padding-top: 32px;
  padding-bottom: 10px;


  .logo-footer{
	margin:40px -70px 0px 60px;

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
	color:#ffffff;
  }
  
  .info {
	margin-top:24px;

  	::before {
  		    content: '';
		    height: 80px;
		    border-left: 1px solid #24c662;
		    position: absolute;
		    margin-left: -8px;
  	}
  	.conteudo {
  		margin-top: 10px;
  	}
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
      height: 24px;
      margin-top: 8px;
    }
  }
  
  .infos {
    margin-top: 10px !important;
  }

  .copyright {
    color: #ffffff;
    margin-top: 100px;
    text-align: left;
    font-size: 12px;
    font-family: ${fonts.opensans_regular};
  }

  @media only screen and (max-width: 600px) {
    .logo {
    	max-width: 200px;
    }
    
    .info {
    	margin-top: 50px;
    	::before {
  	    content: '';
		    border-left: none;
		    width: 150px;
		    border-top: 1px solid #24c662;
		    position: absolute;
		    margin-top: -10px;
  		}
    }

	.icones{
		display: flex;
		justify-content:center;
	}

	.copyright{
		margin-top: 50px;
	}
  }
`;

export default Content;
