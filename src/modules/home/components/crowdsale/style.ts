import styled from "styled-components";
import BgImg from "../../../../assets/icons/sectoin_bg_1.png";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${BgImg});
  background-color: ${colors.gray3};
`;

export const CrowdSaleGridContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 30px;
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FreeDownloadDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: none / start;
  padding: 15px;
`;

export const SubHeading = styled.h5`
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${colors.lightestGrey};
  line-height: 1.4;
`;

export const MainHeading = styled.h2`
  margin: 0;
  font-size: 35px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  color: ${colors.gray};
  line-height: 1.125;
`;

export const Details = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.lightestGrey};
`;

export const DashBoardDiv = styled.div`
  width: 100%;
  height: 100%;
  align-self: end;
  @media (min-width: ${screenSizes.L}px) {
    :nth-child(2) {
      order: -1;
    }
    img {
      height: 80%;
      object-fit: fill;
    }
    display: flex;
    align-items: flex-end;
  }
`;
