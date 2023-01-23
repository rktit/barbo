import styled from "styled-components";
import fonts from "config/fonts";

import banner from "images/banner/banner-conheca-tratores.png";

const Content = styled.div`
background-color: #ff7313;
padding: 0;

.title{
    font-family: ${fonts.opensans_bold};
    font-size: 2rem;
    color: white;
    margin-bottom: 30px;
    margin-top: -200px;
}

.demarcador{
    height: 40px;
    width: 40px;

    border-bottom-style: solid;
    border-bottom-color: #ff7313;
    border-bottom-width: 3px;
    border-right-style: solid;
    border-right-color: #ff7313;
    border-right-width: 3px;

    position: absolute;
    left:15%;
    top:10px;
  }

  .demarcadorTexto{
    height: 90px;
    border-bottom-style: solid;
    border-bottom-color: #ff7313;
    border-bottom-width: 3px;
    border-right-style: solid;
    border-right-color: #ff7313;
    border-right-width: 3px;
    top: 80px;
    margin-left: -10px;
    position: absolute;
  }

.banner{
    width: 100%;
    height: auto;
}

.textos{
    font-family: ${fonts.opensans_light};
    position: absolute;
    right:15%;
    top:100px;

    color:#ffffff;
    font-size: 1.5rem;

    .p{
        border-left-style: solid;
        border-left-width: 5px;
        border-left-color: #ff7313;
    }
}

.maquinas{
    // display:grid;
    // grid-template-columns: 1fr 1fr 1fr;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;

    margin-bottom: 50px;
}


@media only screen and (max-width: 600px) {

    .banner{
        height: auto;
        background-size: cover;
    }

    .title{
        margin-top: 10px;
        font-size: 1.5rem;
    }

    .slide{
        margin-top: -40px;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .textos{
        text-align: center;
        color: #d0651c;
        top: 10px;
        font-size: 0.9rem;
    }
    
}

`;

export default Content;