import React from "react";
import {
    StyledClockIcon,
    StyledhandshakeIcon,
    StyledWorkIcon,
    StyledListWrapper,
    StyledGeneralListWrapper,
    StyledH3,
} from "./StyledList";

export const List = () => {
    return (
        <>
            <StyledGeneralListWrapper>
                <StyledListWrapper>
                    <StyledClockIcon />
                    <StyledH3>Learn at your own pace</StyledH3>
                </StyledListWrapper>
                <StyledListWrapper>
                    <StyledWorkIcon />
                    <StyledH3>Work in real projects</StyledH3>
                </StyledListWrapper>
                <StyledListWrapper>
                    <StyledhandshakeIcon />
                    <StyledH3>Join the job market</StyledH3>
                </StyledListWrapper>
            </StyledGeneralListWrapper>
        </>
    );
};
