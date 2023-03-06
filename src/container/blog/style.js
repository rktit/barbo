import styled from "styled-components";
import fonts from "config/fonts";


const Content = styled.div`
top: -22rem;
background-color: #eeeeee;
margin-bottom: -22rem;

.title{
    font-family: ${fonts.comfortaa};
    font-size: 2rem;
    color: #252525;
    margin-top: 30px;
}

.texto{
    font-family: ${fonts.comfortaa};
    color:#252525;
    font-size: 1.25rem;
    padding: 3rem 8rem;
    text-align: left;
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

.maquinas{
    display:grid;
    grid-template-columns: 0fr 1fr 1fr;

    margin-bottom: 50px;
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
    margin: -56rem 0rem -22rem 0rem;
    padding-right: 0px !important;
    padding-left: 0px !important;

    .title{
        margin-top: 0px;
        font-size: 1.5rem;
        text-align: center;
        width: 22rem;
        padding-top: 2rem;
    }

    .splide{
        margin-top:-60px;
    }

    .slide{
        display: flex;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
    }

    .texto{
        text-align: center;
        font-size: 1rem;
        padding: 40px 30px;
    }

}

`;

export default Content;