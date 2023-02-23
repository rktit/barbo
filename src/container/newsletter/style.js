import styled from 'styled-components';
import font from 'config/fonts';
import colors from 'config/colors';

const Content = styled.div`
  background-color: #252525;
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
    margin-top: 1rem;
  	color: #ffffff;
  	font-family: ${font.comfortaa};
    font-size: 1.55rem;
	}
  .texto {
	margin-top:-10px;
	color: #e73538;
	font-family: ${font.comfortaa};
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
	font-family: ${font.comfortaa};
	padding: 5px 26px;
	margin: 0 16px 0 0;
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
		  background-color: #e73538;
		  font-size: 1rem;
		  font-family: ${font.comfortaa};
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
    margin: 4rem 0 !important;
    min-height: 30rem;
    max-height: 20rem;

	.conteudo{
		display: flex;
		flex-direction: column;
		margin-bottom: 26px;
	}

	.boxNome{
		margin-top: 0px
    	align-items: center;
		display: flex!important;
    	flex-direction: column;
    	align-content: center;
    	align-items: center;
		margin: 0px;
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
		margin-left: 6.5rem;
	}

	.title{
		display: flex;
		flex-direction: column;		
		justify-content: center;
		margin-top:0px;
		text-align: center;
		font-size: 2rem;
		padding: 0 0rem;
		padding-top: 0px;
	}
	.texto {
		font-size: 1.5rem;
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
 		padding: 10px 0px;
 		margin-left: -6.5rem;
 		margin-top: 3px;
 		width: 16rem;
}
	}
  }
`;

export default Content;
