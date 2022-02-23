import React from "react";
import { GeneralWrapper } from "../General-Wrapper/GeneralWrapper";
import { StyledCentralizeWrapper, StyledH1 } from "./StyledTitle";

export const Title = (props) => {
    return (
        <GeneralWrapper>
            <StyledCentralizeWrapper>
                <StyledH1>{props.title}</StyledH1>
            </StyledCentralizeWrapper>
        </GeneralWrapper>
    );
};
