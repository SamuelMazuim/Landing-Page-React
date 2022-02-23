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

export const StyledButton = styled.button`
    font-size: 5rem;
    transition: 0.8s;
    box-shadow: inset 0px 0px 0px -1px #ffffff;
    background: linear-gradient(to bottom, #5fb6c2 80%, #5fb6c2 100%);
    background-color: #41acb9;
    border-radius: 25px;
    display: inline-block;
    cursor: pointer;
    color: #666666;
    font-family: sans-serif;
    font-weight: bold;
    padding: 1rem 3rem;
    text-shadow: 1px 1px 0px #ffffff;
    :hover {
        transition: 0.8s;
        background: linear-gradient(to bottom, #5fb6c2 90%, #f9f9f9 100%);
        background-color: #e9e9e9;
    }
`;
