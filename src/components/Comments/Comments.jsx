import React from 'react';
import { GeneralWrapper } from '../General-Wrapper/GeneralWrapper';
import { StyledCentralizeWrapper, StyledH2 } from '../Title/StyledTitle';
import {
  StyledCard,
  StyledCardTitle,
  StyledComment,
  StyledCommentP,
  StyledHorizontalWrapper,
  StyledImg,
  StyledLine,
  StyledP,
  StyledProf,
  StyledVerticalWrapper,
} from './StyledComments';
import { DiCode } from 'react-icons/di';
import { StyledSpan } from '../Technologies/StyledTechnologies';

export const Comments = (props) => {
  return (
    <>
      <div style={{ backgroundColor: 'rgb(248,252,252)' }}>
        <GeneralWrapper>
          <StyledH2
            style={{
              margin: '8rem  0rem 0rem 12rem',
              width: '40%',
              fontSize: '2rem',
            }}
          >
            Veja o depoimento de
            <StyledH2
              style={{
                margin: '0.2rem  0rem 0rem 0rem',
                fontSize: '2rem',
              }}
            >
              alguns de <StyledSpan>nossos alunos:</StyledSpan>
            </StyledH2>
          </StyledH2>
        </GeneralWrapper>
        <StyledCentralizeWrapper>
          <StyledComment>
            <StyledHorizontalWrapper>
              <StyledImg bg='url(https://i.pinimg.com/736x/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd--ash-ketchum-pokemon.jpg)' />
              <StyledVerticalWrapper>
                <StyledCardTitle>Ash Katchum</StyledCardTitle>
                <StyledLine />
                <StyledProf>Mestre pokémon</StyledProf>
              </StyledVerticalWrapper>
            </StyledHorizontalWrapper>
            <StyledCommentP>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed
              in his bed into a horrible vermin.
            </StyledCommentP>
          </StyledComment>
          <StyledComment>
            <StyledHorizontalWrapper>
              <StyledImg
                style={{ width: '13rem' }}
                pos='-4.5rem'
                bg='url(https://rollingstone.uol.com.br/media/_versions/keanu_reeves_como_neo_em_matrix_divulgacao_widelg.jpg)'
              />
              <StyledVerticalWrapper>
                <StyledCardTitle>Thomas Anderson</StyledCardTitle>
                <StyledLine />
                <StyledProf>Programador</StyledProf>
              </StyledVerticalWrapper>
            </StyledHorizontalWrapper>
            <StyledCommentP>
              He lay on his armour-like back, and if he lifted his head a little he could see his
              brown belly, slightly domed and divided by arches into stiff sections.
            </StyledCommentP>
          </StyledComment>
          <StyledComment>
            <StyledHorizontalWrapper>
              <StyledImg
                pos='-2.2rem'
                bg='url(https://terceirotempo.uol.com.br/imagens/70/90/qfl_fto_17090.jpg)'
              />
              <StyledVerticalWrapper>
                <StyledCardTitle>Allejo</StyledCardTitle>
                <StyledLine />
                <StyledProf>Jogador de futebol</StyledProf>
              </StyledVerticalWrapper>
            </StyledHorizontalWrapper>
            <StyledCommentP>
              "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room
              although a little too small, lay peacefully between its four familiar walls.
            </StyledCommentP>
          </StyledComment>
        </StyledCentralizeWrapper>
      </div>
    </>
  );
};
