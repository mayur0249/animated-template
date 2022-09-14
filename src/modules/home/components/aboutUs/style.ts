import styled from "styled-components";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  height: 100%;
  background: ${colors.white};
  display: grid;
  place-items: center;
  padding: 40px 15px;
  @media (min-width: ${screenSizes.L}px) {
    height: 100%;
  }
`;

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  place-items: center;
`;

export const SlickDiv = styled.div`
  max-width: 1200px;
  min-height: 521px;
  width: 100%;
  overflow: hidden;
  outline: none;
  width: 100%;
  height: 100%;
  .slick-dots {
    bottom: -84px;
    li button:before {
      color: ${colors.gray12};
    }
  }
  .slick-slider {
  }
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

export const AllCardsGridContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  place-items: center;
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SingleCardGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  place-items: center;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardDetail = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${colors.lightestGrey};
  line-height: 1.5;
  margin: 0;
  text-align: center;
`;

export const CardProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  place-items: center;
`;

export const ProfileHeading = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: ${colors.gray};
  margin: 0;
`;

export const ProfileSubHeading = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: ${colors.lightestGrey};
  margin: 0;
`;
