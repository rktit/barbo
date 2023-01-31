import styled from 'styled-components';
import font from 'config/fonts';
import colors from 'config/colors';

const Content = styled.div`
  background-color: #000000;
  background-size: 100%;
  padding: 50px !important;
  margin: 50px 0!important;
  display: flex;
  justify-content: center;

  .conteudo {
	display: flex;
	flex-direction: wrap;
	align-items: center;
    justify-content: center;
  }
  .title {
	margin-top:-10px;
  	color: #ffffff;
  	font-family: ${font.opensans_regular};
    font-size: 1.55rem;
	}
  .texto {
	margin-top:-10px;
	color: #fc1347;
	font-family: ${font.opensans_light};
	font-size: 1rem;
  }
  .boxNome{
	margin-top: 0px;
	align-items: center;
	flex-direction: inherit;
	margin: 0 2rem;
}
.boxEmail{
	align-items: center;
	flex-direction: column;
}
.boxCadastrar{
    margin-top: 6px;
	align-items: center;
	flex-direction: column;
}
  .input-newsletter {
			border: none;
			background-color: ${colors.white};
			color: ${colors.gray_text};
			font-family: ${font.opensans_regular};
			padding: 5px 29px;
			margin: auto;
			z-index: 2;
			::-webkit-input-placeholder {
		    color: ${colors.secondary};
		  }
  }
  
  .buttom {
  		z-index: 0;
		  display: block;
		  padding: 15px 25px;
		  color: ${colors.white};
		  background-color: #fc1347;
		  font-size: 1rem;
		  font-family: ${font.opensans_bold};
		  transition: 0.2s ease-in-out;
		  text-decoration: none;
		  text-transform: uppercase;
		  text-align: center;
		  line-height: 100%;
		  max-height: 60px;
		  width: 32rem;
		  margin-left: -16px;

		  :hover {
		    transition: 0.2s ease-in-out;
		    background-color: ${colors.primary_dark};
		  }
		  
		  .ico_newsletter {
		  	width: 25px;
		  }
  }

  @media only screen and (max-width: 600px) {
	margin: 50px 0 !important;
	min-height: 24rem;
	max-height: 20rem;

	.conteudo{
		display: flex;
		flex-direction: column;
	}

	.boxNome{
		margin-top: 0px
    	align-items: center;
		display: flex!important;
    	flex-direction: column;
    	align-content: center;
    	align-items: center;
		margin: 1.5rem 0px 0px 0px;
	}
	.boxEmail{
		margin-top: 0px;
    	align-items: center;
		display: flex!important;
    	flex-direction: column;
    	align-content: center;
    	align-items: center;
	}
	.boxCadastrar{
		margin-top: 0px;
    	align-items: center;
		display: flex!important;
    	flex-direction: column;
    	align-content: center;
    	align-items: center;
	}

	.title{
		display: flex;
		flex-direction: column;		
		justify-content: center;
		margin-top:0px;
		text-align: center;
		font-size: 1.5rem;
		padding: 0 3rem;
		height: 100px;
	}
	.texto {
		display: flex;
		flex-direction: column;	
	  }
	.input-newsletter{
		padding: 4px 2rem;
		margin: 3px 0;

		input{
			width: 10rem;
		}
	}
	.buttom {
		text-align: center;
	    padding: 7px 0px;
	    margin-left: 0px;
		width: 190px;
	}
  }
`;

export default Content;
