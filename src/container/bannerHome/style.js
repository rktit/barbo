import styled from "styled-components";
import fonts from "config/fonts";

import background from "images/home/banner_home.png";

const Content = styled.div`
  flex-direction: row;
  padding: 0 !important;
  background: url(${background}) no-repeat top center;
  background-size:cover;
  height: 36rem;

  font-family: ${fonts.raleway_bold};
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
    margin-top: 16rem ;
    transform: rotate(-108deg);
    width: max-content;
  }
  .title{
    font-size: 3.75rem;
    font-family: ${fonts.opensans_light};
    color: #ffffff;
    text-align: left;
    margin-bottom: -20px;
  }
  .title1{
    font-size: 2rem;
    font-family: ${fonts.opensans_bold};
    color: #ffffff;
    text-align: left;
  }
  .text{
    font-size: 1.25rem;
    font-family: ${fonts.opensans_light};
    color: #ffffff;
    text-align: left;
  }
.
  .logo{
    width: 170px;
  }
 
  .btn1{
    background-color: #000000;
    font-family: OpenSans-Light;
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

  @media only screen and (max-width: 600px) {
    margin-bottom: 300px;
    display: flex;
    align-items: center;

    .title {
      margin-top: 32px;
      font-size: 1.4rem;
      font-family: ${fonts.raleway_black};
      color: #ffffff;
      text-align: center;
    }

    .logo{
      padding: 10px;
    }

  }
`;

export default Content;
