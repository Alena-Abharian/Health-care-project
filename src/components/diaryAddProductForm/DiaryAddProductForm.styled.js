import styled from 'styled-components';
import ButtonIcon from 'components/common/buttonIcon';
import { InputStyled } from 'components/calculatorCaloriesForm/CalculatorCaloriesForm.styled';
import { device } from 'utils/device';

export const StyledProductForm = styled.form`
  width: 100%;
  padding-bottom: 60px;
  @media ${device.tablet} {
    display: flex;
    margin-bottom: 44px;
  }
`;

export const StyledNameWrapper = styled.div`
  @media ${device.mobileOnly} {
    margin-bottom: 30px;
    width: 100%;
  }

  @media ${device.tablet} {
    /* width: 240px; */
    margin-right: 20px;
  }
  @media ${device.desktop} {
    margin-right: 48px;
  }
`;

export const InputStyledNameProduct = styled(InputStyled)`
  @media ${device.tablet} {
    width: 240px;
  }
`;

export const StyledWeightWrapper = styled.div`
  @media ${device.mobileOnly} {
    width: 100%;
    margin-bottom: 60px;
  }

  @media ${device.tablet} {
    margin-right: 86px;
  }
  @media ${device.desktop} {
    margin-right: 60px;
  }
`;

export const InputStyledWeightProduct = styled(InputStyled)`
  /* label {
    @media ${device.tablet} {
      text-align: right;
    }
  } */

  @media ${device.mobileOnly} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 106px;
  }
`;

export const StyledOption = styled.div`
  position: absolute;
  bottom: 0px;
  height: 100px;
  width: 280px;
  overflow: scroll;
  background-color: #ffffff;
  padding: 15px 0;
  z-index: 100;
`;

export const StyledIcon = styled.img`
  width: ${p => `${p.theme.space[4] - 2}px`};
  height: ${p => `${p.theme.space[4] - 2}px`};
  transition: ${p => p.theme.animation.cubic};
  transition-property: transform;
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${p => `${p.theme.space[5] + 16}px`};
  min-height: ${p => `${p.theme.space[5] + 16}px`};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.button.primaryBackground};
  &:hover ${StyledIcon} {
    transform: scale(1.5);
  }
`;
