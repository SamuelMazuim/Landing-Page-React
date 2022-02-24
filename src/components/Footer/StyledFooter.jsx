import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CgPokemon } from 'react-icons/cg';
export const StyledLink = styled(Link)`
  color: #0b011f;
  text-decoration: none;
  font-weight: bolder;
  cursor: pointer;
`;
export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
export const HalfWrapper = styled.div`
  width: 50%;
  padding: 7rem;
`;
export const FooterWrapper = styled.div`
  display: flex;
  padding: 0rem 6rem;
`;

export const StyledIcon = styled(CgPokemon)({
  margin: '0.25rem 0.7rem 0rem',
  fontSize: '0.6rem',
  color: 'black',
});
