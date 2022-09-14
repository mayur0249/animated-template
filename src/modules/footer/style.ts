import styled from "styled-components";
import { colors, screenSizes } from "../../styles/theme";

export const Container = styled.div`
  height: 100%;
  background: ${colors.gray8};
  display: grid;
  place-items: center;
  padding: 60px 15px;
  @media (min-width: ${screenSizes.L}px) {
    height: 45vh;
    padding: 40px 15px;
  }
`;

export const GridContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 30px;
  @media (min-width: ${screenSizes.L}px) {
    place-items: start;
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media (min-width: ${screenSizes.L}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const AddressGridContainer = styled.div`
  max-width: 470px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 20px;
  @media (min-width: ${screenSizes.L}px) {
    place-items: start;
  }
`;

export const AddressContent = styled.address`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.4;
  color: ${colors.white};
  text-align: center;
  a {
    text-decoration: none;
    color: ${colors.white};
    transition: color 0.3s ease-in-out;
    :hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${screenSizes.L}px) {
    text-align: left;
  }
`;

export const SocialIcons = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 7px;
  svg {
    cursor: pointer;
    width: 19px;
    height: 19px;
    transition: 0.3s ease-in-out;

    :hover {
      path {
        fill: ${colors.white};
      }
      transform: scale(1.06);
    }
  }
`;

export const LinkGridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  place-items: start;
  grid-gap: 20px;
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const LinkDivContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
`;

export const SingleLinkDiv = styled.p`
  margin: 0;
  font-size: 18px;
  color: ${colors.white};
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  :hover {
    color: ${colors.lightGray};
  }
`;

export const CopyrightGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-items: start / center;
  grid-gap: 30px;
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CopyrightContent = styled.p`
  margin: 0;
  margin-top: 20px;
  font-size: 13px;
  font-weight: 400;
  color: ${colors.gray9};
  text-align: center;
  a {
    text-decoration: underline;
    color: ${colors.gray9};
    :hover {
      text-decoration: none;
    }
  }
  @media (min-width: ${screenSizes.L}px) {
    :nth-child(1) {
      text-align: left;
    }
    :nth-child(2) {
      text-align: right;
    }
  }
`;
