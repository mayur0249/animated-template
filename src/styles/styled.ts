import styled from "styled-components";
import { screenSizes } from "./theme";

export const Icon = styled.img<any>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
  object-fit: cover;
  margin-top: ${(props) => props.marginTop};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  &.logo {
    @media (max-width: ${screenSizes.L}px) {
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
    }
  }
`;

export const Button = styled.button<any>`
  width: ${(props) => (props.width ? props.width : "fit-content")};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  padding: ${(props) => props.padding};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => (props.border ? props.border : "none")};
  border-color: ${(props) => props.borderColor};
  cursor: pointer;
  :hover {
    opacity: ${(props) => props.opacity};
    box-shadow: ${(props) => props.boxShadow};
    background: ${(props) => props.hoverBg};
    color: ${(props) => props.hoverColor};
  }
  position: ${(props) => props.position};
  transition: opacity 0.25s ease-in-out;
  text-align: ${(props) => props.textAlign};
  margin-top: ${(props) => props.marginTop};
  display: ${(props) => props.display};
  max-width: ${(props) => props.maxWidth};
`;
