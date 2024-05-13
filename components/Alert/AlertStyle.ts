import styled from "styled-components";

export const AlertContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10;
  background-color: ${({ theme }) => theme.colors.alert};
`;
