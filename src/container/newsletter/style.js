import styled from 'styled-components';
import font from 'config/fonts';
import colors from 'config/colors';

const Content = styled.div`
  background-color: #000000;
  background-size: 100%;
  padding: 50px !important;
  margin: 50px 0!important;


  .conteudo {
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: center;
  }
  .title {
	margin-top:-10px;
  	color: #ffffff;
  	font-family: ${font.opensans_regular};
  	font-size: 2rem;
	justify-content: flex-end;
  }
  .texto {
	margin-top:-10px;
	color: #fc1347;
	font-family: ${font.opensans_light};
	font-size: 1rem;
	justify-content: flex-end;

	margin-left: 6rem;
  }
  .boxNome{
	margin-top: 0px;
	align-items: center;
	flex-direction: inherit;
    width: 24rem;
    padding: 0 0 12px 60px;
}
.boxEmail{
	margin-left: -30px;
	align-items: center;
	flex-direction: column;
	width: 20rem;
	margin-top: 0px;
}
.boxCadastrar{
	margin-top: 0px;
	align-items: center;
	flex-direction: column;
	margin-left: 29px;

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
		  width: 33rem;

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
	min-height: 320px;
	max-height: 320px;

	.conteudo{
		display: flex;
		flex-direction: column;
	}


	.boxNome{
		margin-top: -50px;
    	align-items: center;
	}
	.boxEmail{
		margin-top: -50px;
    	align-items: center;
	}
	.boxCadastrar{
		margin-top: -50px;
    	align-items: center;
	}

	.title{
		display: flex;
		flex-direction: column;		
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
