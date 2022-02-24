import React from "react";
import { GeneralWrapper } from "../General-Wrapper/GeneralWrapper";
import { StyledGeneralWrapper } from "../General-Wrapper/StyledGeneralWrapper";
import { StyledP } from "../SixCards/StyledSixCards";
import { StyledCollumnWrapper, StyledH2 } from "../Title/StyledTitle";
import { Adress, PlaceIcon, StyledContacts, StyledImput } from "./StyledContacts";

export const Contacts = (props) => {
    return (
        <div style={{ backgroundColor: "rgb(248,252,252)", paddingBottom: "5rem" }}>
            <GeneralWrapper>
                <StyledGeneralWrapper>
                    <StyledCollumnWrapper style={{ margin: "0rem" }}>
                        <StyledH2
                            style={{
                                margin: "8rem  0rem 0rem 12rem",
                                width: "40%",
                                fontSize: "2rem",
                            }}>
                            Contact us:
                        </StyledH2>

                        <Adress
                            style={{
                                margin: "0rem  0rem 0rem 12rem",
                                width: "40%",
                                fontSize: "2rem",
                            }}>
                            <StyledGeneralWrapper style={{ width: "20rem", borderStyle: "ridge" }}>
                                <StyledCollumnWrapper
                                    style={{
                                        width: "13rem",
                                    }}>
                                    <StyledH2 style={{ fontSize: "1.3rem", width: "10rem" }}>
                                        Brasil
                                    </StyledH2>
                                    <StyledP style={{ width: "10rem" }}>Sinnoh</StyledP>
                                    <StyledP style={{ width: "10rem", marginTop: "0rem" }}>
                                        Twinleaf Town
                                    </StyledP>
                                </StyledCollumnWrapper>
                                <PlaceIcon />
                            </StyledGeneralWrapper>
                        </Adress>
                    </StyledCollumnWrapper>
                    <StyledContacts>
                        <StyledImput />
                    </StyledContacts>
                </StyledGeneralWrapper>
            </GeneralWrapper>
        </div>
    );
};

const Labels = () => {
    return <></>;
};
