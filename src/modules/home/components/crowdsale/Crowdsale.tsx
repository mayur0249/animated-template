import { Button, Icon } from "../../../../styles/styled";
import { colors } from "../../../../styles/theme";
import DashBoardIcon from "../../../../assets/icons/wallet.jpg";
import * as Styled from "./style";
import AOS from "aos";
import { useEffect } from "react";

export const Crowdsale = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  return (
    <Styled.Container>
      <Styled.CrowdSaleGridContainer>
        <Styled.FreeDownloadDiv data-aos="fade-up">
          <Styled.SubHeading>Crowdsale wallet</Styled.SubHeading>
          <Styled.MainHeading>
            Crowdsale Wallet which Helps on ICO
          </Styled.MainHeading>
          <Styled.Details>
            Despite some naming, syntactic, and standard library similarities,
            JavaScript and Java are otherwise unrelated and have very different
            semantics.
          </Styled.Details>
          <Button
            padding="20px 30px"
            fontSize="16px"
            color={colors.white}
            background={colors.emraldGreen2}
            borderRadius="30px"
            opacity="0.7"
          >
            Free Download
          </Button>
        </Styled.FreeDownloadDiv>
        <Styled.DashBoardDiv>
          <Icon
            src={DashBoardIcon}
            alt="dashboard"
            width="100%"
            height="100%"
          />
        </Styled.DashBoardDiv>
      </Styled.CrowdSaleGridContainer>
    </Styled.Container>
  );
};
