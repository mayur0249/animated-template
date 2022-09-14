import styled from "styled-components";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  background: ${colors.white};
  box-shadow: inset 0 1px ${colors.gray4};
  padding: 70px 15px;
  @media (min-width: ${screenSizes.L}px) {
    height: 100vh;
    padding: 0px 15px;
  }
`;

export const GridContainer = styled.div`
  max-width: 1180px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 20px;
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
  @media (min-width: ${screenSizes.L}px) {
    font-size: 40px;
  }
`;

export const GridCardContainer = styled.div<any>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  place-items: center;
  margin-top: ${(props) => props.marginTop};
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 20px;
`;

export const ImageDiv = styled.div<any>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialIcon = styled.img<any>`
  position: relative;
  bottom: 69px;
  right: 42px;
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
`;

export const SocialLink = styled.a<any>``;

export const CardHeader = styled.h5`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: ${colors.gray};
`;

export const CardDetails = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  color: ${colors.lightestGrey};
  text-align: center;
`;
