import React from 'react';
import { GeneralWrapper } from '../General-Wrapper/GeneralWrapper';
import { StyledCentralizeWrapper, StyledH2 } from '../Title/StyledTitle';
import {
  StyledComment,
  StyledHorizontalWrapper,
  StyledVerticalWrapper,
} from '../Comments/StyledComments';
import {
  StyledBulletPointText,
  StyledCheck,
  StyledPlanBox,
  StyledPricingSubTitle,
  StyledPricingTitle,
} from './StyledPricing';

export const Pricing = (props) => {
  return (
    <>
      <div
        style={{
          background: 'radial-gradient(at 0% 0%, #41acb9, #0b011f, #0b011f)',
          paddingBottom: '5rem',
        }}
      >
        <GeneralWrapper>
          <StyledH2
            style={{
              margin: '6rem  0rem 0rem 12rem',
              width: '40%',
              fontSize: '2rem',
              color: 'white',
            }}
          >
            O plano certo para você
          </StyledH2>
        </GeneralWrapper>
        <StyledCentralizeWrapper>
          <StyledPlanBox style={{ paddingBottom: '2.5rem' }}>
            <StyledPricingTitle>Básico</StyledPricingTitle>
            <StyledPricingSubTitle>Ideal para iniciantes</StyledPricingSubTitle>
            <StyledVerticalWrapper>
              <BulletPoint>Aulas ao vivo todo dia</BulletPoint>
              <BulletPoint>Acesso a aulas gravadas</BulletPoint>
              <BulletPoint>Hub social no discord</BulletPoint>
              <BulletPoint>Banco de exercícios</BulletPoint>
              <BulletPoint>Biblioteca de documentações</BulletPoint>
              <BulletPoint>Aulas individuais</BulletPoint>
              <BulletPoint>Suporte ao vivo 24horas</BulletPoint>
              <Price>R$ 700,00</Price>
            </StyledVerticalWrapper>
          </StyledPlanBox>
        </StyledCentralizeWrapper>
      </div>
    </>
  );
};

const BulletPoint = (props) => {
  return (
    <StyledHorizontalWrapper style={{ margin: '0.8rem 0rem 0rem 0rem' }}>
      <StyledCheck grey={props.grey} />
      <StyledBulletPointText>{props.children}</StyledBulletPointText>
    </StyledHorizontalWrapper>
  );
};
const Price = (props) => {
  return (
    <StyledHorizontalWrapper style={{ margin: '2rem 0rem 0rem 0rem' }}>
      <StyledBulletPointText>{props.price}</StyledBulletPointText>
      <StyledBulletPointText>{props.children}</StyledBulletPointText>
    </StyledHorizontalWrapper>
  );
};
