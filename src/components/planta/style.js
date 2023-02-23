import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
img{
    height: 325px;
}
a {
    color: #ffffff;
    font-family: ${fonts.comfortaa};
    text-decoration: none;
    background-color: transparent;
}
.card{
    width: 65rem;
    margin: 0 10px;
}

.card-body{
    color: #20396f;
    text-align: left;
}
 .listaMarcas{
    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
    justify-content: center;
    margin-bottom: 30px;
  }
.card-img-top{
    height: 20rem;
    width: 100%;
}

.card-items{
    padding-bottom: 1rem;
    font-size: 0.8rem;
    font-family: ${fonts.comfortaa};
}
.card-title{
    margin-bottom: 2rem;
    font-size: 1.3rem;
    font-family: ${fonts.comfortaa};
}

.card-text{
    height: 7rem;
    font-family: ${fonts.comfortaa};
}
.love {
    color: white;
    width: 15rem;
    position: absolute;
    padding: 20px 30px;
}

.btn{
    background-color: #252525;
    display: table-cell;
    border: none;
    border-radius: 0;
    width: 22rem;
    

    &.active {
        background-color: #e73538;
        width: 20rem;
        }

    :hover {
    transition: 0.1s ease-in-out;
    background-color: #8f8888;
    text-decoration: none;
    }
}
.btn-primary {
    nt-size: 1.5rem;
    font-family: ${fonts.comfortaa};
}
.splide__arrow svg {
    width: 1.5em;
    height: 1.5em;
    fill: #252525;
    transition: fill .2s linear;
}
.splide__pagination__page {
    display: inline-block;
    width: 20px;
    height: 5px;
    background: #e73538;
    border-radius: 2.5px;
    margin: 3px;
    padding: 0;
    transition: all .2s linear;
    border: none;
}
.splide__pagination__page.is-active {
    background: #252525;
    width: 5px;
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