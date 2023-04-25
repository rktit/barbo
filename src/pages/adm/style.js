import styled from "styled-components";
import fonts from "config/fonts";
import colors from "config/colors";

import background from "images/background/bkg-orcamento.png";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  padding: 2% 0 !important;
  &.admin {
    margin-top: 50px !important;
  }
  .textos {
    font-family: ${fonts.raleway_regular};
  }
  .btnEnviar {
    background-color: #ff0d29 !important;
    border-color: #ff0d29 !important;
    font-family: ${fonts.raleway_bold};
  }
  .boxBotao {
    justify-content: center;
  }
  .textCheck {
    font-size: 0.7rem !important;
    color: #ff0d29 !important;
  }
  .input {
    background-color: #f2f2f2;
    ::placeholder {
      color: red;
      opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: red;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: red;
    }
  }
  .inputFile {
    .custom-file-label {
      background-color: #f2f2f2 !important;
      color: #ff0d29 !important;
    }
  }

span {
  padding-botton: 30px;
  font-family: ${fonts.raleway_semibold}
}
@media only screen and (max-width: 600px) {
  margin: 0 !important;
  .title {
    margin-top: 32px;
    font-size: 1.4rem;
    font-family: ${fonts.raleway_extrabold};
    color: #ffffff;
    text-align: center;
  }
  .iframe {
    width: 100%;
    max-height: 180px;
    pointer-events: auto;
    margin-top: 5%;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
}
`;

export default Content;