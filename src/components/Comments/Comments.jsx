import React from 'react';
import { GeneralWrapper } from '../General-Wrapper/GeneralWrapper';
import { StyledCentralizeWrapper, StyledH2 } from '../Title/StyledTitle';
import { StyledCard, StyledCardTitle, StyledP } from './StyledComments';
import { DiCode } from 'react-icons/di';

export const Comments = (props) => {
  return (
    <>
      <div style={{ backgroundColor: 'rgb(248,252,252)' }}>
        <GeneralWrapper>
          <StyledH2
            style={{
              margin: '5rem  0rem 0rem 10.5rem',
              width: '40%',
            }}
          >
            Veja o depoimento de alguns de nossos alunos:
          </StyledH2>
        </GeneralWrapper>
        <StyledCentralizeWrapper>
          <StyledCard>
            <img src='' alt='Ash' />
            <StyledCardTitle>Ash Katchum</StyledCardTitle>
            <StyledP>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed
              in his bed into a horrible vermin.
            </StyledP>
          </StyledCard>
          <StyledCard>
            <img src='' alt='Thomas' />
            <StyledCardTitle>Thomas Anderson</StyledCardTitle>
            <StyledP>
              He lay on his armour-like back, and if he lifted his head a little he could see his
              brown belly, slightly domed and divided by arches into stiff sections.
            </StyledP>
          </StyledCard>
          <StyledCard>
            <img src='' alt='Allejo' />
            <StyledCardTitle>Allejo</StyledCardTitle>
            <StyledP>
              "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room
              although a little too small, lay peacefully between its four familiar walls.
            </StyledP>
          </StyledCard>
        </StyledCentralizeWrapper>
      </div>
    </>
  );
};
