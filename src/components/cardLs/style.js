import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
margin-right: 0px
img{
    height: 325px;
}
a {
    color: #000000;
    text-decoration: none;
    background-color: transparent;
    &.active {
        color: #fc1347;
    }
    
    :hover {
      transition: 0.1s ease-in-out;
      color: #fc1347;
      text-decoration: none;
    }
}
.card{
    width: 25rem;
    margin: 0 0 0 0;
    height: 28rem;
    padding: 0 10px 0 10px;
}

.card-body{
    text-align: left;
    display: inline-table;
    color: #ffffff;
    position: absolute;
}

.card-img-top{
    height: 28rem;
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
    right: -7rem;
    font-family: ${fonts.comfortaa};
    font-size: 1.2rem;
    font-weight: 400;
}
.card-mais strong{
    font-weight: 900;
}
.btn{
    background-color: #000000;
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
    nt-size: 1.5rem;
    font-family: ${fonts.comfortaa};
}

@media only screen and (max-width: 600px) {
    .card-img-top{
        width: 100%;
    }
    .card-img-top{
        width: 20rem;
    height: 30rem;
    }
    img{
        width: 100%;
        // height: auto;
    }
    .card{
        width: 100%;
        height: 100%;
        padding: 0 1rem 0 1.5rem;

    }
    .card-text{
        height:100%;
        display: contents;
    }
    .card-mais{
        right: -4rem;
        bottom: -12rem;
    }
    .btn{
        
    }
}

`;

export default Content;