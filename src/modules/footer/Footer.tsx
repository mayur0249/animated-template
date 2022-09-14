import { Icon } from "../../styles/styled";
import * as Styled from "./style";
import LogoIcon from "../../assets/icons/site_logo.png";
import { FbIcon, LinkednIcon, TwitterIcon } from "./components/Icons/Icons";

export const Footer = () => {
  return (
    <Styled.Container>
      <Styled.GridContainer>
        <Icon src={LogoIcon} alt="logo" width="175px" height="42px" />
        <Styled.FlexContainer>
          <Styled.AddressGridContainer>
            <Styled.AddressContent>
              523 Sylvan Ave, 5th Floor Mountain View, CA 94041USA
              <br />
              <a href="tel:+1(234)56789">+1 (234) 56789</a>,
              <a href="tel:+19876543210">+1 987 654 3210</a>
              <br />
              <a href="mailto:supportcenter@crypterium.com">
                supportcenter@crypterium.com
              </a>
            </Styled.AddressContent>
            <Styled.SocialIcons>
              <TwitterIcon />
              <FbIcon />
              <LinkednIcon />
            </Styled.SocialIcons>
          </Styled.AddressGridContainer>
          <Styled.LinkGridContainer>
            <Styled.LinkDivContainer>
              <Styled.SingleLinkDiv>Home</Styled.SingleLinkDiv>
              <Styled.SingleLinkDiv>About us</Styled.SingleLinkDiv>
              <Styled.SingleLinkDiv>Contacts</Styled.SingleLinkDiv>
              <Styled.SingleLinkDiv>News</Styled.SingleLinkDiv>
            </Styled.LinkDivContainer>
            <Styled.LinkDivContainer>
              <Styled.SingleLinkDiv>Events</Styled.SingleLinkDiv>
              <Styled.SingleLinkDiv>Wallet</Styled.SingleLinkDiv>
              <Styled.SingleLinkDiv>FAQ’s</Styled.SingleLinkDiv>
              <Styled.SingleLinkDiv>Support</Styled.SingleLinkDiv>
            </Styled.LinkDivContainer>
            <Styled.LinkDivContainer>
              <Styled.SingleLinkDiv>Blog</Styled.SingleLinkDiv>
              <Styled.SingleLinkDiv>Privacy policy</Styled.SingleLinkDiv>
              <Styled.SingleLinkDiv>Terms & conditionss</Styled.SingleLinkDiv>
              <Styled.SingleLinkDiv>Customer Service</Styled.SingleLinkDiv>
            </Styled.LinkDivContainer>
          </Styled.LinkGridContainer>
        </Styled.FlexContainer>
        <Styled.CopyrightGridContainer>
          <Styled.CopyrightContent>
            © 2018, Crypterium Theme by{" "}
            <a href="#" target="_blank">
              Artureanec
            </a>
          </Styled.CopyrightContent>
          <Styled.CopyrightContent>
            <a href="#">Privacy Policy</a> |<a href="#"> Sitemap</a>
          </Styled.CopyrightContent>
        </Styled.CopyrightGridContainer>
      </Styled.GridContainer>
    </Styled.Container>
  );
};
