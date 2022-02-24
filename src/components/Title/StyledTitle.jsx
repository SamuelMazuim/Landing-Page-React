import styled from 'styled-components';
import { GiMaterialsScience } from 'react-icons/gi';

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
  animation: rotate 4s linear infinite;
  @keyframes rotate {
    0 {
      transform: rotateY(0);
    }
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
`;

export const StyledButton = styled.button`
  margin-bottom: 2rem;
  width: 60%;
  box-shadow: 0px 10px 14px -7px #276873;
  background: linear-gradient(to bottom, #0dccef 5%, #255b64 100%);
  background-color: #0dccef;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  :hover {
    background: linear-gradient(to bottom, #8bedff 5%, #2db0c7 100%);
    transform: scale(1.1) perspective(1px);
  }
`;
