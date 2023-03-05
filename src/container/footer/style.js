import styled from "styled-components";
import fonts from "config/fonts";
import colors from "config/colors";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: #252525;
  padding-top: 2rem;

.box {
  display: flex;
    padding: 0rem 0rem 0rem 6rem;
    // margin-right: -5rem;
}
  .logo-footer{
    margin: 0px;
  }
  .logo{
    width: 14rem;
  }

  .titulo {
    font-size: 0.8rem;
    font-family: ${fonts.comfortaa};
    line-height: 120%;
  	color: white;
    font-weight: 900;
  }
  
  .chegar {
    font-size: 0.8rem;
    font-family: ${fonts.comfortaa};
    line-height: 120%;
  	color: white;
    &.active {
      color: #e73538;
      text-decoration: none;
      text-decoration-line: none;
    }
    
    :hover {
      transition: 0.1s ease-in-out;
      color: #e73538;
      text-decoration: none;
      text-decoration-line: none;
    }
  }

  .info {
	margin-top:20px;
  }
  
  .conteudo {
  	font-family: ${fonts.comfortaa};
  	font-size: 0.7rem;
  	
  	span {
  		color: ${colors.primary};
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
  .line {
    padding: 20px 15px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: rgb(255 255 255);
    width: 55rem;
    margin: auto;
  }
  .rodape-text {
    font-size: 0.75em;
    color: #aba3a3;
    text-align: center;
    text-transform: uppercase;
    text-align: center;
    font-family: Comfortaa-VariableFont_wght;
    margin-top: 100px;
    :hover { 
      color: #ffffff;
    }
}
    a {
  		color: ${colors.white};
  		transition: 0.2s ease-in-out;
  		:hover {
  			color: ${colors.primary};
  			transition: 0.2s ease-in-out;
  			text-decoration: none;
        text-decoration-line: none;
  		}
  
  a:hover {
    color: ${colors.white};
    text-decoration-line: none;
  }
}
  @media only screen and (max-width: 600px) {
    padding-bottom: 8rem;
    .titulo {
      font-size: 1rem;
      font-family: ${fonts.comfortaa};
      line-height: 120%;
      color: white;
      font-weight: 900;
    }
    .conteudo {
      font-family: ${fonts.comfortaa};
      font-size: 0.75rem;
      
      span {
        color: ${colors.primary};
      }
    }
    .box {
      display: flex;
      padding: 0rem 0rem 3rem 3rem;
    }

    .info {
    	margin-top: 40px;
    	::before {
  	    content: '';
		    border-left: none;
		    width: 150px;
		    position: absolute;
        margin: 0 0 0 5rem;
        }
  		}
      
      .icones{
        display: flex;
        justify-content: flex-start;
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
        margin-left: -3rem;
        padding-right: 1rem;
      }
    }
  
      `;

export default Content;
