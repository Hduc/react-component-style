import React from "react";
import { IAnimationProps } from "./Animation.types";
import { StyledAnimation } from "./Animation.style";

const Animation = (props: IAnimationProps) => {
    return (
        <StyledAnimation {...props} className={props.className}>
            {props.children}
        </StyledAnimation>
    );
};

export default Animation;
