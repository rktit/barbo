import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
img{
    height: 325px;
}
a {
    color: #ffffff;
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
    margin: 5px;
    height: 28rem;
}

.card-body{
    color: #ffffff;
    position: absolute;
}

.card-img-top{
    height: 28rem;
}

.card-items{
    padding-bottom: 1rem;
    font-size: 0.8rem;
    font-family: ${fonts.opensans_light};
}
.card-title{
    margin-bottom: -0.2rem;
    font-size: 1.3rem;
    font-family: ${fonts.opensans_regular};
}

.card-text{
    height: 20rem;
    font-family: ${fonts.opensans_light};
}
.card-mais {
    right: -12rem;
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
    font-family: ${fonts.opensans_light};
}

@media only screen and (max-width: 600px) {
    .card-img-top{
        width: 100%;
    }
    img{
        width: 100%;
        // height: auto;
    }
    .card-body{
        padding: 1rem 100px 0 25px;
    }
    .card-title {
        margin-bottom: 1rem;
        padding-left: 0;
    }
    .card{
        width: 100%;
        height: 100%;
    }
    .card-text{
        height:100%;
        display: contents;
    }
    .card-mais {
        bottom: -14rem;
        right: -10rem;
    }
    .btn{
        
    }
}

`;

export default Content;