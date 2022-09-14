import styled from "styled-components";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  height: 100%;
  background: ${colors.white};
  padding: 15px;
  @media (min-width: ${screenSizes.L}px) {
    height: 100vh;
  }
  display: grid;
  place-items: center;
`;

export const GridContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  place-items: center;
  text-align: center;
`;

export const SubHeading = styled.h5`
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${colors.lightestGrey};
  line-height: 1.4;
`;

export const MainHeading = styled.h2`
  font-size: 35px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  color: ${colors.gray};
  line-height: 1.125;
`;

export const InfoGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 60px;
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SingleCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  place-items: center;
`;

export const CardHeading = styled.h3`
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
  color: ${colors.gray};
  transition: color 0.3s ease-in-out;
`;

export const CardDetails = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.lightestGrey};
`;
