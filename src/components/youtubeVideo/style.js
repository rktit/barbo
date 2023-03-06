import styled from "styled-components";

const Content = styled.div`
padding: 20px 0px !important;
margin-top: -20rem;

.image {
  width: 100%;
  height: 30rem;
}

@media only screen and (max-width: 600px) {
    padding: 2rem 0px !important;
    .image {
      width: 24rem;
      height: 15rem;
      margin-left: -2rem;
    }

  .content {
    margin-left: 0;
    width: -webkit-fill-available;
  }

  }
`;

export default Content;