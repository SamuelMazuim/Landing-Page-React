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
export const StyledComment = styled.div`
  border-radius: 1rem;
  margin: 3rem 3rem 3rem 3rem;
  padding: 2rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 20%;
  min-height: 10rem;
  background-color: white;
  -webkit-box-shadow: 2px 2px 50px -45px #000000;
  box-shadow: 2px 2px 50px -45px #000000;
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
