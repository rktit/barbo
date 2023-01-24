import styled from "styled-components";
import fonts from "config/fonts";

const Content = styled.div`
    
padding: 5rem 0rem 0rem 0rem;
    

    .boxCatalogo{
        display:flex;
        justify-content: flex-end;

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
        text-align: left;
    }
    .formGridAceite {
        display: flex;
        widht:10rem;
    }
    .formCatalogo{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }

    .formTitle{
        text-align: center;
        color: #000000;
        font-size: 1.7rem;
        font-family:${fonts.opensans_light};

        strong{
            font-size: 2rem;
            font-family:${fonts.opensans_bold};
        }
    }

    input{
        background-color:transparent;
        color: #000000;
        border: 1px solid #000000;
        border-radius: 0px;

        ::-webkit-input-placeholder {
            color: #000000;
        }
        
            &.active {
            background-color: transparent;
            color: #000000;
            }
    
            :hover {
            transition: 0.1s ease-in-out;
            background-color: transparent;
            text-decoration: none;
            }
            
            :focus{
                background-color: transparent;
                color: #000000;
            }
    }

    .btnEnviar{
        background-color: #ff0d29;
        border: none;
        border-radius: 0;
        font-family:${fonts.opensans_bold};
        font-size: 1.2rem;
        padding: 0.5rem 12rem;
        
        &.active {
        background-color: #000000;
        }

        :hover {
        transition: 0.1s ease-in-out;
        background-color: #000000;
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
    }
`;

export default Content;
