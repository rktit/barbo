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
    margin-bottom: 24px;
	color: white;
  }
  
  
  .line {
	padding: 20px 15px;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-color: rgb(105 105 105);
	width: 55rem;
	margin: auto;
  }
  .conteudo {
  	font-family: ${fonts.opensans_regular};
  	font-size: 0.8rem;
  	
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
