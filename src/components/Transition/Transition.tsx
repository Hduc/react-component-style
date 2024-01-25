import React from "react";
import { ITransitionProps } from "./Transition.types";
import { StyledTransition } from "./Transition.style";

const Transition = (props: ITransitionProps) => {
    return (
        <StyledTransition {...props}>
            {/* {props.children} */}
        </StyledTransition>
    );
};

export default Transition;
