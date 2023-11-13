import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 0 10%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
