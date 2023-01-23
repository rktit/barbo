import styled from 'styled-components';
import font from 'config/fonts';
import colors from 'config/colors';

import background from 'images/background/newsletterLS.png';

const Content = styled.div`
  background: url(${background}) no-repeat center center;
  background-size:100%;
  padding-top: 50px !important;
  min-height: 300px;
  max-height: 300px;

  
  .title {
	margin-top:-10px;
  	color: #fc1347;
  	font-family: ${font.opensans_regular};
  	font-size: 2rem;
	justify-content: flex-end;
  	strong {
  		font-family: ${font.opensans_bold};
  	}
  }
  
  .input-newsletter {
			border: none;
			background-color: ${colors.white};
			color: ${colors.gray_text};
			font-family: ${font.opensans_regular};
			padding: 5px 25px;
			z-index: 2;
			::-webkit-input-placeholder {
		    color: ${colors.secondary};
		  }
  }
  
  .buttom {
  		
  		z-index: 0;
		  display: block;
		  padding: 20px;
		  color: ${colors.white};
		  background-color: #fc1347;
		  font-size: 1rem;
		  font-family: ${font.opensans_bold};
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
