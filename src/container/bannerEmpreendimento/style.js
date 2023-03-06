import styled from "styled-components";
import fonts from "config/fonts";


const Content = styled.div`
.banner{
    height: auto;
    width: 100%;
    background-size: cover;
    
}
.welcome{
    height: 20rem;
    width: 30rem;
    border-width: 2px;
    border-style: solid;
    border-color: #ffffff;
    transform: rotate(-40deg);
    margin: -26rem 0rem 4rem 4rem;
    transform: rotate(14deg);
    background-color: #2525252b;
}
.box-texto {
    margin-top: 0rem;
    transform: rotate(-14deg);
    margin: 3rem 0rem 0rem 4rem;
    width: max-content;
  }
  .title{
    font-size: 3rem;
    font-family: ${fonts.opensans_light};
    color: #ffffff;
    text-align: left;
    margin-bottom: -16px;
  }
  .title1{
    font-size: 1.75rem;
    font-family: ${fonts.opensans_bold};
    color: #ffffff;
    text-align: left;
  }
  .text{
    font-family: ${fonts.opensans_light};
    color: #ffffff;
    text-align: left;
  }
  .btn1{
    background-color: #252525;
    color: #ffffff;
    font-size: 1.75rem;
    display: table-cell;
    border: none;
    border-radius: 0px;
    height: 3rem;
    width: 14rem;
    margin: 1rem 0rem;
    justify-content: space-evenly;
    

    &.active {
        background-color: #e73538;
        color: #ffffff;
        width: 20rem;
        }

    :hover {
    transition: 0.1s ease-in-out;
    background-color: #e73538;
    color: #ffffff;
    text-decoration: none;
    }
     a {
        color: #ffffff;
        text-decoration: none;
        background-color: transparent;
    }
}


.splide {
    padding: 0em 0em;
    margin-top: -22rem;
}
.splide__slide img {
    vertical-align: bottom;
    width: 100%;
    height: 34rem;
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
        .splide {
            padding: 0em 0em;
            margin-top: -87rem;
        }
        .welcome {
            height: 14rem;
            width: 22rem;
            margin: -16rem 0rem 2rem 1rem;
            background-color: #2525252b;
        }
        .box-texto {
            margin-top: 0rem;
            transform: rotate(-14deg);
            margin: 0.5rem 0rem 0rem 2rem;
            width: max-content;
          }
          .title{
            font-size: 2rem;
            font-family: ${fonts.opensans_light};
            color: #ffffff;
            text-align: left;
            margin-bottom: -20px;
          }
          .title1{
            font-size: 2rem;
            font-family: ${fonts.opensans_bold};
            color: #ffffff;
            text-align: left;
          }
          .text{
            font-family: ${fonts.opensans_light};
            color: #ffffff;
            text-align: left;
          }
          .btn1{
            background-color: #252525;
            color: #ffffff;
            font-size: 2rem;
            display: table-cell;
            border: none;
            border-radius: 0px;
            height: 3rem;
            width: 12rem;
            margin: 1rem 0rem;
            justify-content: space-evenly;
            
        
            &.active {
                background-color: #e73538;
                color: #ffffff;
                width: 20rem;
                }
        
            :hover {
            transition: 0.1s ease-in-out;
            background-color: #e73538;
            color: #ffffff;
            text-decoration: none;
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