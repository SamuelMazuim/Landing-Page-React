import styled from "styled-components";
import { FiMapPin } from "react-icons/fi";

export const Adress = styled.div`
    width: 30rem;
    text-align: left;
    margin-top: 1rem;
    font-family: sans-serif;
    font-size: 1.7rem;
`;

export const PlaceIcon = styled(FiMapPin)`
    margin-right: 1rem;
    font-size: 5rem;
    color: #8bedff;
`;

export const StyledContacts = styled.div`
    margin: 10rem 0rem 0rem -11.5rem;
    width: 80rem;
    height: 20rem;
    border-style: ridge;
`;

export const StyledImput = styled.input`
    border: none;
    border-bottom: ridge;
    margin: 2rem 0rem 0rem 0rem;
    width: 30rem;
    height: 2rem;
`;
