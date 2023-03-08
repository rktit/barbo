import styled from "styled-components";
import fonts from "config/fonts";

import background from "images/blog/declarar/declarar_imovel.jpg";
import backgroundMobile from "images/blog/declarar/declarar_imovel.jpg";


const Content = styled.div`
  flex-direction: row;
  padding: 0 !important;
  background: url(${background}) no-repeat bottom center;
  background-size:cover;
  height: 20rem;
  width: 100%;
  top: -24rem;

  font-family: ${fonts.comfortaa};
  text-align: center;

  .welcome{
    margin-top: 30vh;
    text-align: center;
    font-size: 2.5rem;
    font-family: ${fonts.comfortaa};
    color: #ffffff;
    width: 36rem;
    display: inline-block;
    filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 1.08));
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
    top: -85rem;
    height: 16rem;

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
          margin-top: 10vh;
    font-size: 1.5rem;
      width: 21rem;
    }
  }
`;

export default Content;
