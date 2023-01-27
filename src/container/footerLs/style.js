import styled from "styled-components";
import fonts from "config/fonts";
import colors from "config/colors";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #000000;
  padding-top: 32px;
  padding-bottom: 10px;

  .box {
	width: 100%;
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
  .logo-footer{
	margin=top: 40px;

	img{
		width: 180px;
	}
  }
  .texto{
    font-family:${fonts.opensans_light};
    color:#ffffff;
	text-align: left;
  }
  .nome-logo{
	  font-size: 1.2rem;
	  font-family: ${fonts.opensans_bold};

	  margin-top:10px;
  }

  .titulo {
    font-size: 1.2rem;
    font-family: ${fonts.opensans_bold};
    line-height: 120%;
	color: white;
	padding-bottom: 16px;
  }
  
  .contexto {
	font-family: ${fonts.opensans_light};
	font-size: 0.8rem;
	}

  .conteudo {
  	font-family: ${fonts.opensans_light};
  	font-size: 0.8rem;
	}
  	
  	.icone_contato {
  		height: 18px;
  	}
  	
  	.icone_midia {
      height: 24px;
	  width: 24px;
	  margin: 10px 0px 0px -16px;
    }
  }
  
  .infos {
    margin-top: 10px !important;
	margin-bottom: 30px !important;
  }

  .copyright {
    color: #696969;
    text-align: center;
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
