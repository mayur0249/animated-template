import styled, { keyframes } from "styled-components";
import BgImage from "../../../../assets/icons/bg.jpg";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  background-image: url(${BgImage});
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  padding: 15px;
  display: grid;
  place-items: center;
  @media (min-width: ${screenSizes.L}px) {
    height: 100vh;
    padding: 30px 170px;
  }
`;

export const LandingDiv = styled.div`
  max-width: 1200px;
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: space-between; */
  display: grid;
  grid-template-columns: 1fr;
  padding: 30px 0px;
  grid-gap: 25px;

  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 8fr 4fr;
    justify-items: center;
  }
`;

export const LandingLeftDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const LandingLeftHeading = styled.h1`
  color: ${colors.white};
  font-size: 45px;
  text-align: left;
  margin: 0px;
`;

export const LandingLeftSubHeading = styled.p`
  color: ${colors.white};
  font-size: 20px;
  font-weight: 400px;
  margin: 0px;
`;

export const LandingLeftButtonDiv = styled.div<any>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: ${(props) => props.marginTop};
  @media (min-width: ${screenSizes.L}px) {
    flex-direction: row;
  }
`;

export const VideoPlayDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  :hover {
    .play {
      background: ${colors.white};
    }
    i:before {
      border-color: transparent transparent transparent #000;
    }
  }
`;

export const PlayDiv = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  background: transparent;
  border-radius: 50%;
  border: 2px solid ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  i:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 3px;
    margin: auto;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 0 6px 10px;
    border-color: transparent transparent transparent #fff;
    -webkit-transition: border-color 0.3s ease-in-out;
    -o-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
  }
`;

export const VideoPlayText = styled.p`
  margin: 0;
  color: ${colors.white};
  font-size: 18px;
`;

export const LandingRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: transparent;
  align-items: center;
  color: ${colors.white};
  background: ${colors.blueTransparent};
  padding: 20px;
`;

export const LandingRightHeading = styled.h3`
  color: ${colors.white};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
`;

export const LandingRightSubHeading = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${colors.white};
  margin: 0;
`;

export const LandingRightDescription = styled.p`
  font-size: 15px;
  color: ${colors.white};
  margin: 0;
`;

export const Div1 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(BgImage);
  background-size: cover;
  background-attachment: fixed;
  position: relative;
`;

export const LoaderContainer = styled.div<any>`
  width: 100%;
  height: 20px;
  background: ${colors.white};
  border-radius: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  margin-top: ${(props) => props.marginTop};
`;

const move = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 50px 50px;
  }
`;

export const ProgressBar = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.white};
  width: 40%;
  height: 100%;
  animation: 3s linear infinite ${move};
  background: linear-gradient(
    135deg,
    #0fbb64 25%,
    #0fc569 25%,
    #0fc569 50%,
    #0fbb64 50%,
    #0fbb64 75%,
    #0fc569 75%,
    #0fc569
  );
  border-radius: 30px;
  background-size: 20px 20px;
`;

export const LoaderContent = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${colors.gray};
  font-weight: bolder;
  padding: 2px 20px;
`;

export const LoaderBelowContent = styled.div<any>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => props.marginTop};
  padding: 0px 20px;
`;

export const LoaderBelowContentStart = styled.span`
  font-size: 12px;
  color: ${colors.lightestGray};
  text-transform: uppercase;
`;

export const LoaderBelowContentEnd = styled.span`
  font-size: 16px;
  color: ${colors.white};
  line-height: 1.2;
  font-weight: 400;
`;

export const PeopleNumber = styled.strong`
  position: absolute;
  bottom: 35px;
  left: 15px;
  color: ${colors.white};
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 36px;
  background: ${colors.lightGrey};
  position: absolute;
  left: 10%;
  /* top: 20px; */
`;

const marquee = keyframes`
  from { left: 0; }

  to { left: -100%; }
`;

export const CryptoMovingDiv = styled.div`
  position: absolute;
  width: 100%;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 30px;
  background: ${colors.darkerGray};
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: ${marquee} 20s linear infinite;
  overflow: hidden;
  transition: all 0.2s ease-out;
`;

export const SingleCryptoDiv = styled.div`
  font-size: 18px;
  font-weight: 100px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CryptoName = styled.span`
  color: ${colors.white};
`;

export const CryptoValue = styled.span`
  color: ${colors.white};
`;

export const CryptoPriceChange = styled.span`
  color: ${colors.red};
`;
