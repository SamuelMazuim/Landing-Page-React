import React from "react";
import { StyledGeneralWrapper } from "../General-Wrapper/StyledGeneralWrapper";
import { StyledP } from "./StyledHeader";
import { StyledLogo } from "./StyledHeader";

export const Header = (props) => {
    return (
        <>
            <StyledGeneralWrapper
                style={{
                    justifyContent: "space-between",
                    padding: "3rem 8rem",
                }}>
                <StyledGeneralWrapper>
                    <StyledLogo />
                </StyledGeneralWrapper>

                <StyledGeneralWrapper>
                    <StyledP>About</StyledP>
                    <StyledP>Service</StyledP>
                    <StyledP>Prices</StyledP>
                    <StyledP>Contact</StyledP>
                </StyledGeneralWrapper>
            </StyledGeneralWrapper>
        </>
    );
};
