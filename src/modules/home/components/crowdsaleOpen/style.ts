import styled, { keyframes } from "styled-components";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  /* width: 100%; */
  height: 100vh;
  background: ${colors.white};
  padding: 15px;
  display: grid;
  place-items: center;
`;

export const CrowdSaleOpenGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 70px;
  place-items: center;
`;

export const MainHeading = styled.h2`
  margin: 0;
  font-size: 35px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  color: ${colors.gray};
  line-height: 1.125;
`;

export const LoaderContainer = styled.div<any>`
  max-width: 970px;
  width: 100%;
  height: 50px;
  background: ${colors.gray4};
  border-radius: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  margin-top: ${(props) => props.marginTop};

  @media (min-width: ${screenSizes.L}px) {
    margin-top: 70px;
  }
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
  background-size: 65px 65px;
`;

export const LoaderContent = styled.strong`
  margin: 0;
  font-size: 16px;
  color: ${colors.gray};
  font-weight: bolder;
  padding: 2px 20px;
`;

export const PeopleNumber = styled.strong`
  position: absolute;
  bottom: 100%;
  left: 5%;
  transform: translateX(-40%);
  margin-bottom: 10px;
  color: ${colors.gray};
  font-size: 20px;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 66px;
  background: ${colors.lightGrey};
  position: absolute;
  left: 5%;
  /* top: 20px; */
`;

export const PeopleNumber1 = styled.strong`
  position: absolute;
  bottom: 100%;
  left: 20%;
  transform: translateX(-40%);
  margin-bottom: 10px;
  color: ${colors.gray};
  font-size: 20px;
`;

export const VerticalLine1 = styled.div`
  width: 1px;
  height: 66px;
  background: ${colors.lightGrey};
  position: absolute;
  left: 20%;
`;

export const PeopleNumber2 = styled.strong`
  position: absolute;
  bottom: 100%;
  left: 35%;
  transform: translateX(-40%);
  margin-bottom: 10px;
  color: ${colors.gray};
  font-size: 20px;
`;

export const VerticalLine2 = styled.div`
  width: 1px;
  height: 66px;
  background: ${colors.lightGrey};
  position: absolute;
  left: 35%;
`;
export const PeopleNumber3 = styled.strong`
  position: absolute;
  bottom: 100%;
  left: 74.5%;
  transform: translateX(-40%);
  margin-bottom: 10px;
  color: ${colors.gray};
  font-size: 20px;
`;

export const VerticalLine3 = styled.div`
  width: 1px;
  height: 66px;
  background: ${colors.lightGrey};
  position: absolute;
  left: 74.5%;
`;

export const TokenDivContainer = styled.div`
  max-width: 970px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-direction: column;
  @media (min-width: ${screenSizes.L}px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TokenInfoDetailContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 45px;
`;

export const TokenDetailContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

export const TokenInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

export const TokenDetail = styled.span`
  font-size: 25px;
  font-weight: 700;
  line-height: 1;
  color: ${colors.gray};
`;

export const TokenSubDetail = styled.span`
  line-height: 1;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.gray5};
`;

export const OnButtonDiv = styled.div`
  position: absolute;
  top: 2px;
  left: 3px;
  right: 2px;
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
