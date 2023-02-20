import styled from "styled-components";
import fonts from "config/fonts";
import colors from "config/colors";

const Content = styled.div`
	position: fixed;
	bottom: -6px;
	background-color: RGBA(0,0,0,0.3);
	border-radius: 0px;
  padding: 1rem 0rem;
	z-index: 999;
	left: 50%;
  max-width: 100%;
  transform: translate(-50%, -10%);
  display: flex;
  justify-content: center;
  color: ${colors.white};
  font-family: ${fonts.comfortaa};
  font-size: 12px;
  
  a {
    text-decoration: none;
  	font-family: ${fonts.comfortaa};
  	color: ${colors.white};
  }
  
  button {
    background-color: ${colors.primary};
    font-family: ${fonts.comfortaa};
    text-transform: uppercase;
    color: ${colors.white};
    border-radius: 4px;
    border: none;
    padding: 0.25rem 6rem;
    margin: 0rem 1rem;
    
    :hover {
      background-color: #252525;
      font-weight: 900;
      text-decoration: none;
      }
      img {
        width: 2rem;
        height: 1.75rem;
        padding-right: 6px;
      }
  }
`

export default Content;
