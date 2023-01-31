import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
img{
    height: 325px;
}
a {
    color: #ffffff;
    font-family: ${fonts.opensans_light};
    text-decoration: none;
    background-color: transparent;
}
.card{
    width: 25rem;
    margin: 0px;
    height: 36rem;
    padding: 0px 0;
}

.card-body{
    color: #20396f;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
}

.card-img-top{
    height: 20rem;
}

.card-items{
    padding-bottom: 1rem;
    font-size: 0.8rem;
    font-family: ${fonts.opensans_light};
}
.card-title{
    margin-bottom: 2rem;
    font-size: 1.3rem;
    font-family: ${fonts.opensans_regular};
}

.card-text{
    height: 7rem;
    width: 15rem;
    font-family: ${fonts.opensans_light};
}
.love {
    color: white;
    width: 15rem;
    position: absolute;
    padding: 20px 30px;
}

.btn{
    background-color: #000000;
    display: table-cell;
    border: none;
    border-radius: 0;
    width: 22rem;    
    justify-content: center;

    

    &.active {
        background-color: #ff3a66;
        width: 20rem;
        justify-content: center;

        }

    :hover {
    transition: 0.1s ease-in-out;
    background-color: #8f8888;
    text-decoration: none;
    }
}
.btn-primary {
    nt-size: 1.5rem;
    font-family: ${fonts.opensans_light};
}

@media only screen and (max-width: 600px) {
    .card-img-top{
        width: 23rem;
        height: 26rem;
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
        justify-content: inherit;
        height: fit-content;
        padding: 1rem 0px 1rem 7rem;
        
    
        &.active {
            background-color: #ff3a66;
            width: 20rem;
            justify-content: center;
    
            }
}

`;

export default Content;