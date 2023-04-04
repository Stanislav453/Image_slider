import React, { useState, useEffect } from "react";
import { ContainerStyle } from "./styled/ContainerStyle";
import { SlideStyle } from "./styled/SlideStyle";
import { ContentStyled } from "./styled/ContentStyled";
import { IndicatorSlide } from "./IndicatorSlider";

type propsSlider = {
  Data: {
    title: string;
    img: string;
    desc: string;
  }[];
};

export const Slider = ({ Data }: propsSlider) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  console.log(Data.length);

  useEffect(() => {
    const autoplayTime = 3000;
    const timer = setTimeout(() => {
      slideIndex >= Data.length - 1
        ? setSlideIndex(0)
        : setSlideIndex(slideIndex + 1);
    }, autoplayTime);

    return () => clearInterval(timer);
  }, [slideIndex]);

  return (
    <ContainerStyle>
      {Data.map((oneSlide, index) => {
        const { img, title, desc } = oneSlide;
        return (
          <SlideStyle
            key={index}
            isActive={slideIndex === index ? "active" : ""}
            image={img}
          >
            <ContentStyled>
              <h2>{title}</h2>
              <p>{desc}</p>
            </ContentStyled>
            <IndicatorSlide
              slideIndex={slideIndex}
              amountImage={Data.length}
              setSlideIndex={setSlideIndex}
            />
          </SlideStyle>
        );
      })}
    </ContainerStyle>
  );
};
