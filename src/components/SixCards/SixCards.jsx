import React from 'react';
import { GeneralWrapper } from '../General-Wrapper/GeneralWrapper';
import { StyledCentralizeWrapper, StyledH2 } from '../Title/StyledTitle';
import { StyledCard, StyledCardTitle, StyledP } from './StyledSixCards';
import { DiCode } from 'react-icons/di';

export const SixCards = (props) => {
  return (
    <>
      <div style={{ backgroundColor: 'rgb(248,252,252)', padding: '2rem 0rem 8rem 0rem' }}>
        <GeneralWrapper>
          <StyledH2
            style={{
              margin: '5rem  0rem 0rem 12rem',
              width: '40%',
              fontSize: '2.2rem',
            }}
          >
            Data science Data science Data science Data science Data science Data science Data
            science
          </StyledH2>
        </GeneralWrapper>
        <StyledCentralizeWrapper>
          <StyledCard>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
            <StyledP>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed
              in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted
              his head a little he could see his brown belly, slightly domed and divided by arches
              into stiff sections.
            </StyledP>
          </StyledCard>
          <StyledCard>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
            <StyledP>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed
              in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted
              his head a little he could see his brown belly, slightly domed and divided by arches
              into stiff sections.
            </StyledP>
          </StyledCard>
          <StyledCard>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
            <StyledP>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed
              in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted
              his head a little he could see his brown belly, slightly domed and divided by arches
              into stiff sections.
            </StyledP>
          </StyledCard>
        </StyledCentralizeWrapper>

        <StyledCentralizeWrapper>
          <StyledCard>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
            <StyledP>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed
              in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted
              his head a little he could see his brown belly, slightly domed and divided by arches
              into stiff sections.
            </StyledP>
          </StyledCard>
          <StyledCard>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
            <StyledP>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed
              in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted
              his head a little he could see his brown belly, slightly domed and divided by arches
              into stiff sections.
            </StyledP>
          </StyledCard>
          <StyledCard>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '10rem',
              }}
            />
            <StyledCardTitle>Data Science</StyledCardTitle>
            <StyledP>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed
              in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted
              his head a little he could see his brown belly, slightly domed and divided by arches
              into stiff sections.
            </StyledP>
          </StyledCard>
        </StyledCentralizeWrapper>
      </div>
    </>
  );
};
