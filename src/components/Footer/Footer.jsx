import React from 'react';
import { StyledIcon, StyledLink, HalfWrapper, IconsWrapper, FooterWrapper } from './StyledFooter';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
export const Footer = (props) => {
  return (
    <FooterWrapper>
      <HalfWrapper>
        <IconsWrapper>
          <StyledLink to={'/cards'}>About</StyledLink>
          <StyledIcon />
          <StyledLink to={'/news'}>Contact</StyledLink>
          <StyledIcon />
          <StyledLink to={'/login'}>Terms of use</StyledLink>
          <StyledIcon />
          <StyledLink to={'/landing'}>Privacy Policy</StyledLink>
        </IconsWrapper>
        <p style={{ color: 'grey' }}>Your Website 2022. All Rights Reserved.</p>
      </HalfWrapper>
      <HalfWrapper style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <BsFacebook style={{ cursor: 'pointer', fontSize: '3rem', color: '#0b011f' }} />
        <BsTwitter
          style={{ cursor: 'pointer', fontSize: '3rem', margin: '0rem 2rem', color: '#0b011f' }}
        />
        <BsInstagram style={{ cursor: 'pointer', fontSize: '3rem', color: '#0b011f' }} />
      </HalfWrapper>
    </FooterWrapper>
  );
};
