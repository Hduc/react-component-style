import { keyframes } from "styled-components";
import { ITransitionProps } from "./Transition.types";

export const StyledTransition = (props: ITransitionProps) => keyframes`
    width: ${props.width || '100px'};
    height: ${props.height || '100px'};
    transition: width ${props.timeWidth || 0}s, height ${props.timeHeight || 0}s, transform ${props.timeTransform || 0}s;
    &:hover{
        width: ${props.toWidth || '200px'};
        height: ${props.toHeight || '200px'};
        transition-timing-function: ${props.type || 'linear'};
        transition-delay: ${props.delay || 0};
        transform: ${props.transform};
    }
`;
