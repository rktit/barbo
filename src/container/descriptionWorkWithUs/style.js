import styled from "styled-components";
import fonts from "config/fonts";
import colors from "config/colors";

import background from "images/background/bkg-orcamento.png";

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  padding: 2% 0 !important;

  .textos{
    text-align: center;
  }
  
  span{
    padding-botton:30px;
    font-family: ${fonts.comfortaa}
  }
  strong{
    font-family: ${fonts.comfortaa}
  }

  @media only screen and (max-width: 600px) {
    margin: 0 !important;

    .title {
      margin-top: 32px;
      font-size: 1.4rem;
      font-family: ${fonts.comfortaa};
      color: #ffffff;
      text-align: center;
    }
    
    .iframe {
      width: 100%;
      max-height: 180px;
      pointer-events: auto;
      margin-top: 5%;
    }
  }
`;

export default Content;
