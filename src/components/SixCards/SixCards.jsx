import React from "react";
import { GeneralWrapper } from "../General-Wrapper/GeneralWrapper";
import { StyledCentralizeWrapper } from "../Title/StyledTitle";
import { StyledCard, StyledCardTitle, StyledP } from "./StyledSixCards";
import { DiCode } from "react-icons/di";

export const SixCards = (props) => {
    return (
        <>
            <GeneralWrapper>
                <h2>
                    Data science Data science Data science Data science Data science Data science
                    Data science
                </h2>
                <StyledCentralizeWrapper>
                    <StyledCard>
                        <DiCode
                            style={{
                                color: "black",
                            }}
                        />
                        <StyledCardTitle>Data Science</StyledCardTitle>
                        <StyledP>
                            One morning, when Gregor Samsa woke from troubled dreams, he found
                            himself transformed in his bed into a horrible vermin. He lay on his
                            armour-like back, and if he lifted his head a little he could see his
                            brown belly, slightly domed and divided by arches into stiff sections.
                        </StyledP>
                    </StyledCard>
                </StyledCentralizeWrapper>
            </GeneralWrapper>
        </>
    );
};
