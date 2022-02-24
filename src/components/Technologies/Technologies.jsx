import React from "react";
import { StyledCentralizeWrapper, StyledH1, StyledH2 } from "../Title/StyledTitle";
import { StyledTech, StyledCardTitle, StyledSpan } from "./StyledTechnologies";
import {
    DiReact,
    DiPython,
    DiDatabase,
    DiGithubBadge,
    DiNodejs,
    DiAngularSimple,
    DiJavascript,
} from "react-icons/di";
import { VscTerminalPowershell } from "react-icons/vsc";

export const Technologies = (props) => {
    return (
        <>
            <div
                style={{
                    background: "radial-gradient(at 0% 0%, #41acb9, #0b011f, #0b011f)",
                    padding: "3rem 0rem 10rem 0rem",
                }}>
                <StyledCentralizeWrapper style={{ flexDirection: "column" }}>
                    <StyledH1
                        style={{
                            color: "white",
                            margin: "5rem  0rem 0rem 0rem",
                            width: "55%",
                            textAlign: "center",
                        }}>
                        Escolha seu curso <StyledSpan>por tecnologia</StyledSpan>
                    </StyledH1>
                    <StyledH2
                        style={{
                            color: "white",
                            margin: "3rem  0rem 2rem 0rem",
                            width: "55%",
                            textAlign: "center",
                        }}>
                        Data science Data science Data science Data science Data science Data
                        science Data science
                    </StyledH2>
                </StyledCentralizeWrapper>
                <StyledCentralizeWrapper>
                    <StyledTech>
                        <DiReact
                            style={{
                                marginTop: "-2rem",
                                fontSize: "10rem",
                                color: "#61dafb",
                            }}
                        />
                        <StyledCardTitle>React</StyledCardTitle>
                    </StyledTech>
                    <StyledTech>
                        <DiPython
                            style={{
                                marginTop: "-2rem",
                                fontSize: "10rem",
                                color: "#3470a2",
                            }}
                        />
                        <StyledCardTitle>Python</StyledCardTitle>
                    </StyledTech>
                    <StyledTech>
                        <DiAngularSimple
                            style={{
                                marginTop: "-2rem",
                                fontSize: "10rem",
                                color: "#bd002e",
                            }}
                        />
                        <StyledCardTitle>Angular</StyledCardTitle>
                    </StyledTech>
                    <StyledTech>
                        <DiGithubBadge
                            style={{
                                marginTop: "-2rem",
                                fontSize: "10rem",
                            }}
                        />
                        <StyledCardTitle>Github</StyledCardTitle>
                    </StyledTech>
                </StyledCentralizeWrapper>

                <StyledCentralizeWrapper>
                    <StyledTech>
                        <VscTerminalPowershell
                            style={{
                                marginTop: "-1rem",
                                fontSize: "10rem",
                                color: "#1f77c7",
                            }}
                        />
                        <StyledCardTitle>Powershell</StyledCardTitle>
                    </StyledTech>
                    <StyledTech>
                        <DiNodejs
                            style={{
                                marginTop: "-2rem",
                                fontSize: "10rem",
                                color: "#439d59",
                            }}
                        />
                        <StyledCardTitle>Node JS</StyledCardTitle>
                    </StyledTech>
                    <StyledTech>
                        <DiDatabase
                            style={{
                                marginTop: "-2rem",
                                fontSize: "10rem",
                                color: "#05192d",
                            }}
                        />
                        <StyledCardTitle>Database</StyledCardTitle>
                    </StyledTech>
                    <StyledTech>
                        <DiJavascript
                            style={{
                                marginTop: "-2rem",
                                fontSize: "10rem",
                                color: "#efd81d",
                            }}
                        />
                        <StyledCardTitle>JavaScript</StyledCardTitle>
                    </StyledTech>
                </StyledCentralizeWrapper>
            </div>
        </>
    );
};
