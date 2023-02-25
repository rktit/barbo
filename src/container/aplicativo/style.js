import styled from "styled-components";
import fonts from "config/fonts";
import colors from "config/colors";

const Content = styled.div`
	position: fixed;
	bottom: 0px;
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
  height: 4rem;

  .menu-nav {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
  	font-family: ${fonts.comfortaa};
  	color: ${colors.white};
  }
  
  button {
    background-color: #ff0d29;
    font-family: ${fonts.comfortaa};
    color: ${colors.white};
    border-radius: 4px;
    border: none;
    margin: 0rem 1rem;
    width: 20rem;
    height: 2rem;
    display
    &.active {
      background-color: #252525;
      }
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
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 0px 4px;
    
    button {
      padding: 0.25rem 4rem;
      margin: 0.2rem 1rem;
  }

  }
`

export default Content;
