import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;
  border-radius: 5px;
  text-decoration: none;
  padding: 5px 15px;
  cursor: pointer;
  ${(props) =>
    props.white &&
    css`
      background-color: white;
      color: black;
      &:hover {
        background-color: #faf9f6;
      }
    `}
  ${(props) =>
    props.primary &&
    css`
      background-color: #7f00ff;
      color: white;
      gap: 30px;
      &:hover {
        background-color: #5d3fd3;
      }
    `}
  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
