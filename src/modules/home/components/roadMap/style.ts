import styled from "styled-components";
import BgImage1 from "../../../../assets/icons/bg_1.jpg";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  background-image: url(${BgImage1});
  background-size: cover;
  background-attachment: fixed;
  height: 80vh;
  padding: 15px;
  display: grid;
  place-content: center;
`;

export const RoadMapContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 20px;
`;

export const MiniHeading = styled.h5<any>`
  margin: 0;
  color: ${colors.white};
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
  text-transform: uppercase;
  margin-top: 70px;
  @media (min-width: ${screenSizes.L}px) {
    margin-top: 140px;
  }
`;

export const MainHeading = styled.h5`
  margin: 0;
  color: ${colors.white};
  font-size: 33px;
  font-weight: 700;
  line-height: 1.125;
`;

export const TimelineOuterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  overflow-y: hidden;
  display: -webkit-box;
  display: -moz-box;
  overflow: -moz-scrollbars-none;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: thin;
`;

export const TimelineDiv = styled.div`
  /* width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: -webkit-box;
  display: -moz-box;
  overflow: -moz-scrollbars-none;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: thin; */
  display: flex;
  align-items: center;
  margin-top: 50px;
  gap: 18px;
`;

export const SingleTimelineDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  :nth-child(5) {
    .point {
      width: 18px;
      height: 18px;
      :before {
        content: "";
        top: 50%;
        left: 31px;
        border-top: 2px dashed ${colors.gray2};
        border-bottom: 2px dashed ${colors.gray2};
        background: none;
      }
    }
    .point > div {
      width: 14px;
      height: 14px;
    }
  }
  :nth-child(6) {
    .point {
      border-color: ${colors.gray1};
      :before {
        content: "";
        top: 50%;
        left: 27px;
        border-top: 2px dashed ${colors.gray2};
        border-bottom: 2px dashed ${colors.gray2};
        background: none;
      }
    }
    .point > div {
      display: none;
    }
  }
  :nth-child(7) {
    .point {
      border-color: ${colors.gray1};
      :before {
        display: none;
      }
    }
    .point > div {
      display: none;
    }
  }
`;

export const MonthYearDiv = styled.div`
  width: 112px;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.white};
  line-height: 1;
`;

export const PointDiv = styled.div`
  width: 12px;
  height: 12px;
  background: transparent;
  padding: 3px;
  border-radius: 50%;
  border: 2px solid ${colors.gray1};
  border-color: ${colors.emraldGreen2};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  :before {
    content: "";
    height: 2px;
    width: 95px;
    background: ${colors.emraldGreen2};
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
  }
  :after {
    content: "";
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 45px;
    background-color: ${colors.lightGray1};
  }
`;

export const ConnectLine = styled.span`
  height: 2px;
  width: 95px;
  background: ${colors.emraldGreen2};
`;

export const InnerPoint = styled.div`
  width: 10px;
  height: 10px;
  background: ${colors.white};
  border-radius: inherit;
`;

export const Topic = styled.h5<any>`
  margin: 0;
  margin-top: 50px;
  font-size: 20px;
  font-weight: 400;
  color: ${colors.white};
  margin-top: ${(props) => props.marginTop};
  text-align: center;
`;

export const DummyDiv = styled.div`
  height: 100vh;
`;
