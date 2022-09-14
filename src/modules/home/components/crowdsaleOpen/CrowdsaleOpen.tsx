import * as Styled from "./style";
import EthIcon from "../../../../assets/icons/ico_eth.png";
import BtcIcon from "../../../../assets/icons/ico_btc.png";
import { Button, Icon } from "../../../../styles/styled";
import { colors } from "../../../../styles/theme";

export const CrowdsaleOpen = () => {
  return (
    <Styled.Container>
      <Styled.CrowdSaleOpenGridContainer>
        <Styled.MainHeading>Crowdsale open!</Styled.MainHeading>
        <Styled.LoaderContainer marginTop="40px">
          <Styled.LoaderContent>17M USD MAX</Styled.LoaderContent>
          <Styled.PeopleNumber>850K</Styled.PeopleNumber>
          <Styled.PeopleNumber1>2.3M</Styled.PeopleNumber1>
          <Styled.PeopleNumber2>5M</Styled.PeopleNumber2>
          <Styled.PeopleNumber3>10.5M</Styled.PeopleNumber3>
          <Styled.ProgressBar />
          <Styled.VerticalLine />
          <Styled.VerticalLine1 />
          <Styled.VerticalLine2 />
          <Styled.VerticalLine3 />
        </Styled.LoaderContainer>
        <Styled.TokenDivContainer>
          <Styled.TokenInfoDetailContainer>
            <Styled.TokenDetailContainer>
              <Icon src={EthIcon} alt="eth" width="30px" height="30px" />
              <Styled.TokenInnerContainer>
                <Styled.TokenDetail>3,271.62</Styled.TokenDetail>
                <Styled.TokenSubDetail>ETH RECEIVED</Styled.TokenSubDetail>
              </Styled.TokenInnerContainer>
            </Styled.TokenDetailContainer>
            <Styled.TokenDetailContainer>
              <Icon src={BtcIcon} alt="eth" width="30px" height="30px" />
              <Styled.TokenInnerContainer>
                <Styled.TokenDetail>335.73</Styled.TokenDetail>
                <Styled.TokenSubDetail>BTC RECEIVED</Styled.TokenSubDetail>
              </Styled.TokenInnerContainer>
            </Styled.TokenDetailContainer>
            <Styled.TokenDetailContainer>
              <Styled.TokenInnerContainer>
                <Styled.TokenDetail>3471</Styled.TokenDetail>
                <Styled.TokenSubDetail>BACKERS</Styled.TokenSubDetail>
              </Styled.TokenInnerContainer>
            </Styled.TokenDetailContainer>
            <Styled.TokenDetailContainer>
              <Styled.TokenInnerContainer>
                <Styled.TokenDetail>12</Styled.TokenDetail>
                <Styled.TokenSubDetail>DAYS LEFT</Styled.TokenSubDetail>
              </Styled.TokenInnerContainer>
            </Styled.TokenDetailContainer>
          </Styled.TokenInfoDetailContainer>
          <Button
            padding="20px 30px"
            fontSize="16px"
            fontWeigh="500"
            color={colors.black1}
            background="linear-gradient(325deg,#5b467e 0,#3365a7 50%,#47cca6 100%)"
            borderRadius="30px"
            position="relative"
            width="181px"
            hoverColor={colors.white}
          >
            Buy Tokens
            <Styled.OnButtonDiv>Buy Tokens</Styled.OnButtonDiv>
          </Button>
        </Styled.TokenDivContainer>
      </Styled.CrowdSaleOpenGridContainer>
    </Styled.Container>
  );
};
