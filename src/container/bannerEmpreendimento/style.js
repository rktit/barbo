import styled from "styled-components";
import fonts from "config/fonts";


const Content = styled.div`
.banner{
    height: auto;
    width: 100%
    background-size: cover;
}
.splide {
    padding: 0em 0em;
}
.splide__slide img {
    vertical-align: bottom;
    width: 100%;
    height: auto;
}
    .splide__arrow svg {
        width: 1.5em;
        height: 1.5em;
        fill: transparent;
        transition: fill .2s linear;
    }
    .splide__pagination {
        display: inline-flex;
        align-items: center;
        width: 95%;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 0 -3rem 0;
    }
    .splide__pagination__page {
        display: inline-block;
        width: 20px;
        height: 5px;
        background: #e73538;
        border-radius: 2.5px;
        margin: 3px 3px 3px 0px;
        padding: 0;
        transition: all .2s linear;
        border: none;
    }
    .splide__pagination__page.is-active {
        background: #252525;
        width: 5px;
    }
    // .maquinas{
    //     display:grid;
    //     grid-template-columns: 0fr 1fr 1fr;
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

    @media only screen and (max-width: 600px) {
        .text{
            margin-right: 0;
            text-align:center;
            font-size: 1.2rem;
            margin-top: -310px;
        }
        img{
            width: 180px;
        }
        .banner{
            height: 11rem;
            width: 30rem;
            margin-top: 10rem;
            background-repeat: no-repeat;
        }
    }
`;

export default Content;