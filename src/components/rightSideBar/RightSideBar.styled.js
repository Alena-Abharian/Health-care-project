import styled from 'styled-components';
import { device } from 'utils/device';
export const SideBarStyled = styled.div`

  @media ${device.tablet} {
    display: flex;
    gap: 60px;
  }

  @media ${device.desktop} {
    flex-direction: column;
    padding-left: 94px;
    //height: 100vh;
  }
`;

export const Summary = styled.div`
  margin-bottom: 40px;
`;

export const SummaryTitle = styled.p`
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 17px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #212121;
`;

export const SummarySubtitle = styled.p`
  width: 270px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

export const SummaryList = styled.ul`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  width: 288px;
  color: #9b9faa;
`;

export const SummaryListItem = styled.li`
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const SideBar = styled.div`
  //background-color: #f0f1f3;

  @media ${device.mobileOnly} {
    //padding:  15px 84px 15px 0;
    margin-top: 40px;
  }

  @media ${device.tabletOnly} {
    margin-top: 40px;
  }

  @media ${device.fabletOnly} {
    //padding: 10px 80px 80px 0;
    margin-top: 50px;
  }

  @media ${device.desktop} {
    width: 40%;
    padding: 10px 10px 10px 10px;
    margin-top: 100px;
    margin-bottom: 189px;
  }
`;
