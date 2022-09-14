import PaymentIcon from "../../../../assets/icons/payment.png";
import EthIcon from "../../../../assets/icons/eth.png";
import BtcIcon from "../../../../assets/icons/btc.png";
import { Button, Icon } from "../../../../styles/styled";
import { colors } from "../../../../styles/theme";
import { PlayIcon } from "../icons/Icons";
import * as Styled from "./style";

export const LandingPage = () => {
  return (
    <>
      <Styled.Container>
        <Styled.LandingDiv>
          <Styled.LandingLeftDiv>
            <Styled.LandingLeftHeading>
              Blockchain Identity Verification
            </Styled.LandingLeftHeading>
            <Styled.LandingLeftSubHeading>
              Service that allows to verify users and to prevent fraud. It is
              based on blockchain technology as a tool for protecting and
              validating personal data of Internet users.
            </Styled.LandingLeftSubHeading>
            <Styled.LandingLeftButtonDiv marginTop="20px">
              <Button
                color={colors.white}
                background={colors.emraldGreen}
                padding="20px 30px"
                borderRadius="30px"
                opacity="0.9"
              >
                Get White Papper
              </Button>
              <Styled.VideoPlayDiv>
                <Styled.PlayDiv className="play">
                  {/* <Icon src={PlayIcon} width="18px" height="18px" /> */}
                  <i></i>
                </Styled.PlayDiv>
                <Styled.VideoPlayText>Video Presentation</Styled.VideoPlayText>
              </Styled.VideoPlayDiv>
            </Styled.LandingLeftButtonDiv>
          </Styled.LandingLeftDiv>
          <Styled.LandingRightDiv>
            <Styled.LandingRightHeading>
              Crypterium ICO ends:
            </Styled.LandingRightHeading>
            <Styled.LandingRightSubHeading>
              Discount 47% from final price
            </Styled.LandingRightSubHeading>
            <Styled.LoaderContainer marginTop="40px">
              <Styled.LoaderContent>7M MAX</Styled.LoaderContent>
              <Styled.PeopleNumber>850K</Styled.PeopleNumber>
              <Styled.ProgressBar />
              <Styled.VerticalLine />
            </Styled.LoaderContainer>
            <Styled.LoaderBelowContent>
              <Styled.LoaderBelowContentStart>
                SOFT CAP
              </Styled.LoaderBelowContentStart>
              <Styled.LoaderBelowContentEnd>
                Total raised: 1 864 866$
              </Styled.LoaderBelowContentEnd>
            </Styled.LoaderBelowContent>
            <Styled.LandingRightDescription>
              Fixed token edition 3.000.000 BITS
            </Styled.LandingRightDescription>
            <Button
              padding="28px 0px"
              color={colors.white}
              background={colors.lightRed}
              borderRadius="30px"
              width="100%"
              fontSize="20px"
              boxShadow={colors.shadowRed}
              hoverBg={colors.lightPink}
            >
              Buy Tokens
            </Button>
            <Icon
              src={PaymentIcon}
              display="block"
              maxWidth="100%"
              height="auto"
            />
          </Styled.LandingRightDiv>
        </Styled.LandingDiv>
        {/* <Styled.CryptoMovingDiv>
          <Styled.SingleCryptoDiv>
            <Icon width="15px" height="15px" src={EthIcon} />
            <Styled.CryptoName>ETH: </Styled.CryptoName>
            <Styled.CryptoValue>€ 1,587.05 </Styled.CryptoValue>
            <Styled.CryptoPriceChange>(3.13 %)</Styled.CryptoPriceChange>
          </Styled.SingleCryptoDiv>
          <Styled.SingleCryptoDiv>
            <Icon width="15px" height="15px" src={EthIcon} />
            <Styled.CryptoName>ETH: </Styled.CryptoName>
            <Styled.CryptoValue>€ 1,587.05 </Styled.CryptoValue>
            <Styled.CryptoPriceChange>(3.13 %)</Styled.CryptoPriceChange>
          </Styled.SingleCryptoDiv>
          <Styled.SingleCryptoDiv>
            <Icon width="15px" height="15px" src={EthIcon} />
            <Styled.CryptoName>ETH: </Styled.CryptoName>
            <Styled.CryptoValue>€ 1,587.05 </Styled.CryptoValue>
            <Styled.CryptoPriceChange>(3.13 %)</Styled.CryptoPriceChange>
          </Styled.SingleCryptoDiv>
          <Styled.SingleCryptoDiv>
            <Icon width="15px" height="15px" src={EthIcon} />
            <Styled.CryptoName>ETH: </Styled.CryptoName>
            <Styled.CryptoValue>€ 1,587.05 </Styled.CryptoValue>
            <Styled.CryptoPriceChange>(3.13 %)</Styled.CryptoPriceChange>
          </Styled.SingleCryptoDiv>
          <Styled.SingleCryptoDiv>
            <Icon width="15px" height="15px" src={EthIcon} />
            <Styled.CryptoName>ETH: </Styled.CryptoName>
            <Styled.CryptoValue>€ 1,587.05 </Styled.CryptoValue>
            <Styled.CryptoPriceChange>(3.13 %)</Styled.CryptoPriceChange>
          </Styled.SingleCryptoDiv>
          <Styled.SingleCryptoDiv>
            <Icon width="15px" height="15px" src={EthIcon} />
            <Styled.CryptoName>ETH: </Styled.CryptoName>
            <Styled.CryptoValue>€ 1,587.05 </Styled.CryptoValue>
            <Styled.CryptoPriceChange>(3.13 %)</Styled.CryptoPriceChange>
          </Styled.SingleCryptoDiv>
          <Styled.SingleCryptoDiv>
            <Icon width="15px" height="15px" src={EthIcon} />
            <Styled.CryptoName>ETH: </Styled.CryptoName>
            <Styled.CryptoValue>€ 1,587.05 </Styled.CryptoValue>
            <Styled.CryptoPriceChange>(3.13 %)</Styled.CryptoPriceChange>
          </Styled.SingleCryptoDiv>
        </Styled.CryptoMovingDiv> */}
      </Styled.Container>
    </>
  );
};
