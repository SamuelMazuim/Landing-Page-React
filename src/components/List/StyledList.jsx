import styled from "styled-components";
import { FiClock } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";
import { VscNewFolder } from "react-icons/vsc";

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
    color: white;
`;

export const StyledWorkIcon = styled(VscNewFolder)`
    font-size: 1.5rem;
    margin-right: 0.6rem;
    color: white;
    z-index: 999;
`;
export const StyledhandshakeIcon = styled(FaRegHandshake)`
    font-size: 1.5rem;
    margin-right: 0.6rem;
    color: white;
`;

export const StyledH3 = styled.h3`
    font-size: 1.25rem;
    font-family: sans-serif;
`;
