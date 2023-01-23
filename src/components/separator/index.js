import React from 'react';
import Content from "./style";

function Separator(props) {
		return (<Content className='col-12' color={props.color}>
				<div className="separator"/>
		</Content>)
}

export default Separator;