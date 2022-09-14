import styled, { keyframes } from "styled-components";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  height: 100%;
  background: ${colors.white};
  padding: 70px 15px;
  @media (min-width: ${screenSizes.L}px) {
    padding: 140px 0px;
  }
`;

export const VideoPageDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 20px;
`;

const slideUp = keyframes`
  from {
    transform: translateY(500px);
  }

  to {
    transform: translateY(0);
  }
`;

export const VideoPageUpperContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 20px;
  transition: all 1s ease-in-out;
  animation: ${slideUp} 0.5s;
`;

export const MiniHeading = styled.h5`
  margin: 0;
  font-size: 16px;
  color: ${colors.lightestGrey};
  font-weight: 300;
  text-transform: uppercase;
`;

export const MainHeading = styled.h2`
  margin: 0;
  color: ${colors.fadedBlack};
  font-size: 40px;
  line-height: 1.125;
  font-weight: 700;
  text-align: center;
  max-width: 920px;
`;

export const MainHeading2 = styled.h2`
  margin: 0;
  color: ${colors.fadedBlack};
  font-size: 40px;
  line-height: 1.125;
  font-weight: 700;
  text-align: center;
`;

export const MainDetail = styled.p`
  max-width: 920px;
  width: 100%;
  font-size: 18px;
  color: ${colors.lightestGrey};
  font-weight: 400;
  text-align: justify;
  @media (min-width: ${screenSizes.L}px) {
    width: 100%;
  }
`;

export const ImgVid = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideUp} 0.5s;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  @media (min-width: ${screenSizes.L}px) {
    height: 612px;
  }
`;

export const BgUpperImage = styled.img`
  position: absolute;
  width: 100%;
  height: 80%;
  top: 10%;
  bottom: 10%;
  left: 0;
  right: 0;
  @media (min-width: ${screenSizes.L}px) {
    /* height: 612px; */
  }
`;

export const VideoPlayDivCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
`;

export const VideoPlayDiv = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${colors.lighterPink};
  cursor: pointer;
  :before {
    content: "";
    display: block;
    position: absolute;
    /* top: 0;
    right: 0;
    bottom: 0; */
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    margin: auto;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 13px 0 13px 12px;
    border-color: transparent transparent transparent #fff;
    @media (min-width: ${screenSizes.L}px) {
      top: 34%;
    }
  }
  /* :hover {
    transform: scale(1.02);
  } */
  @media (min-width: ${screenSizes.L}px) {
    width: 100px;
    height: 100px;
  }
`;

export const VideoText = styled.span`
  font-size: 20px;
  color: ${colors.white};
  /* transform: translateX(-52%); */
`;
