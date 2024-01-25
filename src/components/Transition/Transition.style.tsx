import styled from "styled-components";
import { ITransitionProps } from "./Transition.types";

export const StyledTransition = styled.div<ITransitionProps>`
    background-color:red;
    width: ${(props) => props.width || '100px'};
    height: ${(props) => props.height || '100px'};
    transition: width ${(props) => props.timeWidth || 1}s, height ${(props) => props.timeHeight || 1}s, transform ${(props) => props.timeTransform || 1}s;
    transition-timing-function: ${(props) => props.type || 'linear'};
    transition-delay: ${(props) => props.delay || 0}s;
    &:hover {
        width: ${(props) => props.toWidth || '200px'};
        height: ${(props) => props.toHeight || '200px'};
        ${(props) => props.transform ? 'transform: '+ props.transform+';' : ''}
    }
`;
