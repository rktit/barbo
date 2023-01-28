import styled from "styled-components";
import fonts from "config/fonts";
import lupa from "images/empreendimento/lupa.png";


const Content = styled.div`

background-color: #eeeeee;
.box {
    height: 80px;
    display: flex;
    justify-content: center;
}
.title{
    font-family: ${fonts.opensans_light};
    font-size: 2rem;
    color: #000000;
    margin-bottom: 30px;
    margin-top: 30px;
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
    padding: 10px;
}
 .filtro__item {
    width: 14.5rem;
    padding: 0 0;
}
.btn_lupa {
    background: url(${lupa}) no-repeat center;
    height: 2.75rem;
    padding: 1rem 1rem;
    border-radius: 0;
    border-width: 1px;
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

@media only screen and (max-width: 600px) {

    padding-right: 0px !important;
    padding-left: 0px !important;

    .title{
        margin-top: -70px;
        font-size: 1.5rem;

    }

    .splide{
        margin-top:-60px;
    }

    .slide{
        margin-top: -40px;
        display: flex;
        justify-content: center;
        width: 100%;
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