import styled from "styled-components";
import fonts from "config/fonts";

import background from "images/home/banner_home.png";
import backgroundMobile from "images/home/mobile_banner_home.png";


const Content = styled.div`
  flex-direction: row;
  padding: 0 !important;
  background: url(${background}) no-repeat top center;
  background-size:cover;
  height: auto;

  font-family: ${fonts.comfortaa};
  text-align: center;

  .welcome{
    height: 100%;
    width: 100%;
    border-style: solid;
    border-color: #ffffff;
    border-width: 2px;
    margin: 3rem 0 0px 12rem;
    transform: rotate(108deg);
  }
  .box-texto {
    margin-top: 15rem;
    padding-left: 5rem;
    transform: rotate(-108deg);
    width: max-content;
  }
  .title{
    font-size: 3.75rem;
    font-family: ${fonts.comfortaa};
    color: #ffffff;
    text-align: left;
    margin-bottom: -20px;
  }
  .title1{
    font-size: 2rem;
    font-family: ${fonts.comfortaa};
    color: #ffffff;
    text-align: left;
  }
  .text{
    font-size: 1.25rem;
    font-family: ${fonts.comfortaa};
    color: #ffffff;
    text-align: left;
  }
.
  .logo{
    width: 170px;
  }
 
  .btn1{
    background-color: #000000;
    font-family: ${fonts.comfortaa};
    font-size: 1.75rem;
    color: #ffffff;
    border-radius: 4px;
    height: 50px;
    width: 16rem;

    &.active {
      background-color: #405c9a;
    }

    :hover {
      transition: 0.1s ease-in-out;
      background-color: #405c9a;
      text-decoration: none;
    }

  }

  @media only screen and (max-width: 2100px) {
  .box-texto {
    margin-top: 15rem;
    padding-left: 5rem;
    margin-left: 4px;
    transform: rotate(-108deg);
    width: max-content;
  }
}
  @media only screen and (max-width: 1600px) {
  .box-texto {
    margin-top: 15rem;
    margin-left: -30px;
    padding-left: 5rem;
    transform: rotate(-108deg);
    width: max-content;
  }
}
@media only screen and (min-width: 1600px) {
  .box-texto {
    margin-top: 15rem;
    margin-left: 3px;
    padding-left: 5rem;
    transform: rotate(-108deg);
    width: max-content;
  }
}
  @media only screen and (max-width: 600px) {
    background: url(${backgroundMobile}) no-repeat top center;
    background-size:cover;
    height: 40rem;
    display: flex;
    align-items: center;

    .box-texto {
      margin-top: 10rem;
      margin-left: -5rem;
      padding-left: 2rem;
      transform: rotate(-108deg);
      width: max-content;
    }
    .title {
      margin-top: 32px;
      font-size: 2rem;
      font-family: ${fonts.comfortaa};
      color: #ffffff;
      text-align: start;
    }
 .welcome{
    height: 32rem;
    max-width: max-content;
    border-style: solid;
    border-color: #ffffff;
    border-width: 2px;
    margin: 3rem 0px 0 7rem;
    padding: 70px 0 0 60px;
    transform: rotate(108deg);
  }
    .logo{
      padding: 10px;
    }

  }
`;

export default Content;
