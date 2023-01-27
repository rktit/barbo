import styled from "styled-components";
import fonts from "config/fonts";
import colors from "config/colors";

const Content = styled.div`
  flex-direction: row;
  margin: 0 -5rem 0px 0!important;
  justify-content: center;
  background-color: #000000;
  padding-top: 3rem;
  padding-bottom: 10px;

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
    font-size: 1rem;
    font-family: ${fonts.opensans_bold};
    line-height: 120%;
    margin-bottom: 4px;
	color: white;
  }
  

  .conteudo {
  	font-family: ${fonts.opensans_light};
  	font-size: 0.8rem;
    padding-left: 0px;
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
    margin: 14px 0!important;
  }

  .copyright {
    color: #696969;
    text-align: center;
    font-size: 12px;
    font-family: ${fonts.opensans_light};
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
