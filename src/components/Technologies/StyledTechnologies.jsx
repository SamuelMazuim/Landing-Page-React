import styled from 'styled-components';
import { StyledCard } from '../SixCards/StyledSixCards';

export const StyledCardTitle = styled.h3`
  margin: 1rem 1rem 0rem;
  font-size: 2rem;
`;

export const StyledSpan = styled.span`
  color: #8bedff;
`;
export const StyledTech = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 1rem 1rem 2rem;
  padding: 2rem 2rem;
  width: 15%;
  border-radius: 1.5rem;
  border-bottom: solid #8bedff 1.5rem;
  :hover {
    border-bottom: solid #096879 1.5rem;
    transform: translateY(0rem);
  }
`;
