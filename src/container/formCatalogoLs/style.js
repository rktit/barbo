import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
    
    padding:52px 0px;

    .boxCatalogo{
        display:flex;
        background-color: #20396f;
        height: 450px;
        box-shadow: 5px 5px 20px #000000;
    }

    .image{
        
        height:550px;
        
        img{
            width:600px;
            height:auto;
            margin-top: -30px;
        }
    }

    .boxBtn{
        display: flex;
        text-align: center;
    }

    .formCatalogo{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }

    .formTitle{
        text-align: center;
        color: #FFF;
        font-size: 1.7rem;
        font-family:${fonts.opensans_light};

        strong{
            font-size: 2rem;
            font-family:${fonts.opensans_bold};
        }
    }

    input{
        background-color:#20396f;
        color: #fff;
        border: 1px solid #b3b3b3;
        border-radius: 0px;

        ::-webkit-input-placeholder {
            color: #fff;
        }
        
            &.active {
            background-color: #20396f;
            color: #fff;
            }
    
            :hover {
            transition: 0.1s ease-in-out;
            background-color: #20396f;
            text-decoration: none;
            }
            
            :focus{
                background-color: #20396f;
                color: #fff;
            }
    }

    .btnEnviar{
        background-color: #fc1347;
        border: none;
        border-radius: 0;
        font-family:${fonts.opensans_bold};
        font-size: 1.2rem;
        padding: 10px 20px;

        &.active {
        background-color: #ff3a66;
        }

        :hover {
        transition: 0.1s ease-in-out;
        background-color: #ff3a66;
        text-decoration: none;
        }
    }


    @media only screen and (max-width: 600px) {
        justify-content: center;

        .boxCatalogo{
            height: 100%;
            flex-direction: column;
        }

        .image{
            img{
                width:100%;
                height:auto;
                margin-top: -30px;
            }
        }

        .btnEnviar{
            margin-bottom: 15px;
        }

        .formCatalogo{
            padding-top: 18px !important;
        }
    }
`;

export default Content;
