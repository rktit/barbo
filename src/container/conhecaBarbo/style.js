import styled from "styled-components";
import fonts from "config/fonts";
import * as Color from "config/colors";

const Content = styled.div`
padding: 20px !important;

.title {
  font-size: 2rem;
  font-family: ${fonts.opensans_light};
  color: #000000;
  text-align: center;
  padding-bottom: 1rem;
}

@media only screen and (max-width: 600px) {
   .title{
      justify-content: center;
      font-size: 1.3rem;
      // text-align: end;
   }
  .content {
    margin-left: 3%;
  }

  @media only screen and (max-width: 600px) {
     .title{
        justify-content: center;
        font-size: 1.3rem;
        // text-align: end;
     }
  }
`;

export default Content;