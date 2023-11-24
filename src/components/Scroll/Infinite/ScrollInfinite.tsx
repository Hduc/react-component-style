import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { IScrollInfiniteProps } from "./ScrollInfinite.types";

const StyleScrollInfinite = styled.div<IScrollInfiniteProps>`
  
`;


const Input: FC<IScrollInfiniteProps> = ({
  ...props
}) => {
  const scrollDiv = () => {
    console.log(window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      debugger
    }
  }
  return (
    <Fragment>
      <StyleScrollInfinite onScroll={scrollDiv}>
        {Array.from(Array(30).keys(), x => x + 1).map(item => (
          <div>item: {item}</div>
        ))}
      </StyleScrollInfinite>
    </Fragment>
  );
};

export default Input;
