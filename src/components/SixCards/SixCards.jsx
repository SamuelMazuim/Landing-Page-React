import React from 'react';
import { GeneralWrapper } from '../General-Wrapper/GeneralWrapper';
import { StyledCentralizeWrapper, StyledH2 } from '../Title/StyledTitle';
import { StyledCard, StyledCardTitle, StyledP } from './StyledSixCards';
import { DiCode } from 'react-icons/di';
import {GoLightBulb, GoDeviceMobile, GoDeviceDesktop, GoGitMerge, GoRepo} from 'react-icons/go';

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
            Metodologia de Ensino
          </StyledH2>
        </GeneralWrapper>
        <StyledCentralizeWrapper>
          <StyledCard>
            <DiCode
              style={{
                marginTop: '-2rem',
                fontSize: '8rem',
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
            <GoLightBulb
              style={{
                fontSize: '5rem',
              }}
            />
            <StyledCardTitle>Ideas</StyledCardTitle>
            <StyledP>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed
              in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted
              his head a little he could see his brown belly, slightly domed and divided by arches
              into stiff sections.
            </StyledP>
          </StyledCard>
          <StyledCard>
            <GoDeviceDesktop
              style={{
                marginLeft:'1rem',
                fontSize: '5rem',
              }}
            />
            <StyledCardTitle>Desktop</StyledCardTitle>
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
            <GoDeviceMobile
              style={{
                
                fontSize: '5rem',
              }}
            />
            <StyledCardTitle>Mobile</StyledCardTitle>
            <StyledP>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed
              in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted
              his head a little he could see his brown belly, slightly domed and divided by arches
              into stiff sections.
            </StyledP>
          </StyledCard>
          <StyledCard>
            <GoRepo
              style={{
                fontSize: '5rem',
              }}
            />
            <StyledCardTitle>Library</StyledCardTitle>
            <StyledP>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed
              in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted
              his head a little he could see his brown belly, slightly domed and divided by arches
              into stiff sections.
            </StyledP>
          </StyledCard>
          <StyledCard>
            <GoGitMerge
              style={{
                
                fontSize: '5rem',
              }}
            />
            <StyledCardTitle>Share</StyledCardTitle>
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
