import React from "react";

import Content from "css/button";

const Button = (props) => {
  return (
    <Content
      color={props.color}
      onClick={props.onClick}
      className={props.className}
    >
      {props.title}
    </Content>
  );
};

export default Button;
