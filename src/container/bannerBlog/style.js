import styled from "styled-components";
import fonts from "config/fonts";

import background from "images/blog/banner_blog.png";
import backgroundMobile from "images/blog/banner_mobile_blog.png";


const Content = styled.div`
  flex-direction: row;
  padding: 0 !important;
  background: url(${background}) no-repeat top center;
  background-size:cover;
  height: auto;
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
    background-size:cover;
    align-items: center;

    .title {
      margin-top: 20px;
      font-size: 1.5rem;
      width: 20rem;
      text-align: center;
    }

    .logo{
      padding: 10px;
    }
    .welcome {
      margin-top: 4vh;
      font-size: 2rem;
      width: 21rem;
    }
  }
`;

export default Content;
