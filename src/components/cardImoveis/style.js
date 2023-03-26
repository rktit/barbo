import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
img{
    height: 325px;
}

.card{
    width: 24.75rem;
    margin: 0 1px;
}

.card-body{
    min-height: 16rem;
    color: #252525;
    text-align: left;
    padding: 1.25rem 3.25rem 1.25rem 1.25rem;
}

.card-img-top{
    height: 24.75rem;
    width: 24.75rem;
    margin-left: -1rem;
}

.card-items{
    padding-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: ${fonts.comfortaa};
}
.card-title{
    margin-bottom: -0.2rem;
    font-size: 1rem;
    font-family: ${fonts.comfortaa};
}

.card-text{
    font-size: 1rem;
    font-family: ${fonts.comfortaa};
}

.btn{
    background-color: #252525;
    display: table-cell;
    border: none;
    border-radius: 0rem;
    width: 20rem;
    margin: 4rem 0 -0.5rem 0.5rem;
    justify-content: center;
    

    &.active {
        background-color: #e73538;
        width: 20rem;
        }

    :hover {
    transition: 0.1s ease-in-out;
    background-color: #e73538;
    text-decoration: none;
    color: #ffffff;
    }
     a {
        color: #ffffff;
        font-size: 1rem;
        text-decoration: none;
        background-color: transparent;
        font-family: ${fonts.comfortaa};
    }
}

  @media only screen and (max-width: 600px) {
    
    img{
        height: 325px;
    }
    
    .card{
        width: 22rem;
        height: 38rem;
        margin: 1rem 1px;
    }
    
    .card-body{
        color: #252525;
        text-align: left;
        padding: 0.25rem 0rem 0 1.25rem;
    }
    
    .card-img-top{
      height: 20rem;
      width: 20rem;
      margin-left: 0rem;
    }
    
    .card-items{
        font-size: 2rem;
        font-weight: bold;
        font-family: ${fonts.comfortaa};
        padding: 1rem 1rem 1rem 0rem;
    }
    .card-title{
        margin-bottom: -0.2rem;
        font-size: 1rem;
        font-family: ${fonts.comfortaa};
    }
    
    .card-text{
        font-size: 1rem;
        font-family: ${fonts.comfortaa};
    }
    
    .btn{
        background-color: #252525;
        display: table-cell;
        border: none;
        border-radius: 0rem;
        width: 18rem;
        margin: 1.5rem 0 -0.5rem 0rem;
        justify-content: center;
        
    
        &.active {
            background-color: #e73538;
            width: 20rem;
            }
    
        :hover {
        transition: 0.1s ease-in-out;
        background-color: #e73538;
        text-decoration: none;
        }
         a {
            color: #ffffff;
            font-size: 1.5rem;
            text-decoration: none;
            background-color: transparent;
            font-family: ${fonts.comfortaa};
        }
    }
}

`;

export default Content;