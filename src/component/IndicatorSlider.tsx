import { IndicatorSlideStyle } from "./styled/IndicatorSlideStyle";
import { DotedStyle } from "./styled/DotedStyle";

export const IndicatorSlide = ({
  slideIndex,
  amountImage,
  setSlideIndex,
}: any) => {
  return (
    <IndicatorSlideStyle>
      {Array(amountImage)
        .fill(1)
        .map((_, i) => {
          return (
            <DotedStyle
              key={i}
              isActive={slideIndex === i ? "active" : ""}
              onClick={() => setSlideIndex(i)}
            />
          );
        })}
    </IndicatorSlideStyle>
  );
};
