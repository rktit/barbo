import styled from "styled-components";
import fonts from "config/fonts";

import background from "images/empreendimento/bannerPredio.png";

const Content = styled.div`
  flex-direction: row;
  padding: 0 !important;
  background: url(${background}) no-repeat top center;
  background-size:cover;
  height: 21rem;

  font-family: ${fonts.raleway_bold};
  text-align: center;

  .welcome{
    margin-top: 30vh;
  }
  .title{
    font-size: 4rem;
    font-family: ${fonts.opensans_regular};
    color: #ffffff;
    text-align: left;
  }
  .title1{
    font-size: 2.5rem;
    font-family: ${fonts.opensans_regular};
    color: #ffffff;
    text-align: left;
  }
  .text{
    font-size: 1.5rem;
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
    font-family: ${fonts.opensans_light};
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
