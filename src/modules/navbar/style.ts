import styled, { keyframes } from "styled-components";
import { colors, screenSizes } from "../../styles/theme";

export const NavbarContainer = styled.div<any>`
  /* width: 100%; */
  transition-timing-function: ease-in 0.5s;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (props.activeMenu ? "100vh" : "")};
  background: ${(props) =>
    props.activeMenu
      ? `${colors.white}`
      : "linear-gradient(to right, #010836, #010833, #00082f, #00072c, #000728, #000725, #010623, #010620, #01061d, #01051b, #010518, #010415)"};
  @media (min-width: ${screenSizes.L}px) {
    padding: 40px 50px 0px;
  }
  .menu {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 20px;
    cursor: pointer;
    background: ${(props) =>
      props.activeMenu ? `${colors.white}` : `${colors.darkBlue}`};
  }
  .menu:before,
  .menu:after,
  .menu div {
    background: ${(props) =>
      props.activeMenu ? `${colors.black}` : `${colors.white}`};
    content: "";
    display: block;
    height: 3px;
    /* border-radius: 3px; */
    margin: 4.5px 0;
    transition: 0.5s;
  }
  .menu:before {
    transform: ${(props) =>
      props.activeMenu ? "translateY(8px) rotate(135deg)" : ""};
  }
  .menu:after {
    transform: ${(props) =>
      props.activeMenu ? "translateY(-8px) rotate(-135deg)" : ""};
  }
  .menu div {
    transform: ${(props) => (props.activeMenu ? "scale(0)" : "")};
  }
  .menu {
    @media (min-width: ${screenSizes.L}px) {
      display: none;
    }
  }
`;

export const NavItems = styled.div<any>`
  display: ${(props) => (props.layout ? props.layout : "none")};
  flex-direction: ${(props) => props.flexDirection};
  width: fit-content;
  justify-content: space-between;
  gap: 30px;
  @media (min-width: ${screenSizes.L}px) {
    display: flex;
  }
`;

const appear = keyframes`
  from {
    transform: translateY(20px);
  }

  to {
    transform: translateY(0);
  }
`;

const reverse = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
    visibility: hidden;
  }
`;

export const NavItem = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  font-size: 18px;
  font-weight: 400px;
  line-height: 1.5;
  cursor: pointer;
  a {
    color: ${colors.white};
  }
  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${colors.white};
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
  }
  a:hover:before,
  a:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }
  .dropdownContent {
    position: absolute;
    top: 40px;
    right: 0px;
    left: 0px;
    background: ${colors.gray};
    padding: 15px 45px;
    width: 140px;
    visibility: hidden;
    display: block;
    transition: opacity 0.2s ease-in-out, margin-left 0.2s ease-in-out,
      margin-right 0.2s ease-in-out, padding-top 0.2s ease-in-out,
      visibility 0.2s ease-in-out, top 0.2s ease-in-out;

    opacity: 0;
    & > * {
      margin: 15px 0;
    }
  }
  :hover {
    .dropdownContent {
      visibility: visible;
      opacity: 1;
      z-index: 2;
      top: 30px;
    }
  }
`;

export const ButtonContainer = styled.div<any>`
  width: fit-content;
  display: ${(props) => (props.layout ? props.layout : "none")};
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: ${(props) => props.marginTop};
  @media (min-width: ${screenSizes.L}px) {
    display: flex;
  }
`;

export const NavText = styled.p<any>`
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 400px;
  text-decoration: underline;
  :hover {
    text-decoration: none;
  }
  cursor: pointer;
`;

export const CountryDropdown = styled.div<any>`
  width: 32px;
  height: 32px;
  border: 0.1px solid ${colors.grayBlue};
  background: ${colors.grayBlue};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom-left-radius: ${(props) => (props.active ? "0px" : "none")};
  border-bottom-right-radius: ${(props) => (props.active ? "0px" : "none")};
`;

const appearCountry = keyframes`
  from {
    transform: translateY(-20px);
  }

  to {
    transform: translateY(0);
  }
`;

// const appearCountryReverse = keyframes`
//   from {
//     /* transform: translateY(20px); */
//   }

//   to {
//     transform: translateY(0);
//   }
// `;

export const CountryDropdownContent = styled.div<any>`
  position: absolute;
  top: 32px;
  right: 0px;
  left: 0px;
  height: 90px;
  padding-right: 16px;
  padding-left: 16px;
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background: ${colors.grayBlue};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  animation: ${appearCountry} 0.5s;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 32px;
  right: 0px;
  left: 0px;
  background: ${colors.gray};
  padding: 35px 45px;
  width: 100px;
  height: 100px;
`;

export const DropdownItem = styled.div`
  width: 100%;
  background: ${colors.gray};
  font-size: 16px;
  color: ${colors.white};

  :hover {
    color: ${colors.lightGray};
  }
`;

export const MobileMenuContainer = styled.div<any>`
  position: absolute;
  top: 65px;
  right: 0;
  left: 0;
  bottom: 0;
  /* width: 100%; */
  height: 100%;
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  @media (min-width: ${screenSizes.L}px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  width: 400px;
  height: 400px;
  background: ${colors.white};
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const MobileNavItem = styled.div`
  position: relative;
  width: 200px;
  font-size: 18px;
  color: ${colors.darkGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${colors.emraldGreen};
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
  }
  a:hover:before,
  a:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const appearMob = keyframes`
  from {
    transform: translateY(40px);
  }

  to {
    transform: translateY(0);
  }
`;

export const MobileDropdownContent = styled.div<any>`
  display: ${(props) => props.display};
  flex-direction: column;
  animation: ${appearMob} 0.1s;
  gap: 10px;
`;

export const MobDropDownItem = styled.div`
  font-size: 16px;
  width: 200px;
  color: ${colors.darkGray};
  margin-left: 20px;
`;
