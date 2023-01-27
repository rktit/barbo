import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
img{
    height: 325px;
}

.card{
    width: 25rem;
    height: 28rem;
    align-items: center;
}

.card-body{
    color: #000000;
}

.card-img-top{
    height: 28rem;
    position: absolute;
}

.card-title{
    font-size: 1.3rem;
    font-family: ${fonts.opensans_regular};
    text-align: start;
}

.card-text{
    height: 16rem;
    font-family: ${fonts.opensans_light};
    text-align: start;
}

.btn{
    padding: 4.5rem 0 0.5rem 4rem;
    display: flex;
    flex-direction: row;
    transition: 0.2s ease-in-out;
    background-color: transparent;
    border: none;
    justify-content: flex-end;


    a {
      align-content: end;
      align-items: end;
      transition: 0.2s ease-in-out;
      color: #ffffff;
      font-family: ${fonts.opensans_light};
      font-size: 15px;
      display: flex;
      
      &.active {
      	color: #fc1347;
      }
      
      :hover {
        transition: 0.1s ease-in-out;
        color: #fc1347;
        text-decoration: none;
      }
}
.btn-primary a{
    color: #000000;
    font-size: 1rem;
    font-family: ${fonts.opensans_light};    
    text-align: end;
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