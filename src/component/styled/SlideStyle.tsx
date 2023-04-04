import styled from "styled-components";

type imgProps = {
  isActive: string;
  image: string;
};

export const SlideStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  opacity: ${({ isActive }: imgProps) => (isActive === "active" ? "1" : "0")};
  transition: opacity 1s;
  background-image: url(${({ image }: imgProps) => image});
`;
