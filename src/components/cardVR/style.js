import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
margin-right: 0px
img{
    height: 325px;
}
a {
    color: #252525;
    text-decoration: none;
    background-color: transparent;
    &.active {
        color: #e73538;
    }
    
    :hover {
      transition: 0.1s ease-in-out;
      color: #e73538;
      text-decoration: none;
    }
}
.card{
    width: 24rem;
    margin: 0 4px 0 4px;
    height: 28rem;
    padding: 0 0px 0 0px;
}

.card-body{
    text-align: -webkit-center;
    display: inline-table;
    color: #252525;
    position: absolute;
    padding: 0rem;
}

.card-img-top{
    height: 100%;
}

.card-items{
    padding-bottom: 1rem;
    font-size: 0.8rem;
}
.card-title{
    margin-bottom: -0.2rem;
    font-size: 1.3rem;
}

.card-text{
    height: 23rem;
}
.card-mais {
    right: 0rem;
    font-family: ${fonts.comfortaa};
    font-size: 1.2rem;
    font-weight: 400;
    background-color: white;
    width: 24em;
}
.card-mais strong{
    font-weight: 900;
}
.btn{
    background-color: #252525;
    display: table-cell;
    border: none;
    border-radius: 5px;
    width: 10rem;
    margin-top: 0.5rem;
    justify-content: space-evenly;
    

    &.active {
        background-color: #ff3a66;
        width: 20rem;
        }

    :hover {
    transition: 0.1s ease-in-out;
    background-color: #ff3a66;
    text-decoration: none;
    }
     a {
        color: #ffffff;
        font-size: 1rem;
        text-decoration: none;
        background-color: transparent;
    }
}
.btn-primary {
    nt-size: 1.5rem;
    font-family: ${fonts.comfortaa};
}

@media only screen and (max-width: 600px) {
    .card-img-top{
        width: 100%;
    }
    .card-img-top{
        width: 23rem;
        height: 34rem;
    }
    img{
        width: 100%;
        // height: auto;
    }
    .card{
        width: 100%;
        height: 100%;
        padding: 0 0rem 0 0rem;
        margin: 0.5rem 0px;
    }
    .card-text{
        height:100%;
        display: contents;
    }
    .card-mais{
        right: 0rem;
        bottom: 0rem;
    }
    .btn{
        background-color: #252525;
        display: table-cell;
        border: none;
        border-radius: 5px;
        width: 10rem;
        margin: 30rem 0 0 2rem;

    
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

    a {
        color: #ffffff;
        text-decoration: none;
        background-color: transparent;
        &.active {
            color: #e73538;
        }
        
        :hover {
          transition: 0.1s ease-in-out;
          color: #e73538;
          text-decoration: none;
        }
    }


}

`;

export default Content;