import styled from "styled-components";
import color from "config/colors";
import fonts from "config/fonts";

import { Button } from "react-bootstrap";

const Content = styled(Button)`
  min-width: 185px;
  font-family: ${fonts.bold};
  ${(props) =>
    props.color === "empty"
      ? `border-radius: 30px; padding: 0.5rem 1rem 0.6rem; color: ${color.white}; background-color: transparent; border-color: ${color.primary}; transition: 0.2s ease-in-out;`
      : props.color === "secondary"
      ? `border-radius: 30px; padding: 0.5rem 1rem 0.6rem; color: ${color.white}; background-color: ${color.secondary}; border-color: ${color.secondary}; transition: 0.2s ease-in-out;`
      : props.color === "white"
      ? `border-radius: 30px; padding: 0.5rem 1rem 0.6rem; color: ${color.primary}; background-color: ${color.white}; border-color: ${color.white}; transition: 0.2s ease-in-out;`
      : props.color === "dark"
      ? `border-radius: 30px; padding: 0.5rem 1rem 0.6rem; color: ${color.secondary}; background-color: ${color.primaryTag}; border-color: ${color.primaryTag}; transition: 0.2s ease-in-out;`
      : props.color === "none"
      ? `border-radius: 30px; padding: 0.5rem 1rem 0.6rem; color: ${color.white}; font-family: ${fonts.bold}; text-decoration: underline; background-color: transparent; border-color: transparent; transition: 0.2s ease-in-out;`
      : `border-radius: 30px; padding: 0.5rem 1rem 0.6rem; color: ${color.white}; background-color: ${color.primary}; border-color: ${color.primary}; transition: 0.2s ease-in-out;`}

  :hover {
    ${(props) =>
      props.color === "empty"
        ? `color: ${color.white}; background-color: ${color.primary}; border-color: ${color.primary};`
        : props.color === "secondary"
        ? `color: ${color.secondary}; background-color: transparent; border-color: ${color.secondary};`
        : props.color === "white"
        ? `color: ${color.white}; background-color: transparent; border-color: ${color.white};`
        : props.color === "dark"
        ? `color: ${color.white}; background-color: ${color.primaryTag}; border-color: ${color.primaryTag}; box-shadow: 0 0 0 0.2rem rgba(255,255,255, 0.5) !important;`
        : props.color === "none"
        ? `color: ${color.white}; background-color: transparent; border-color: transparent; text-decoration: underline; box-shadow: 0 0 0 0.2rem rgba(255,255,255, 0.5) !important;`
        : `color: ${color.primary}; background-color: ${color.white}; border-color: ${color.primary};`}
  }
  :active {
    ${(props) =>
      props.color === "empty"
        ? `color: ${color.white}; background-color: ${color.primary} !important; border-color: ${color.primary} !important; box-shadow: 0 0 0 0.2rem rgba(3, 163, 87, 0.5) !important;`
        : props.color === "secondary"
        ? `color: ${color.secondary} !important; background-color: transparent !important; border-color: ${color.secondary} !important; box-shadow: 0 0 0 0.2rem rgba(54, 74, 85, 0.5) !important;`
        : props.color === "white"
        ? `color: ${color.white} !important; background-color: transparent !important; border-color: ${color.white} !important; box-shadow: 0 0 0 0.2rem rgba(255,255,255, 0.5) !important;`
        : props.color === "dark"
        ? `color: ${color.white} !important; background-color: ${color.primaryTag} !important; border-color: ${color.primary} !important; box-shadow: 0 0 0 0.2rem rgba(255,255,255, 0.5) !important;`
        : props.color === "none"
        ? `color: ${color.white} !important; background-color: transparent !important; border-color: transparent !important; text-decoration: underline; box-shadow: 0 0 0 0.2rem rgba(255,255,255, 0.5) !important;`
        : `color: ${color.white}; background-color: ${color.primary} !important; border-color: ${color.primary} !important; box-shadow: 0 0 0 0.2rem rgba(0, 221, 115, 0.5) !important;`}
  }
  :focus {
    ${(props) =>
      props.color === "empty"
        ? `color: ${color.white}; background-color: ${color.primary} !important; border-color: ${color.primary} !important; box-shadow: 0 0 0 0.2rem rgba(3, 163, 87, 0.5) !important;`
        : props.color === "secondary"
        ? `color: ${color.secondary}; background-color: transparent !important; border-color: ${color.secondary} !important; box-shadow: 0 0 0 0.2rem rgba(54, 74, 85, 0.5) !important;`
        : props.color === "white"
        ? `color: ${color.white}; background-color: transparent !important; border-color: ${color.white} !important; box-shadow: 0 0 0 0.2rem rgba(255,255,255, 0.5) !important;`
        : props.color === "dark"
        ? `color: ${color.white}; background-color: ${color.primaryTag} !important; border-color: ${color.primary} !important; box-shadow: 0 0 0 0.2rem rgba(255,255,255, 0.5) !important;`
        : props.color === "none"
        ? `color: ${color.white}; background-color: transparent !important; border-color: transparent !important; text-decoration: underline; box-shadow: 0 0 0 0.2rem rgba(255,255,255, 0.5) !important;`
        : `color: ${color.white}; background-color: ${color.primary} !important; border-color: ${color.primary} !important; box-shadow: 0 0 0 0.2rem rgba(0, 221, 115, 0.5) !important;`}
  }
  :active:focus {
    ${(props) =>
      props.color === "empty"
        ? `box-shadow: 0 0 0 0.2rem rgba(3, 163, 87, 0.5) !important;`
        : props.color === "secondary"
        ? `box-shadow: 0 0 0 0.2rem rgba(54, 74, 85, 0.5) !important;`
        : props.color === "white"
        ? `box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5) !important;`
        : props.color === "dark"
        ? `box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5) !important;`
        : props.color === "none"
        ? `box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5) !important;`
        : `box-shadow: 0 0 0 0.2rem rgba(0, 221, 115, 0.5) !important;`}
  }
`;

export default Content;
