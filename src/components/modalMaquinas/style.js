import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
  .texto{
    font-family: ${fonts.raleway_regular};
  }

  .btn{
    background-color: white;
    color:#ff0d29;
    border: none;
    font-family: ${fonts.raleway_bold};
   
    &.active {
      background-color: #ffbcbc;
    }

    :hover {
      transition: 0.1s ease-in-out;
      background-color: #ffbcbc;
      text-decoration: none;
    }
  }

  .btn-fechar{
    background: transparent !important;
    z-index: 1;
  }

`;

export default Content;