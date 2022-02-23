import styled from "styled-components";

export const StyledCard = styled.div`
    margin: 1rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    /* min-width: 25%; */
    min-height: 10rem;
    -webkit-box-shadow: 2px 3px 15px -4px #000000;
    box-shadow: 2px 3px 15px -4px #000000;
`;
export const StyledCardTitle = styled.h3`
    width: 100%;
    margin: 1rem;
    text-align: left;
    font-size: 2rem;
    color: black;
`;
export const StyledP = styled.p`
    width: 100%;
    margin: 1rem;
    text-align: justify;
    font-size: 1rem;
    color: black;
`;
