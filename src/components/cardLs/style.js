import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
img{
    height: 325px;
}

.card{
    width: 26rem;
}

.card-body{
    color: #20396f;
    text-align: center;
}

.card-img-top{
    height: 300px;
}

.card-title{
    font-size: 1.3rem;
    font-family: ${fonts.opensans_regular};
}

.card-text{
    height:120px;
    font-family: ${fonts.opensans_light};
}

.btn{
    background-color: #000000;
    border: none;
    border-radius: 0;
    font-family: ${fonts.opensans_bold};
    

    &.active {
        background-color: #ff3a66;
        }

    :hover {
    transition: 0.1s ease-in-out;
    background-color: #ff3a66;
    text-decoration: none;
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
    .card-text{
        height:100%;
        display: contents;
    }
    .btn{
        
    }
}

`;

export default Content;