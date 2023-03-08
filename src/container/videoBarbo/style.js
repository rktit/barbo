import styled from "styled-components";
import fonts from "config/fonts";
import * as Color from "config/colors";

const Content = styled.div`
padding: 20px !important;

.title {
  font-size: 2rem;
  font-family: ${fonts.comfortaa};
  color: #252525;
  text-align: center;
  padding-bottom: 1rem;
}

@media only screen and (max-width: 600px) {
  padding: 0px !important;

   .title{
    padding-top: 2rem;
      justify-content: center;
      font-size: 1.75rem;
      // text-align: end;
   }
  .content {
    margin-left: 0;
  }
  
`;

export default Content;