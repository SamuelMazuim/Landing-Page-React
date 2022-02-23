import React from "react";
import { GeneralWrapper } from "../General-Wrapper/GeneralWrapper";
import {
    StyledCentralizeWrapper,
    StyledCollumnWrapper,
    StyledH1,
    StyledH2,
    StyledIcon,
} from "./StyledTitle";
import { List } from "../List/List";
import { GlobalStyle } from "../../styles/global,";

export const Title = (props) => {
    return (
        <>
            <GlobalStyle />
            <StyledCentralizeWrapper>
                <GeneralWrapper>
                    <StyledCollumnWrapper>
                        <StyledH1>{props.title1}</StyledH1>
                        <StyledH1>{props.title2}</StyledH1>
                        <StyledH2>{props.subtitle}</StyledH2>
                        <List />
                    </StyledCollumnWrapper>
                </GeneralWrapper>
                <StyledCentralizeWrapper>
                    <StyledIcon />
                </StyledCentralizeWrapper>
            </StyledCentralizeWrapper>
        </>
    );
};
