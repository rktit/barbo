import styled from "styled-components";
import color from "config/colors";
import fonts from "config/fonts";

export const Content = styled.nav`
  background-color: black;
  position: fixed;
  padding: 0 !important;
  z-index: 1027;
  transition: 0.2s ease-in-out;
  
  &.bg-active {
  	transition: 0.2s ease-in-out;
  	background-color: black;
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
      width: 180px;
      height: auto;
      transition: 0.2s ease-in-out;
      &.scroll{
      	width: 130px;
      	transition: 0.2s ease-in-out;
      }
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
      font-family: ${fonts.raleway_bold};
      font-size: 12px;
      display: flex;
      
      &.active {
      	color: #ffbcbc;
      }
      :hover {
        transition: 0.1s ease-in-out;
        color: #ffbcbc;
        text-decoration: none;
      }
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
    font-family: ${fonts.raleway_black};
    outline: none;
    img {
      height: 20px;
      width: 20px;
    }
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
  .links-down {
    a {
      font-size: 0.8rem;
      img {
        margin-left: 0.8rem;
        max-height: 27px;
      }
    }
  }
  
  .logged {
    color: #ffffff;
    
    .logout {
      margin-top: 10px;
      text-decoration: underline;
    }
  }
  @media only screen and (max-width: 992px) {
    .menu-nav {
      padding: 0.5rem 0 0.5rem 0.05rem;
      display: flex;
      flex-direction: column;
      a {
        padding: 0.5rem 0 0.5rem 0.2rem;
      }
    }
    
      .menu-scroll {
		    transition: 0.2s ease-in-out;
		    padding: .5rem !important;
		  }
		  
		  .menu-top {
		    transition: 0.2s ease-in-out;
		    padding: .5rem !important;
		  }
  }
`;