import styled, { keyframes } from "styled-components";
import { colors, screenSizes } from "../../../../styles/theme";

export const Container = styled.div`
  height: 100%;
  background: ${colors.white};
  padding: 60px 15px;
  display: grid;
  place-items: center;
  @media (min-width: ${screenSizes.L}px) {
    height: 100vh;
  }
`;

export const QuestionGridContainer = styled.div`
  max-width: 840px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  place-items: center;
`;

export const QaGridContainer = styled.div<any>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: ${(props) => props.marginTop};
`;

export const QaSingleDiv = styled.div`
  position: relative;
  padding: 15px 40px 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${colors.gray6};
  margin: 5px 0px;
  cursor: pointer;
  :hover {
    i {
      color: ${colors.emraldGreen2};
    }
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .sixth {
    border-bottom: 1px solid ${colors.gray6};
  }
`;

export const QaDivHeader = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: ${colors.gray};
  line-height: 1.2;
`;

export const QaCircles = styled.i<any>`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 30px;
  height: 30px;
  color: ${(props) =>
    props.show ? `${colors.emraldGreen2}` : `${colors.blue1}`};
  border: 2px solid currentColor;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  border-radius: 50%;
  :before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid currentColor;
    background: currentColor;
    transform-origin: center;
    transition: transform 0.4s ease-in-out -webkit-transform 0.4s ease-in-out;
    width: 1px;
    height: 12px;
    margin-left: -1px;
    margin-top: -6px;
    transform: ${(props) => (props.show ? "rotate(-135deg)" : "none")};
  }
  :after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid currentColor;
    background: currentColor;
    transform-origin: center;
    transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;
    width: 12px;
    height: 1px;
    margin-left: -6px;
    margin-top: -1px;
    transform: ${(props) => (props.show ? "rotate(-135deg)" : "none")};
  }
`;

const appear = keyframes`
  from {
    display: none;
    transform: translateY(-30px);
  }

  to {
    display: flex;
    transform: translateY(0);
  }
`;

export const DropdownContent = styled.p<any>`
  margin: 0;
  display: ${(props) => (props.show ? "flex" : "none")};
  font-size: 18px;
  color: ${colors.lightestGrey};
  line-height: 1.5;
  padding-bottom: 20px;
  transition: transform 0.4s ease-in-out -webkit-transform 0.4s ease-in-out;
  animation: ${appear} 0.5s;
`;

export const SubHeading = styled.h5`
  margin: 0;
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${colors.lightestGrey};
  line-height: 1.4;
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
