import { Button } from "../../../../styles/styled";
import { colors } from "../../../../styles/theme";
import * as Styled from "./style";

export const Newsletter = () => {
  return (
    <Styled.Container>
      <Styled.GridContainer>
        <Styled.MainHeading>Subscribe Newsletter</Styled.MainHeading>
        <Styled.SubscribeDiv>
          <Styled.InputDiv placeholder="E-mail" />
          <Button
            padding="20px 30px"
            color={colors.white}
            background={colors.emraldGreen2}
            borderRadius="50px"
            opacity="0.8"
          >
            Subscribe
          </Button>
        </Styled.SubscribeDiv>
      </Styled.GridContainer>
    </Styled.Container>
  );
};
