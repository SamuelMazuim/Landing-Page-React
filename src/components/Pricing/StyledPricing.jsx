import styled from 'styled-components';
import { StyledCardTitle } from '../SixCards/StyledSixCards';
import { GoCheck } from 'react-icons/go';
import { StyledComment } from '../Comments/StyledComments';

export const StyledPricingTitle = styled(StyledCardTitle)`
  font-size: 1.8rem;
  margin: 0.2rem 0rem 0.5rem 2rem;
`;

export const StyledPricingSubTitle = styled(StyledCardTitle)`
  font-size: 1rem;
  margin: 0rem 0rem 0.8rem 2rem;
  font-weight: 500;
`;
export const StyledCheck = styled(GoCheck)`
  font-size: 1.3rem;
  margin: 0rem 0.5rem 0rem 0rem;
  color: ${(props) => (!props.grey ? '#8bedff' : '#bdbdbd')};
`;
export const StyledBulletPointText = styled.p`
  font-size: 1.1rem;
`;
export const StyledPlanBox = styled(StyledComment)`
  padding: 3rem 2rem;
  width: 17%;
`;
