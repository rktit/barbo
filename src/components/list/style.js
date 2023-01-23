import styled from "styled-components";

const Content = styled.div`
		display: flex;
		align-items: center;
		font-size: 1rem;
		margin-top: 16px;
		color: ${props => props.color ? props.color : '#282c34'};
		
		img {
			width: 30px;
		}
`

export default Content;