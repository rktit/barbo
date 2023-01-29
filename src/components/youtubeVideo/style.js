import styled from "styled-components";

const Content = styled.div`
padding: 20px 0px !important;
margin-left: 0px;

@media only screen and (max-width: 600px) {
    padding: 20px 0px !important;

  .content {
    margin-left: 0;
    width: -webkit-fill-available;
  }

  }
`;

export default Content;