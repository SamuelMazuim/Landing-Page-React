import styled from "styled-components";
import { GiMaterialsScience } from "react-icons/gi";

export const StyledCentralizeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
`;
export const StyledCollumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
    width: 100%;
`;

export const StyledH1 = styled.h1`
    width: 35rem;
    text-align: left;
    font-family: sans-serif;
    font-size: 3.5rem;
`;

export const StyledH2 = styled.h2`
    width: 30rem;
    text-align: left;
    margin-top: 1rem;
    font-family: sans-serif;
    font-size: 1.7rem;
`;

export const StyledIcon = styled(GiMaterialsScience)`
    font-size: 30rem;
    color: #8bedff;
    /* transform: scaleX(-1);
    transition: 0.5s; */
`;
