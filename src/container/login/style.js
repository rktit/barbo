import styled from 'styled-components';
import font from 'config/fonts';
import colors from 'config/colors';


const Content = styled.div`
  background-size:100%;


  .conteudo {
	background-color: #ffffff;
    display: flex;
    border: none;
    border-radius: 0;
    width: 35rem;
    height: 25rem;
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
	width: 30rem;
	display: flex!important;
    justify-content: center;
    align-items: center;
 }
  .logoLogin {
	display: flex!important;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
  	color: #000000;
    padding-top: 30px;

  	font-family: ${font.opensans_regular};
  	strong {
  		font-family: ${font.opensans_bold};
  	}
  }
  
  .input-newsletter {
			border: #000000;
			border-radius: 0.125rem;
			border-width: 1px;
			border-style: solid;
			background-color: transparent;
			color: ${colors.gray_text};
			font-family: ${font.opensans_light};
			padding: 10px 20px;
			z-index: 2;
			::-webkit-input-placeholder {
		    color: #000000;
		  }
  }
  
  .buttom {
  		
  		z-index: 0;
		  display: block;
		  padding: 10px 12rem;
		  color: ${colors.white};
		  background-color: #ff0d29;
		  font-size: 1rem;
		  font-family: ${font.opensans_light};
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

	margin: -50px 0 !important;
	min-height: 320px;
	max-height: 320px;

	.conteudo{
		display: flex;
		flex-direction: row;
	}

	.boxEmail{
		margin-top: -50px;
    	align-items: center;
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

		input{
			width: 150px;
		}
	}
	.buttom {
		text-align:center;
		padding: 20px 7px;
		margin-left: 10px;
	}
  }
`;

export default Content;
