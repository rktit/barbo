import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
  .texto{
    font-family: ${fonts.raleway_regular};
  }
  .title{
    font-family: ${fonts.raleway_bold};
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
.imagem1{
  width: 100%;
  height: auto;
}

.btn-fechar{
  background: transparent !important;
}
`;

export default Content;