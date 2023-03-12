import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
img{
    height: 325px;
}

.card{
    width: 24rem;
    margin: 0 0px;
}


.card-body{
    color: #252525;
    text-align: left;
}

.card-img-top{
    height: 24rem;
}

.card-items{
    padding-bottom: 1rem;
    font-size: 0.8rem;
    font-family: ${fonts.comfortaa};
}
.card-title{
    margin-bottom: -0.2rem;
    font-size: 1.3rem;
    font-weight: bold;
    font-family: ${fonts.comfortaa};
}

.card-text{
    height: 5rem;
    line-height: 1.25rem;
    font-family: ${fonts.comfortaa};
}
.love {
    width: 2rem;
    position: absolute;
    height: 2rem;
    right: 12px;
    top: 12px;
}
.favoritos {
    width: 2rem;
    position: absolute;
    height: 2rem;
    right: 12px;
    bottom: 20px;
}
.comente {
    width: 2rem;
    position: absolute;
    height: 2rem;
    right: 12px;
    bottom: 20px;
}
.btn{
    background-color: #252525;
    display: table-cell;
    border: none;
    border-radius: 0;
    width: 24rem;
    

    &.active {
        background-color: #e73538;
        width: 20rem;
        }

    :hover {
    transition: 0.1s ease-in-out;
    background-color: #e73538;
    text-decoration: none;
    }
}
.btn-primary {
    font-size: 1.5rem;
    font-family: ${fonts.comfortaa};
}
.btn1{
    background-color: #252525;
    font-family: ${fonts.comfortaa};
    font-size: 1.25rem;
    text-align: center;
    color: #ffffff;
    border-radius: 0px;
    height: 2rem;
    width: 22rem;
    margin: 0rem;
    justify-content: center;
    align-items: center;

    &.active {
      background-color: #252525;
    }

    :hover {
      transition: 0.1s ease-in-out;
      background-color: #e73538;
      text-decoration: none;
      text-align: center;
    }
    a {
        color: #ffffff;
        text-decoration: none;
        background-color: transparent;
        text-align: center;
    }

  }
  @media only screen and (max-width: 600px) {
    margin-top: 0.5rem;

    .card{
        width: 100%;
        height: 100%;
    }
    .card-body{
        color: #252525;
        text-align: left;
        padding: 1.25rem 1rem;
        width: 22rem;
    }
    
    .card-img-top{
        width: 100%;
        height: 30rem;
    }
    
    .card-items{
        padding: 0 0 20px 0;
        font-size: 0.8rem;
        font-family: ${fonts.comfortaa};
    }
    .card-title{
        padding: 0;
        font-size: 1.5rem;
        font-family: ${fonts.comfortaa};
    }
    .card-text{
        padding: 0;
    }
    .btn1 {
        margin: 0 0 0 0rem;
    }
}

`;

export default Content;