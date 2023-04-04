import styled from "styled-components";

type DotedStyleProps = {
  isActive: string;
};

export const DotedStyle = styled.div`
  position: relative;
  z-index: 200;

  width: 16px;
  height: 16px;

  opacity: ${({ isActive }: DotedStyleProps) =>
    isActive === "active" ? "1" : ".6"};

  border-radius: 10px;
  background-color: #fff;
  transform: scale(1);
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }
`;
