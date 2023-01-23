import styled from "styled-components";
import fonts from "config/fonts";
import colors from "config/colors";

import background from "images/background/bkg-orcamento.png";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  padding: 2% 0 !important;
 
  .textos{
    font-family: ${fonts.opensans_regular};
  }

  .btnEnviar{
    background-color:#20396f !important;
    border-color: #20396f !important;
    font-family: ${fonts.opensans_bold};
  }
  
  .boxBotao{
    justify-content: center;
  }

  .textCheck{
    font-size: 0.7rem !important;
    color: #000000 !important;
  }
  .input{
    background-color: #f2f2f2;
    ::placeholder {
      color: black;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: black;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
    color: black;
    }
  }

  .inputFile{
      .custom-file-label{
        background-color: #f2f2f2 !important;
        color: #00000 !important;
      }
    }
  }
  span{
    padding-botton:30px;
    font-family: ${fonts.opensans_semibold}
  }
  c

  @media only screen and (max-width: 600px) {
    margin: 0 !important;

    .title {
      margin-top: 32px;
      font-size: 1.4rem;
      font-family: ${fonts.opensans_extraBold};
      color: #ffffff;
      text-align: center;
    }
    
    .iframe {
      width: 100%;
      max-height: 180px;
      pointer-events: auto;
      margin-top: 5%;
    }
    .form{
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Content;
