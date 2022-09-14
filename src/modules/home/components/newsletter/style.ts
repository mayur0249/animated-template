import styled from "styled-components";
import BgImage from "../../../../assets/icons/bg_.jpg";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  background-image: url(${BgImage});
  opacity: 0.7;
  background-size: cover;
  background-attachment: fixed;
  height: 70vh;
  padding: 15px;
  display: grid;
  place-items: center;
  padding: 15px;
`;

export const GridContainer = styled.div`
  max-width: 513px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 70px;
  place-items: center;
`;

export const MainHeading = styled.h2`
  margin: 0;
  font-size: 34px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  color: ${colors.white};
  line-height: 1.125;
  @media (min-width: ${screenSizes.L}px) {
    font-size: 40px;
  }
`;

export const SubscribeDiv = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.black2};
  gap: 5px;
  border-radius: 50px;
`;

export const InputDiv = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 18px 20px;
  line-height: 1.2;
  font-size: 16px;
  color: ${colors.darkGray};
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  border: none;
  ::placeholder {
    color: ${colors.darkGray};
    font-size: 16px;
  }
  :focus {
    outline: none;
  }
`;
