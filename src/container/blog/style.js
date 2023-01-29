import styled from "styled-components";
import fonts from "config/fonts";


const Content = styled.div`

background-color: #eeeeee;
.title{
    font-family: ${fonts.opensans_light};
    font-size: 2rem;
    color: #000000;
    margin-top: 30px;
}

.texto{
    font-family: ${fonts.opensans_light};
    color:#000000;
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
    font-family: ${fonts.opensans_light};
    position: absolute;
    right:10%;
    top:80px;

    color:#20396f;
    font-size: 1.5rem;

    p{
        
        border-left-style: solid;
        border-left-width: 2px;
        border-left-color: #fc1347;
        padding-left: 25px;
        margin-left:-25px
    }

    strong{
        font-family: ${fonts.opensans_bold};
    }
}

.maquinas{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;

    margin-bottom: 50px;
}


.infos{
    color:#ffffff;
    font-size: 0.9rem;
}

.right-side{
    background-color:#ff0d29;
    font-family: ${fonts.raleway_semiBold};
    width:200px;
    padding-left: 10px;
    padding-bottom: 10px;
}

.title-info{
    font-family: ${fonts.raleway_bold} !important;
    font-size: 2rem;
    height:200px;
    padding-top:90px;
}

.left-side{
    background-color:#e5142c;
    font-family: ${fonts.raleway_medium};
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
    fill: #000000;
    transition: fill .2s linear;
}
.splide__pagination__page {
    display: inline-block;
    width: 20px;
    height: 5px;
    background: #fc1347;
    border-radius: 2.5px;
    margin: 3px;
    padding: 0;
    transition: all .2s linear;
    border: none;
}
.splide__pagination__page.is-active {
    background: #000000;
    width: 5px;
}
@media only screen and (max-width: 600px) {

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