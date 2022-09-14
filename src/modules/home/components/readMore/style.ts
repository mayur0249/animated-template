import styled from "styled-components";
import BgImage from "../../../../assets/icons/bg_5.jpg";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  background-image: url(${BgImage});
  background-size: cover;
  background-attachment: fixed;
  height: 50vh;
  padding: 15px;
  display: grid;
  place-items: center;
`;

export const ReadMoreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  place-items: center;
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 1fr auto;
    grid-gap: 30px;
  }
`;

export const MainHeading = styled.h2`
  margin: 0;
  font-size: 35px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  color: ${colors.white};
  line-height: 1.125;
  text-align: center;
`;
