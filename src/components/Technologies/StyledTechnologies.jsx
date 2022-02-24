import styled from 'styled-components';

export const StyledCard = styled.div`
  margin: 3rem 3rem 1rem 3rem;
  padding: 3rem 2rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 15%;
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

//

export const StyledSpan = styled.span`
  color: #8bedff;
`;
export const StyledTech = styled(StyledCard)`
  margin: 2rem 1rem 1rem 2rem;
  padding: 3rem 2rem;
  width: 15%;
  border-radius: 1.5rem;
  border-bottom: solid #8bedff 1.5rem;
  :hover {
    border-bottom: solid #096879 1.5rem;
    transform: translateY(0rem);
  }
`;
