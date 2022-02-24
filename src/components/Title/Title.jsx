import React from "react";
import { GeneralWrapper } from "../General-Wrapper/GeneralWrapper";
import {
    StyledCentralizeWrapper,
    StyledCollumnWrapper,
    StyledH1,
    StyledH2,
    StyledIcon,
    StyledButton,
    StyledLocalWrapper,
} from "./StyledTitle";

export const Title = (props) => {
    return (
        <>
            <StyledCentralizeWrapper
                style={{
                    color: "white",
                }}>
                <GeneralWrapper>
                    <StyledCollumnWrapper
                        style={{
                            marginLeft: "8rem",
                        }}>
                        <StyledH1>{props.title1}</StyledH1>
                        <StyledH1>{props.title2}</StyledH1>
                        <StyledH2>{props.subtitle}</StyledH2>
                        {props.children}
                    </StyledCollumnWrapper>
                </GeneralWrapper>
                <StyledCentralizeWrapper>
                    <StyledIcon />
                </StyledCentralizeWrapper>
            </StyledCentralizeWrapper>
            <StyledCentralizeWrapper>
                <StyledButton>Start Now</StyledButton>
            </StyledCentralizeWrapper>
        </>
    );
};
