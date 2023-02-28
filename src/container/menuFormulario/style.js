import styled from "styled-components";
import color from "config/colors";
import fonts from "config/fonts";

export const Content = styled.nav`
    display: flex!important;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 3rem 6rem !important;
    z-index: 1027;
    transition: 0.2s ease-in-out;

  &.bg-active {
  	transition: 0.2s ease-in-out;
    background-image: linear-gradient(#726767,#efefef);

  }
  .container {
    width: 40rem;
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
      margin-top: -20px;
      transition: 0.2s ease-in-out;
      &.scroll{
      	width: 130px;
      	transition: 0.2s ease-in-out;
      }
    }

    span{
      color: #fff;
      font-size: 1.4rem;
      font-family: ${fonts.comfortaa};
      margin-left: 20px;
      margin-top: 20px;
    }
    :hover {
      text-decoration: none;
    }
  }
  .menu-nav {
    display: flex;
    flex-direction: column;

    a {
      align-content: center;
      align-items: center;
      transition: 0.2s ease-in-out;
      color: #252525;
      font-family: ${fonts.comfortaa};
      font-size: 15px;
      display: flex;
      justify-content: center;
      border-bottom-width: 1px;
      border-color: rgb(0 0 0);
      height: 3.25rem;
      flex-direction: column;
      
      &.active {
        border-color: rgb(0 0 0);
        border-style: solid;
        border-top-width: 0px;
        border-bottom-width: 1px;
        border-right-width: 0px;
        border-left-width: 0px;
        margin: 5px 0px;
      }
      
      :hover {
        cursor: pointer;
      }
    }
    .marca{
      color: #8b515a;
      font-size: 1.4rem;
      font-family: ${fonts.comfortaa};
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
    font-family: ${fonts.comfortaa};
    outline: none;

    img {
      height: 20px;
      width: 20px;
    }
  }

  .menu-nav.show-menu {
    transition: 0.1s ease-in-out;
    opacity: 1;
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
  .line {
    border-style: solid;
    border-width: 1px;
    border-color: transparent;
    width: 38rem;
    margin: 2rem 0;
    }
  .links-mobile {
    a {
      border: 1px solid #e73538;
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
  .icones-empreendimentos{
    display: flex;
    justify-items: center;
    align-items: baseline;
    flex-direction: row;
  }
  .icones{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0em 2em;
    font-family: ${fonts.comfortaa};
    font-size: 0.75rem;
    align-items: center;
    color: #252525;
    
    img{
      width: 8rem;
      height: 6rem;
      padding: 1rem;
    }
  }
.icones-text {
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 1rem;
  margin: 0 4px;
}
.texto {
  font-family: ${fonts.comfortaa};
}
.title {
  font-family: ${fonts.comfortaa};
  font-size: 2rem;
}

  @media only screen and (max-width: 992px) {
    .container {
      width: 100%;
    }
    .menu-nav {
      padding: 0.5rem 0 0.5rem 0.05rem;
      display: flex;
      flex-direction: column;
      a {
        padding: 0.5rem 0 0.5rem 0.2rem;
      }
    }
    .line {
      width: 16rem;
    }
      .menu-scroll {
		    transition: 0.2s ease-in-out;
		    padding: .5rem !important;
		  }
		  
		  .menu-top {
		    transition: 0.2s ease-in-out;
		    padding: .5rem !important;
		  }
      .icones-empreendimentos{
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: baseline;
      }
      .icones{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4em 2em;
        font-family: ${fonts.comfortaa};
        font-size: 0.75rem;
        align-items: center;
        color: #252525;
        
        img{
          width: 8rem;
          height: 6rem;
          padding: 1rem;
        }
      }
    .icones-text {
      text-align: center;
      padding-top: 4rem;
      font-weight: bold;
      font-size: 1rem;
      margin: 0 4px;
    }
    .texto {
      font-family: ${fonts.comfortaa};
    }
    .title {
      font-family: ${fonts.comfortaa};
      font-size: 2rem;
    }
  }
`;
