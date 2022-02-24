import styled from 'styled-components';
import { StyledCard } from '../SixCards/StyledSixCards';

export const StyledImg = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  margin-right: -1rem;
  background-image: ${(props) => props.bg};
  background-size: cover;
  background-position: ${(props) => props.pos}; ;
`;

export const StyledVerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem;
`;
export const StyledHorizontalWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledComment = styled(StyledCard)`
  transition: 0s;
  :hover {
    transform: translateY(0rem);
  }
`;
export const StyledLine = styled.span`
  border-bottom: solid 0.3rem #8bedff;
  margin: 0.3rem 0rem 0.4rem 1rem;
  width: 3rem;
`;
export const StyledCommentP = styled.p`
  width: 90%;
  margin: 1rem 1rem 1rem 1rem;
  text-align: justify;
  font-size: 1rem;
`;
export const StyledProf = styled.p`
  margin: 0rem 1rem 1rem 1rem;
  text-align: left;
  color: grey;
`;
