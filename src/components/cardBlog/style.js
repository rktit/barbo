import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
img{
    height: 325px;
}

.card{
    width: 25rem;
    margin: 5px;
}

.card-body{
    color: #252525;
    text-align: left;
}

.card-img-top{
    height: 22rem;
}

.card-items{
    padding-bottom: 1rem;
    font-size: 0.8rem;
    font-family: ${fonts.comfortaa};
}
.card-title{
    margin-bottom: -0.2rem;
    font-size: 1.3rem;
    font-family: ${fonts.comfortaa};
}

.card-text{
    height:120px;
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
        background-color: #ff3a66;
        width: 20rem;
        }

    :hover {
    transition: 0.1s ease-in-out;
    background-color: #ff3a66;
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
    font-size: 1.75rem;
    text-align: center;
    color: #ffffff;
    border-radius: 4px;
    height: 50px;
    width: 100%;
    justify-content: center;

    &.active {
      background-color: #252525;
    }

    :hover {
      transition: 0.1s ease-in-out;
      background-color: #252525;
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
    .card-img-top{
        width: 100%;
    }
    img{
        width: 100%;
        // height: auto;
    }
    .card{
        width: 100%;
        height: 100%;
    }
    .card-body{
        color: #252525;
        text-align: left;
        padding: 1.25rem 16px;
    }
    
    .card-img-top{
        height: 300px;
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
    .btn{
        
    }
}

`;

export default Content;