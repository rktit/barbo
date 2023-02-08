import styled from "styled-components";
import fonts from "config/fonts";
import colors from "config/colors";

const Content = styled.div`
	position: fixed;
	bottom: 15px;
	background-color: RGBA(0,0,0,0.9);
	border-radius: 16px;
	padding: 15px;
	z-index: 999;
	left: 50%;
  transform: translate(-50%, -10%);
  display: flex;
  color: ${colors.white};
  font-family: ${fonts.comfortaa};
  font-size: 12px;
  
  a {
  	text-decoration: underline;
  	font-family: ${fonts.comfortaa};
  	color: ${colors.white};
  }
  
  button {
    background-color: ${colors.primary};
    font-family: ${fonts.comfortaa};
    text-transform: uppercase;
    color: ${colors.white};
    border-radius: 8px;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Content;
