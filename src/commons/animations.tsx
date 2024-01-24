import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


export const moveLeft = (from: number, to: number) => keyframes`
  from { left:${from}px;}
  to   { left:${to}px;}
`
