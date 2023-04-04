import styled from "styled-components";

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  h2,
  p {
    color: #fff;
  }

  p {
    padding: 0 8em;
  }
`;
