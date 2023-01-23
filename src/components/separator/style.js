import styled from "styled-components";

const Content = styled.div`
	display: flex;
	justify-content: center;

  .separator {
    padding: 5px;
    max-width: 100px;
    width: 100px;
    height: 10px;
    background-color: ${props => props.color ? props.color : '#ef6c65'};
    border-radius: 16px;
    margin-top: 16px;
  }
`

export default Content;