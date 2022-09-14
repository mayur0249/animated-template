import styled from "styled-components";
import BgImg from "../../../../assets/icons/sectoin_bg_2.png";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  height: 100%;
  background: url(${BgImg});
  background-color: ${colors.gray3};
  padding: 60px 15px;
  @media (min-width: ${screenSizes.L}px) {
    height: 50vh;
  }
  display: grid;
  place-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  place-items: center;
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 1fr auto;
  }
`;

export const GridUpperContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  place-items: start;
`;

export const SubHeading = styled.h5`
  margin: 0;
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${colors.lightestGrey};
  line-height: 1.4;
`;

export const MainHeading = styled.h2`
  max-width: 347px;
  width: 100%;
  margin: 0;
  font-size: 35px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  color: ${colors.gray};
  line-height: 1.125;
  @media (min-width: ${screenSizes.L}px) {
    font-size: 40px;
  }
`;

export const GridLowerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 30px;
  place-items: center;
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const PaperInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const NoteDetail = styled.span`
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: 700;
  color: ${colors.fadedBlack};
  text-align: center;
  transition: color 0.3s ease-in-out;
  @media (min-width: ${screenSizes.L}px) {
    width: 191px;
  }
`;
