import styled from "styled-components";
import color from "config/colors";
import fonts from "config/fonts";

export const Content = styled.nav`
margin: 0 0 -100px 0 !important;
z-index: 1027;
  transition: 0.2s ease-in-out;
  
  &.bg-active {
  	transition: all 0.2s ease-in-out 0s;
    --tw-gradient-from: rgb(235 235 235 / 0%);
    --tw-gradient-to: currentColor;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    overflow: visible;
    background-image: linear-gradient(to top, var(--tw-gradient-stops));
    background-image: linear-gradient(to top, var(--tw-gradient-stops));
  }
  
  .menu-scroll {
  	transition: 0.2s ease-in-out;
  	padding: 0.5rem !important;
  }
  
  .menu-top {
  	transition: 0.2s ease-in-out;
  	padding: 1.5rem !important;
  }

  .menu-logo {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    #logo {
      width: 130px;
      height: auto;
      transition: 0.2s ease-in-out;
      &.scroll{
      	width: 130px;
      	transition: 0.2s ease-in-out;
      }
    }

    span{
      color: #fff;
      font-size: 1.4rem;
      font-family: ${fonts.opensans_bold};
      margin-left: 20px;
      margin-top: 20px;
    }
    :hover {
      text-decoration: none;
    }
  }
  .menu-nav {
    padding: 0.5rem 0 0.5rem 4rem;
    display: flex;
    flex-direction: row;
    transition: 0.2s ease-in-out;

    a {
      align-content: center;
      align-items: center;
      transition: 0.2s ease-in-out;
      color: ${color.white};
      font-family: ${fonts.opensans_light};
      font-size: 15px;
      display: flex;
      
      &.active {
      	color: #fc1347;
      }
      
      :hover {
        transition: 0.1s ease-in-out;
        color: #fc1347;
        text-decoration: none;
      }
    }
    .marca{
      color: #8b515a;
      font-size: 1.4rem;
      font-family: ${fonts.opensans_bold};
    }
  }

  #logo-whatsapp{
    width: 30px;
    heigth: auto;
  }

  .menu-mobile {
    border: 0;
    background: transparent;
    margin-top: -5px;
    color: ${color.grayMedium};
    font-family: ${fonts.opensans_black};
    outline: none;

    img {
      height: 20px;
      width: 20px;
    }
  }
  .espaco {
    color: #fc1347;
  }
  .menu-nav.show-menu {
    transition: 0.1s ease-in-out;
    opacity: 1;
    height: auto;
    padding: 0.5rem 0 0.5rem 0.05rem;
  }
  .menu-nav.hide-menu {
    -moz-transition: height 0.1s;
    -o-transition: height 0.1s;
    -webkit-transition: height 0.1s;
    transition: height 0.1s;
    height: 0;
    overflow: hidden;
    padding: 0;
  }

  .links-mobile {
    a {
      border: 1px solid ${color.grayLight};
      border-radius: 24px;
      font-size: 0.8rem;
    }
  }
.container {
  margin-top: -14px;
}
  .links-down {
    a {
      font-size: 0.8rem;
      img {
        margin-left: 0.8rem;
        max-height: 27px;
      }
    }
  }


  @media only screen and (max-width: 992px) {
    
    .menu-nav {
      padding: 0rem 0 0.5rem 0.05rem;
      display: flex;
      flex-direction: column;
      a {
        padding: 0rem 0 0.5rem 0.2rem;
      }
    }
    .menu-nav a {
      color: #ffffff;
      display: flex;
      justify-content: flex-end;      
  }
      .menu-scroll {
		    transition: 0.2s ease-in-out;
		    padding: .5rem !important;
		  }
		  
		  .menu-top {
		    transition: 0.2s ease-in-out;
		    padding: .5rem !important;
		  }
      .container {
        margin-top: -5px;
      }
      .espaco {
        justify-content: flex-end;      
      }
  }
`;
