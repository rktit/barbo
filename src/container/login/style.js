import styled from 'styled-components';
import font from 'config/fonts';
import colors from 'config/colors';


const Content = styled.div`

  .conteudo {
	background-color: #252525;
    display: flex;
    border: none;
    border-radius: 0;
    width: 35rem;
    height: 25rem;
	margin-top: 3rem;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;   

    &.active {
        width: 20rem;
        }

    :hover {
    transition: 0.1s ease-in-out;
    text-decoration: none;
    }
  }
  
 
 .boxEmail {
	width: 30rem;
    padding-bottom: 1rem; 
}
 .boxCadastrar {
	display: flex!important;
    justify-content: center;
    align-items: center;
 }
 .logo {
	padding: 0rem;
    width: 20rem;
}
  .logoLogin {
	display: flex!important;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
  	color: #ffffff;
    padding-top: 30px;

  	font-family: ${font.comfortaa};
  	strong {
  		font-family: ${font.comfortaa};
  	}
  }
  
  .input-newsletter {
	  border: #ffffff;
	  border-radius: 0.125rem;
	  border-width: 1px;
	  border-style: solid;
	  background-color: transparent;
	  font-family: ${font.comfortaa};
	  padding: 10px 20px;
	  z-index: 2;
	  ::-webkit-input-placeholder {
	  color: #ffffff;
	  }
  }
  
  .buttom {
  		
  		z-index: 0;
		  display: block;
		  padding: 10px 12rem;
		  color: #ffffff;
		  background-color: #ff0d29;
		  font-size: 1rem;
		  font-family: ${font.comfortaa};
		  transition: 0.2s ease-in-out;
		  text-decoration: none;
		  text-transform: uppercase;
		  line-height: 100%;
		  max-height: 64px;
  
		  :hover {
		    transition: 0.2s ease-in-out;
		    background-color: ${colors.primary_dark};
		  }
		  
		  .ico_newsletter {
		  	width: 25px;
		  }
  }


  @media only screen and (max-width: 600px) {

	margin: 0px 0 !important;
	min-height: 320px;
	max-height: 320px;

	.conteudo{
		display: flex;
		flex-direction: column;
		width: 22rem;
    	height: 22rem;
	    margin-left: 0rem;
		margin-top: -4rem;

		&.active {
			width: 20rem;
			}
	
		:hover {
		transition: 0.1s ease-in-out;
		text-decoration: none;
		}
	}

	.boxEmail {
		width: 22rem;
		padding: 1rem 0rem 0rem 0rem;
	}

	.logo {
		padding: 0;
    width: 14rem;
	}
	.logoLogin {
		padding-top: 0px;
	}
	.title{
		display:flex;
		justify-content: center;
		margin-top:20px;
		text-align: center;
		font-size: 1.5rem;

		height: 100px;
	}
	.input-newsletter{
		padding: 15px 7px;
		width: 18rem;

		input{
			width: 150px;
		}
	}
	.buttom {
		text-align: center;
		padding: 20px 0px;
		margin: 1rem 0 0rem 0px;
		width: 18rem;
	}
  }
`;

export default Content;
