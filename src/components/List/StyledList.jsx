import styled from "styled-components";
import { FiClock } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";

export const StyledListWrapper = styled.div`
    margin-top: 1rem;
    align-items: center;
    display: flex;
    width: 100%;
`;
export const StyledGeneralListWrapper = styled.div`
    margin-top: 1.3rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledClockIcon = styled(FiClock)`
    font-size: 1.5rem;
    margin-right: 0.6rem;
`;

export const StyledWorkIcon = styled(GrWorkshop)`
    font-size: 1.5rem;
    margin-right: 0.6rem;
`;
export const StyledhandshakeIcon = styled(FaRegHandshake)`
    font-size: 1.5rem;
    margin-right: 0.6rem;
`;

export const StyledH3 = styled.h3`
    font-size: 1.25rem;
    font-family: sans-serif;
`;
