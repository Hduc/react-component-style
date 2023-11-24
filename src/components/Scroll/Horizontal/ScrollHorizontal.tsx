import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { IScrollHorizontalProps } from "./ScrollHorizontal.types";

const StyledScrollHorizontal = styled.div<IScrollHorizontalProps>`
::-webkit-scrollbar{width:2px;height:2px;}
::-webkit-scrollbar-button{width:2px;height:2px;}
& .horizontal-scroll-wrapper{
  position:absolute;
  display:block;
  top:0;
  left:0;
  width:80px;
  max-height:500px;
  margin:0;
  background:#abc;
  overflow-y:auto;
  overflow-x:hidden;
  transform:rotate(-90deg) translateY(-80px);
  transform-origin:right top;
  & > div {
    display:block;
    padding:5px;
    background:#cab;
    transform:rotate(90deg);
    transform-origin: right top;
  }
}
`;

const Input: FC<IScrollHorizontalProps> = ({
  ...props
}) => {
  return (
    <Fragment>
      <StyledScrollHorizontal>

        <div className="horizontal-scroll-wrapper squares">
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
          <div>item 4</div>
          <div>item 5</div>
          <div>item 6</div>
          <div>item 7</div>
          <div>item 8</div>
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
          <div>item 4</div>
          <div>item 5</div>
          <div>item 6</div>
          <div>item 7</div>
          <div>item 8</div>
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
          <div>item 4</div>
          <div>item 5</div>
          <div>item 6</div>
          <div>item 7</div>
          <div>item 8</div>
        </div>
      </StyledScrollHorizontal>
    </Fragment>
  );
};

export default Input;
