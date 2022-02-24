import React from 'react';
import { GeneralWrapper } from '../General-Wrapper/GeneralWrapper';
import { StyledCentralizeWrapper, StyledH1, StyledH2 } from '../Title/StyledTitle';
import { StyledTech, StyledCardTitle, StyledP, StyledSpan } from './StyledTechnologies';
import { DiCode } from 'react-icons/di';

export const Technologies = (props) => {
  return (
    <>
      <div
        style={{
          background: 'radial-gradient(at 0% 0%, #41acb9, #0b011f, #0b011f)',
          padding: '3rem 0rem 6rem 0rem',
        }}
      >
        <StyledCentralizeWrapper style={{ flexDirection: 'column' }}>
          <StyledH1
            style={{
              color: 'white',
              margin: '5rem  0rem 0rem 0rem',
              width: '55%',
              textAlign: 'center',
            }}
          >
            Escolha seu curso <StyledSpan>por tecnologia</StyledSpan>
          </StyledH1>
          <StyledH2
            style={{
              color: 'white',
              margin: '3rem  0rem 2rem 0rem',
              width: '55%',
              textAlign: 'center',
            }}
          >
            Data science Data science Data science Data science Data science Data science Data
            science
          </StyledH2>
        </StyledCentralizeWrapper>
        <StyledCentralizeWrapper>
          <StyledTech>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
          </StyledTech>
          <StyledTech>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
          </StyledTech>
          <StyledTech>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
          </StyledTech>
          <StyledTech>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
          </StyledTech>
        </StyledCentralizeWrapper>

        <StyledCentralizeWrapper>
          <StyledTech>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
          </StyledTech>
          <StyledTech>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
          </StyledTech>
          <StyledTech>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
          </StyledTech>
          <StyledTech>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
          </StyledTech>
        </StyledCentralizeWrapper>
      </div>
    </>
  );
};
