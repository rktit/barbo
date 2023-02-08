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
	margin: 20px -70px 0px -10px;

	img{
		width: 180px;
	}
}

  .nome-logo{
	  font-size: 1.2rem;
	  font-family: ${fonts.comfortaa};
	  margin-top:10px;
  }

  .titulo {
    font-size: 1rem;
    font-family: ${fonts.comfortaa};
    line-height: 120%;
  	color: white;
  }
  
  .chegar {
    font-size: 1rem;
    font-family: ${fonts.comfortaa};
    line-height: 120%;
  	color: white;
    &.active {
      color: #fc1347;
      text-decoration: none;
      text-decoration-line: none;
    }
    
    :hover {
      transition: 0.1s ease-in-out;
      color: #fc1347;
      text-decoration: none;
      text-decoration-line: none;
    }
  }

  .info {
	margin-top:24px;
  }
  
  .conteudo {
  	font-family: ${fonts.comfortaa};
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
      height: 1.5rem;
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
    font-family: ${fonts.comfortaa};
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
    margin: 5px;
}
   .icone_midia {
      height: 2rem;
      width: 3rem;
      margin-top: -16px;
      margin-left: -2rem;
      flex-wrap: wrap;
      padding-right: 0;
  }
`;

export default Content;
