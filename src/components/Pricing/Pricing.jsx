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
import { StyledGeneralWrapper } from '../General-Wrapper/StyledGeneralWrapper';
import { StyledCollumnWrapper } from '../Title/StyledTitle';
import { StyledSpan } from '../Technologies/StyledTechnologies';

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
          <StyledCollumnWrapper style={{ margin: '0rem' }}>
            <StyledCentralizeWrapper style={{ padding: '0rem' }}>
              <StyledH2
                style={{
                  textAlign: 'center',
                  margin: '5rem 0rem 3rem 0rem',
                  width: '40%',
                  fontSize: '2.5rem',
                  color: 'white',
                }}
              >
                O plano certo <StyledSpan> para você </StyledSpan>
              </StyledH2>
            </StyledCentralizeWrapper>
            <StyledCentralizeWrapper>
              <StyledCentralizeWrapper>
                <PriceCard title='Basic' description='Ideal for begginers' price='$ 700,00' />
                <PriceCard title='Standard' description='Complete version' price='$ 1200,00' />
                <PriceCard
                  title='Advanced'
                  description='Standart + Special features'
                  price='$ 1500,00'
                />
              </StyledCentralizeWrapper>
            </StyledCentralizeWrapper>
          </StyledCollumnWrapper>
        </GeneralWrapper>
      </div>
    </>
  );
};

const BulletPoint = (props) => {
  return (
    <StyledHorizontalWrapper style={{ margin: '0.8rem 1rem 0rem 0rem' }}>
      <StyledCheck grey={props.grey} />
      <StyledBulletPointText>{props.children}</StyledBulletPointText>
    </StyledHorizontalWrapper>
  );
};
const Price = (props) => {
  return (
    <StyledHorizontalWrapper
      style={{
        margin: '2rem 0rem 0rem 0rem',
        justifyContent: 'center',
      }}
    >
      <StyledBulletPointText>{props.price}</StyledBulletPointText>
      <StyledBulletPointText>{props.children}</StyledBulletPointText>
    </StyledHorizontalWrapper>
  );
};

const PriceCard = (props) => {
  return (
    <StyledPlanBox style={{ paddingBottom: '2.5rem' }}>
      <StyledPricingTitle
        style={{
          textAlign: 'center',
          margin: '0rem',
          marginBottom: '0.5rem',
          padding: '0rem',
        }}
      >
        {props.title}
      </StyledPricingTitle>
      <StyledPricingSubTitle
        style={{
          textAlign: 'center',
          margin: '0rem',
          padding: '0rem',
        }}
      >
        {props.description}
      </StyledPricingSubTitle>
      <StyledVerticalWrapper>
        <BulletPoint>Aulas ao vivo todo dia</BulletPoint>
        <BulletPoint>Acesso a aulas gravadas</BulletPoint>
        <BulletPoint>Hub social no discord</BulletPoint>
        <BulletPoint>Banco de exercícios</BulletPoint>
        <BulletPoint>Biblioteca de documentações</BulletPoint>
        <BulletPoint>Aulas individuais</BulletPoint>
        <BulletPoint>Suporte ao vivo 24horas</BulletPoint>
        <Price>{props.price}</Price>
      </StyledVerticalWrapper>
    </StyledPlanBox>
  );
};
