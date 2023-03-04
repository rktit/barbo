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
    width: 22rem;
    margin: 0 2px 0 2px;
    height: 26rem;
    padding: 0 0px 0 0px;
}

.card-body{
    text-align: -webkit-center;
    display: inline-table;
    color: #ffffff;
    position: absolute;
    padding: 0rem 1rem;
}

.card-img-top{
    height: 100%;
}

.card-items{
    padding: 1rem 0rem;
    font-size: 0.8rem;
}
.card-title{
    margin-bottom: -0.2rem;
    font-size: 1.3rem;
    text-align: start;
}

.card-text{
    height: 20rem;
    text-align: start;
    padding: 1rem 6rem 0rem 1rem;
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
    border-radius: 0px;
    width: 18rem;
    margin: -0.5rem 2rem 0rem 1rem;
    justify-content: space-evenly;
    

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
        height: 28rem;
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
    .card-title{
        font-size: 2rem;
    }
    .card-text{
        height:100%;
        padding: 1rem 4rem 0rem 1rem;
    }
    .card-mais{
        right: 0rem;
        bottom: 0rem;
    }
    .btn{
        background-color: #252525;
        display: table-cell;
        border: none;
        border-radius: 0px;
        width: 18rem;
        margin: 16rem 0 0 1rem;

    
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

    a {
        color: #ffffff;
        font-size: 1.25rem;
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
    . btn a{
        font-size: 1.25rem;

    }

}

`;

export default Content;