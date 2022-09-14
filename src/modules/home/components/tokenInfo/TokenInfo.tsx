import * as Styled from "./style";
import UserIcon from "../../../../assets/icons/user.svg";
import StackIcon from "../../../../assets/icons/stack.svg";
import SettingsIcon from "../../../../assets/icons/settings.svg";
import PlusIcon from "../../../../assets/icons/plus.svg";
import PinIcon from "../../../../assets/icons/pin.svg";
import TicketIcon from "../../../../assets/icons/ticket.svg";
import { Button, Icon } from "../../../../styles/styled";
import { colors } from "../../../../styles/theme";
import { useEffect } from "react";
import Aos from "aos";

export const TokenInfo = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  return (
    <Styled.Container>
      <Styled.TokenInfoGridContainer>
        <Styled.SubHeading>
          Our service is built on Ethereum Blockchain
        </Styled.SubHeading>
        <Styled.MainHeading>Token information</Styled.MainHeading>
        <Styled.TwoGridContainer>
          <Styled.PersonInfoGrid>
            <Styled.SingleDetailContainer data-aos="fade-right">
              <Icon src={UserIcon} alt="user" width="35px" height="35px" />
              <Styled.SingleDetailName>
                Name: Arthur Smith (ART)
              </Styled.SingleDetailName>
            </Styled.SingleDetailContainer>
            <Styled.SingleDetailContainer data-aos="fade-right">
              <Icon src={StackIcon} alt="user" width="35px" height="35px" />
              <Styled.SingleDetailName>
                Platform : Ethereum (ERC55)
              </Styled.SingleDetailName>
            </Styled.SingleDetailContainer>
            <Styled.SingleDetailContainer data-aos="fade-right">
              <Icon src={SettingsIcon} alt="user" width="35px" height="35px" />
              <Styled.SingleDetailName>
                Role : Purchase digital services
              </Styled.SingleDetailName>
            </Styled.SingleDetailContainer>
            <Styled.SingleDetailContainer data-aos="fade-right">
              <Icon src={PlusIcon} alt="user" width="35px" height="35px" />
              <Styled.SingleDetailName>
                Total supply : 100'000'000 tokens
              </Styled.SingleDetailName>
            </Styled.SingleDetailContainer>
            <Styled.SingleDetailContainer data-aos="fade-right">
              <Icon src={PinIcon} alt="user" width="35px" height="35px" />
              <Styled.SingleDetailName>
                ICO supply : 60'000'000 tokens
              </Styled.SingleDetailName>
            </Styled.SingleDetailContainer>
            <Styled.SingleDetailContainer data-aos="fade-right">
              <Icon src={TicketIcon} alt="user" width="35px" height="35px" />
              <Styled.SingleDetailName>
                Token price : 0.25€ / 0.29 USD
              </Styled.SingleDetailName>
            </Styled.SingleDetailContainer>
          </Styled.PersonInfoGrid>
          <Styled.DetailGrid marginTop="30px" data-aos="fade-up">
            <Styled.MainHeading2>
              We truly believe in the "tokenization" of the economy, that is why
              we created a token to use our service.
            </Styled.MainHeading2>
            <Styled.SubHeading2>
              JavaScript is also used in environments that aren’t web-based,
              such as PDF documents, site-specific browsers, and desktop
              widgets. Newer and faster JavaScript virtual machines (VMs) and
              platforms built upon them have also increased the popularity of
              JavaScript for server-side web applications.
            </Styled.SubHeading2>
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
              textAlign="left"
            >
              Buy Tokens
              <Styled.OnButtonDiv>Buy Tokens</Styled.OnButtonDiv>
            </Button>
          </Styled.DetailGrid>
        </Styled.TwoGridContainer>
      </Styled.TokenInfoGridContainer>
    </Styled.Container>
  );
};
