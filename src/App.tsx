import React from "react";
import { Slider } from "./component/Slider";
import { GlobalStyles } from "./component/styled/GlobalStyles";
import { Data } from "./Data";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Slider Data={Data} />
    </>
  );
};
