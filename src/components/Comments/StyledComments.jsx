import styled from 'styled-components';

export const StyledCard = styled.div`
  margin: 3rem 3rem 1rem 3rem;
  padding: 2rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 20%;
  min-height: 10rem;
  background-color: white;
  border-radius: 3rem;
  -webkit-box-shadow: 2px 2px 50px -45px #000000;
  box-shadow: 2px 2px 50px -45px #000000;
  transition: 0.4s;
  :hover {
    transform: translateY(-0.5rem);
  }
`;
export const StyledCardTitle = styled.h3`
  width: 100%;
  margin: 1rem 1rem 0rem;
  text-align: left;
  font-size: 2rem;
`;
export const StyledP = styled.p`
  width: 100%;
  margin: 1rem;
  text-align: justify;
  font-size: 1rem;
`;
