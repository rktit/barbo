import styled from "styled-components";
import fonts from "config/fonts";
import lupa from "images/empreendimento/lupa.png";


const Content = styled.div`

background-color: #eeeeee;
.title{
    font-family: ${fonts.comfortaa};
    font-size: 2rem;
    color: #252525;
    margin-top: 4rem;
    padding-bottom: 0rem;
}
.slide {
    min-width: 100%;
    margin: 0rem 1rem 0rem 1rem;
}
.demarcador{
    height: 40px;
    width: 40px;

    position: absolute;
    top: 90px;
    left: 15%;

    border-bottom-style: solid;
    border-bottom-color: #20396f;
    border-bottom-width: 3px;
    border-right-style: solid;
    border-right-color: #20396f;
    border-right-width: 2px;

  }

.banner{
    // height: 1100px;
    // width: 100vw;
    height: auto;
    width: 100%;
    background-size: cover;
}

.textos{
    font-family: ${fonts.comfortaa};
    position: absolute;
    right:10%;
    top:80px;

    color:#20396f;
    font-size: 1.5rem;

    p{
        
        border-left-style: solid;
        border-left-width: 2px;
        border-left-color: #e73538;
        padding-left: 25px;
        margin-left:-25px
    }

    strong{
        font-family: ${fonts.comfortaa};
    }
}
.splide {
    padding: 2rem 0em 6rem 0em;
}
.splide__slide {
    border-radius: 1px;
    margin: 0rem;
}
.splide__arrow svg {
    width: 1.5em;
    height: 1.5em;
    fill: #ffffff;
    transition: fill .2s linear;
}
.splide__arrow--next {
    right: 2em;
}
.splide__arrow--prev {
    left: 2em;
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
.maquinas{
    display:grid;
    margin: 0rem 0px;
    justify-items: center;
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.infos{
    color:#ffffff;
    font-size: 0.9rem;
}

.right-side{
    background-color:#ff0d29;
    font-family: ${fonts.comfortaa};
    width:200px;
    padding-left: 10px;
    padding-bottom: 10px;
}

.title-info{
    font-family: ${fonts.comfortaa} !important;
    font-size: 2rem;
    height:200px;
    padding-top:90px;
}

.left-side{
    background-color:#e5142c;
    font-family: ${fonts.comfortaa};
    width: 250px;
    padding-left: 10px;
    padding-bottom: 10px;
}

.topo-left{ 
    height:200px;
}

.nota{
    font-size: 0.7rem;
    text-align: end;
    padding-right:10px;
}

@media only screen and (max-width: 600px) {


    .maquinas {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .title{
        margin-top: 0px;
        font-size: 1.75rem;
        text-align: center;
        width: 22rem;
        padding: 4rem 0 1rem 0;
    }

    .splide{
        margin: -2rem 0 2rem 0;
    }

    .slide{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: baseline;
    }
    
        .splide__pagination {
        display: inline-flex;
        align-items: center;
        width: 95%;
        flex-wrap: wrap;
        justify-content: center;
        margin: 2rem 0px;
    }
    .texto{
        text-align: center;
        font-size: 1rem;
        padding: 40px 30px;
    }
    .box {
        height: 10rem;
        width: 20rem;
        display: flex;
        justify-content: center;
    }
    .filtro__select {
        width: 14rem;
        font-size: 14px;
        color: #000;
        font-family: ${fonts.comfortaa};
        font-weight: 500;
        border-radius: 0.5rem;
        border-width: 1px;
        border-color: rgb(0 0 0);
        border-style: solid;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        background-color: transparent;
        line-height: 17px;
        padding: 20px;
        margin: 4px 4px;
    }
     .filtro__item {
        width: 14.5rem;
        padding: 0 0;
    }
    .btn_lupa {
        height: 2.75rem;
        padding: 2rem 7rem;
        border-radius: 0.5rem;
        border-width: 1px;
        justify-content: center;
    }
    .filtro__button {
        width: 2.75rem;
    }
    
    .splide__arrow svg {
    width: 1.5em;
    height: 1.5em;
    fill: transparent;
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
}
`;


export default Content;