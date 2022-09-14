import styled from "styled-components";
import { colors, screenSizes } from "../../../../styles/theme";
import Slider from "react-slick";

export const Container = styled.div`
  height: 100%;
  background: ${colors.gray10};
  display: grid;
  /* place-items: center; */
  padding: 60px 15px;
  @media (min-width: ${screenSizes.L}px) {
    padding: 60px 40px;
  }
`;

export const PageGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  place-items: center;
`;

export const MainHeading = styled.h2`
  margin: 0;
  font-size: 35px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  color: ${colors.gray};
  line-height: 1.125;
  text-align: center;
  @media (min-width: ${screenSizes.L}px) {
    font-size: 40px;
  }
`;

export const CardsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  place-items: center;
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
  }
`;

export const SlickDiv = styled.div`
  overflow: hidden;
  outline: none;
  /* border: 2px solid red; */
  width: 100%;
  height: 100%;
  .slick-dots {
    bottom: 10px;
    li button:before {
      color: ${colors.gray12};
    }
  }
  /* .slick-slide {
    margin: 0 10px;
  } */
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: start;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  /* padding: 0px 15px; */
  :hover {
    /* box-shadow: 0 20px 18px 0; */
    /* -webkit-box-shadow: 1px 12px 8px 7px rgba(0, 0, 0, 0.32);
    box-shadow: 1px 12px 8px 7px rgba(0, 0, 0, 0.32); */
    -webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
    img {
      transform: scale(1.2);
    }
  }
`;

export const CardUpperPart = styled.div`
  width: 100%;
  /* height: 274px; */
  overflow: hidden;
  img {
    transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      opacity 0.2s, -webkit-transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

export const CardLowerPart = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  place-items: start;
  padding: 30px 15px;
  background: ${colors.white};
`;

export const CardMiniHeading = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  color: ${colors.emraldGreen2};
`;

export const CardMainHeading = styled.h3`
  margin: 0;
  font-size: 25px;
  color: ${colors.gray};
  line-height: 1.2;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  :hover {
    color: ${colors.emraldGreen2};
  }
`;

export const CardDetail = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.lightestGrey};
`;

export const CardMonthDetail = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  text-transform: capitalize;
  color: ${colors.black1};
`;
