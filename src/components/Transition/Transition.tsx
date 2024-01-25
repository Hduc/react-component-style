import React from "react";
import { ITransitionProps } from "./Transition.types";
import { StyledTransition } from "./Transition.style";

const Transition = (props: ITransitionProps) => {
    return (
        <StyledTransition {...props} className={props.className}>
            {props.children}
        </StyledTransition>
    );
};

export default Transition;
