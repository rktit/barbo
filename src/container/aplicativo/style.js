import styled from "styled-components";
import fonts from "config/fonts";
import colors from "config/colors";

const Content = styled.div`
position: -webkit-sticky;
position: sticky;
top: 31.25rem;
padding: 0px 0px 8.8rem 84.5rem;
bottom: 0px;
border-radius: 0px;
z-index: 999;
max-width: 100%;
transform: translate(-50%, -10%);
display: flex;
justify-content: center;
color: ${colors.white};
font-family: ${fonts.comfortaa};
font-size: 12px;
  

.btn {
  background-color: #38322e;
  border-radius: 65px;
  bottom: 14px;
  box-shadow: 2px 3px 19px -2px rgba(0, 0, 0, .75);
  color: #d9a000;
  cursor: pointer;
  height: 40px;
  position: fixed;
  right: 22px;
  width: 40px;
  z-index: 3;
  &::after {
    content: '▲';
    display: flex;
    justify-content: center;
    padding-left: 1px;
    padding-top: 10px;
  }
}
  
  .conteudo {
    margin-bottom: 10.25rem;
  }
  .menu-nav {
    display: flex;
    align-items: center;
  }
  
   a{
    background-color: #252525;
    font-family: ${fonts.comfortaa};
    color: ${colors.white};
    border-radius: 0px;
    border: none;
    margin: 0px 0.5px;
    width: 24.75rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  
    &.active {
      background-color: #626262;
      // color: #ff0d29;
      }
      
    :hover {
      background-color: #626262;
      font-weight: 900;
      text-decoration: none;
      // color: #ff0d29;
      }
      img {
        width: 2rem;
        height: 1.75rem;
        padding-right: 6px;
      }
  }
  @media only screen and (max-width: 600px) {
    position: -webkit-sticky;
    position: sticky;
    top: 27.5rem;
    bottom: 0px;
    border-radius: 0px;
    z-index: 999;
    max-width: 100%;
    transform: translate(-50%, -10%);
    display: flex;
    justify-content: center;
    color: ${colors.white};
    font-family: ${fonts.comfortaa};
    font-size: 12px;
    flex-direction: column;
    margin-bottom: 2rem;
    padding: 0px 0px 68.5rem 14.5rem;

    button {
      padding: 0.5rem 4rem;
      margin: 0.2rem 1rem;
      height: 4rem;
  }
  .conteudo {
    margin-bottom: 0rem;
}
a{
  background-color: #252525;
  font-family: ${fonts.comfortaa};
  color: ${colors.white};
  border-radius: 0px;
  border: none;
  margin: 0px 0.5px;
  width: 20rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    background-color: #626262;
    // color: #ff0d29;
    }
    
  :hover {
    background-color: #626262;
    font-weight: 900;
    text-decoration: none;
    // color: #ff0d29;
    }
    img {
      width: 2rem;
      height: 1.75rem;
      padding-right: 6px;
    }
}
  }
`

export default Content;
