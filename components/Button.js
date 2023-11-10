import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: 0;

  border-radius: 5px;
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
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      &:hover {
        background-color: #faf9f6;
      }
    `}
  ${(props) =>
    props.primary &&
    css`
      background-color: #5542f6;
      color: white;
      gap: 30px;
      &:hover {
        background-color: #5218fa;
      }
    `}
  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
    `}
  ${(props) =>
    props.icongap &&
    css`
      gap: 30px;
    `}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
