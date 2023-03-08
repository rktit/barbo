import styled from "styled-components";
import fonts from "config/fonts";

import background from "images/contato/img.png";
import backgroundMobile from "images/contato/img_mobile.png";



const Content = styled.div`
flex-direction: row;
padding: 0 !important;
background: url(${background}) no-repeat top center;
margin-top: -24rem;
background-size:cover;
height: 20rem;
width: 100%

font-family: ${fonts.comfortaa};
text-align: center;

.welcome{
  margin-top: 32rem;
  text-align: center;
  font-size: 2.5rem;
  font-family: ${fonts.comfortaa};
  color: #ffffff;
  display: inline-block;
}
  .title{
    font-size: 4rem;
    font-family: ${fonts.comfortaa};
    color: #ffffff;
    text-align: left;
  }
  .title1{
    font-size: 2.5rem;
    font-family: ${fonts.comfortaa};
    color: #ffffff;
    text-align: left;
  }
  .text{
    font-size: 1.5rem;
    font-family: ${fonts.comfortaa};
    color: #ffffff;
    text-align: left;
  }
.
  .logo{
    width: 170px;
  }
 
  .btn1{
    background-color: #252525;
    font-family: ${fonts.comfortaa};
    font-size: 2rem;
    color: #ffffff;
    border-radius: 5px;
    height: 70px;

    &.active {
      background-color: #405c9a;
    }

    :hover {
      transition: 0.1s ease-in-out;
      background-color: #405c9a;
      text-decoration: none;
    }

  }

  @media only screen and (max-width: 600px) {
    background: url(${backgroundMobile}) no-repeat top center;
    height: 38rem;
    display: flex;
    align-items: center;
    margin-top: -85rem;

    .title {
      margin-top: 32px;
      font-size: 1.4rem;
      font-family: ${fonts.comfortaa};
      color: #ffffff;
      text-align: center;
    }

    .logo{
      padding: 10px;
    }

  }
`;

export default Content;
