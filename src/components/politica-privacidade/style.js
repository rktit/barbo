import styled from "styled-components";
import font from "config/fonts";
import colors from "config/colors";

const Content = styled.div`
  font-family: ${font.comfortaa};
  font-size: 12px;
  
    button {
    background-color: ${colors.gray};
    font-family: ${font.comfortaa};
    text-transform: uppercase;
    color: ${colors.black};
    border-radius: 8px;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
  }
`

const Title = styled.div`
  font-family: ${font.comfortaa};
  font-size: 18px;
`

export {Content, Title};
