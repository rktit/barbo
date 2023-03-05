import styled from "styled-components";
import fonts from "config/fonts";
import * as Color from "config/colors";

const Content = styled.div`
padding: 20px 0px !important;
margin-left: 0px;

.title {
  font-size: 2rem;
  font-family: ${fonts.comfortaa};
  color: #252525;
  text-align: center;
  padding-bottom: 1rem;
}

  @media only screen and (max-width: 600px) {
   padding: 30px 0px !important;
   margin: -78rem 0rem;

   .content {

   width: -webkit-fill-available;
   }

     .title{
        justify-content: center;
        font-size: 1.3rem;
        // text-align: end;
        padding: 4rem 0rem 0rem 0rem;

     }
  }
`;

export default Content;