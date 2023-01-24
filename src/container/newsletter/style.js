import styled from 'styled-components';
import font from 'config/fonts';
import colors from 'config/colors';

import background from 'images/background/newsletter.jpg';

const Content = styled.div`
  background-color: #000000;
  background-size:100%;
  margin: 2rem 0px !important;
  padding: 4rem 0rem 4rem 4rem;
  min-height: 14rem;
  max-height: 14rem;
  
  .row {
	justify-content: center;
  }
 
  .text {
  	color: #ff0d29;
  }
  .boxNome {
	width: 20rem;
 }
 .boxEmail {
	width: 20rem;
 }
 .boxCadastrar {
    padding: 7px 25px;
 }
  .title {
  	color: #ffffff;
  	font-family: ${font.opensans_regular};
  	font-size: 2rem;
	justify-content: flex-end;
  	strong {
  		font-family: ${font.opensans_bold};
  	}
  }
  
  .input-newsletter {
			border: ${colors.white};
			border-radius: 0.125rem;
			border-width: 1px;
			border-style: solid;
			background-color: transparent;
			color: ${colors.gray_text};
			font-family: ${font.opensans_light};
			padding: 10px 20px;
			z-index: 2;
			::-webkit-input-placeholder {
		    color: ${colors.white};
		  }
  }
  
  .buttom {
  		
  		z-index: 0;
		  display: block;
		  padding: 10px 16rem;
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

	margin: -55px 0 !important;
	min-height: 360px;
	max-height: 360px;

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
		margin-top:5px;
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
		margin-left: 10px;
		text-align:center;
		padding: 20px 7px;
	}
  }
`;

export default Content;
