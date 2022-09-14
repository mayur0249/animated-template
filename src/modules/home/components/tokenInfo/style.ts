import styled from "styled-components";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  /* width: 100%; */
  height: 100%;
  background: ${colors.white};
  padding: 15px;
  display: grid;
  place-items: center;
  @media (min-width: ${screenSizes.L}px) {
    height: 100vh;
  }
`;

export const TokenInfoGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  place-items: center;
`;

export const SubHeading = styled.h5`
  margin: 0;
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${colors.lightestGrey};
  line-height: 1.4;
  text-align: center;
`;

export const MainHeading = styled.h2`
  margin: 0;
  font-size: 35px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  color: ${colors.gray};
  line-height: 1.125;
`;

export const InfoGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const TwoGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 25px;
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PersonInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-gap: 25px; */
`;

export const DetailGrid = styled.div<any>`
  max-width: 582.26px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-self: start;
  place-items: start;
  margin-top: ${(props) => props.marginTop};
`;

export const SingleDetailContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const SingleDetailName = styled.h5`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.gray};
  margin: 15px;
`;

export const MainHeading2 = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  color: ${colors.gray};
  line-height: 1.125;
`;

export const SubHeading2 = styled.h5`
  font-size: 18px;
  font-weight: 400;
  color: ${colors.lightestGrey};
  line-height: 1.4;
`;

export const OnButtonDiv = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  right: 3px;
  bottom: 3px;
  background: ${colors.white};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s ease-in-out;
  :hover {
    background: ${colors.emraldGreen2};
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`;
