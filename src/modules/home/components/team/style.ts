import styled from "styled-components";
import BgImage from "../../../../assets/icons/bg_4.jpg";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  background-image: url(${BgImage});
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  padding: 15px;
  display: grid;
  place-items: center;
  padding: 70px 15px;
  @media (min-width: ${screenSizes.L}px) {
    height: 100vh;
    padding: 0px 15px;
  }
`;

export const GridTeamContainer = styled.div<any>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  place-items: center;
`;

export const SubHeading = styled.h5`
  margin: 0;
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${colors.white};
  line-height: 1.4;
  text-align: center;
`;

export const MainHeading = styled.h2`
  margin: 0;
  font-size: 35px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  color: ${colors.white};
  line-height: 1.125;
  @media (min-width: ${screenSizes.L}px) {
    font-size: 40px;
  }
`;

export const GridTeamInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 70px;
  }
`;

export const TeamInfoDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  place-items: center;
`;

export const ImageDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialIcon = styled.img<any>`
  position: relative;
  bottom: 33px;
  right: 20px;
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
`;

export const TeamInfoName = styled.h5`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: ${colors.white};
  transition: color 0.3s ease-in-out;
  text-align: center;
  margin-top: 5px;
`;

export const TeamInfoPost = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  font-weight: 400;
  color: ${colors.gray7};
  text-align: center;
`;
