import styled from "styled-components";
import fonts from "config/fonts";


const Content = styled.div`

background-color: #eeeeee;
.title{
    font-family: ${fonts.opensans_light};
    font-size: 2rem;
    color: #000000;
    margin-bottom: 30px;
    margin-top: 30px;
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
// .maquinas{
//     display:grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     margin: 50px 40px;
// }

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

@media only screen and (max-width: 600px) {

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
        font-family: ${fonts.opensans_light};
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
        width: 14.5rem;
        padding: 0 0;
    }
    .btn_lupa {
        height: 2.75rem;
        padding: 1rem 1rem;
        border-radius: 0;
        border-width: 1px;
    }
    .filtro__button {
        width: 2.75rem;
    }
    padding-right: 0px !important;
    padding-left: 0px !important;

    .title{
        font-size: 1.5rem;

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

    .textos{
        text-align: center;
        top: 5px;
        font-size: 0.7rem;
        right:22%;

        p{ 
            border-left-width: 0px;
        }
    }

}

`;

export default Content;