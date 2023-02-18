import styled from "styled-components";
import fonts from "config/fonts";
import lupa from "images/empreendimento/lupa.png";


const Content = styled.div`

background-color: #eeeeee;
.maquinas {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 50px;
}
.box {
    height: 80px;
    display: flex;
    justify-content: center;
}
.title{
    font-family: ${fonts.comfortaa};
    font-size: 1.5rem;
    color: #252525;
    margin-bottom: 30px;
    margin-top: 30px;
}
.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.filtro__select {
    width: 14rem;
    font-size: 14px;
    color: #000;
    font-family: ${fonts.comfortaa};
    font-weight: 500;
    border-radius: 0;
    border-width: 1px;
    border-color: rgb(0 0 0);
    border-style: solid;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    background-color: transparent;
    line-height: 17px;
    padding: 10px;    
    padding: 12px;
}
 .filtro__item {
    width: 14.5rem;
    padding: 0 0;
}
.btn_lupa {
    background: url(${lupa}) no-repeat left;
    font-family: ${fonts.comfortaa};
    height: 2.75rem;
    background-color: #E73538;
    border-color: white;
    color: white;    width: 14rem;
    padding: 1rem 8rem 1rem 6rem;
    border-radius: 3px;
    border-width: 1px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.filtro__button {
    width: 2.75rem;
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

.slide{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;

    margin-bottom: 50px;}


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
    display: flex!important;
        flex-direction: column;
.maquinas {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
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
        border-radius: 0;
        border-width: 1px;
        border-color: rgb(0 0 0);
        border-style: solid;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        background-color: transparent;
        line-height: 17px;
        padding: 20px;
    }
    .filtro__item {
        width: fit-content;
        padding: 4px 0px;
    }
    
    .btn_lupa {
        background: url(${lupa}) no-repeat center;
        height: 2.75rem;
        padding: 1rem 1rem;
        border-radius: 0;
        border-width: 1px;
    }
    .filtro__button {
        width: 14rem;
    }
    padding-right: 0px !important;
    padding-left: 0px !important;

    .title{
        margin: 30px 0 30px 28px;

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
    .slide.is-active{
        display: contents;
        min-width: auto;
        margin-bottom: 50px;
    }
    .textos{
        text-align: center;
        top: 5px;
        font-size: 0.7rem;
        right:22%;

        p{ 
            border-left-width: 0px;
        }
    }
    .btn {
        background-color: #252525;
        display: table-cell;
        border: none;
        border-radius: 0;
        width: 0;
        font-size: 2rem;
        height: fit-content;
        padding: 1rem 0px 1rem 7rem;
        color: #ffffff;
    }
}

`;

export default Content;