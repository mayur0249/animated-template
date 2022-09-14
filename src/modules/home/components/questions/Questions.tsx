import { useState } from "react";
import { Button } from "../../../../styles/styled";
import { colors } from "../../../../styles/theme";
import * as Styled from "./style";

export const Questions = () => {
  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const [show3, setShow3] = useState<boolean>(false);
  const [show4, setShow4] = useState<boolean>(false);
  const [show5, setShow5] = useState<boolean>(false);
  const [show6, setShow6] = useState<boolean>(false);

  return (
    <Styled.Container>
      <Styled.QuestionGridContainer>
        <Styled.SubHeading>FAQ</Styled.SubHeading>
        <Styled.MainHeading>Have any questions?</Styled.MainHeading>
        <Styled.QaGridContainer marginTop="40px">
          <Styled.DropdownContainer>
            <Styled.QaSingleDiv>
              <Styled.QaDivHeader>
                Can American citizens take part in the crowdsale?
              </Styled.QaDivHeader>
              <Styled.QaCircles
                onClick={() => setShow1((prev) => !prev)}
                show={show1}
              ></Styled.QaCircles>
            </Styled.QaSingleDiv>
            <Styled.DropdownContent show={show1}>
              JavaScript is also used in environments that aren’t web-based,
              such as PDF documents, site-specific browsers, and desktop
              widgets. Newer and faster JavaScript virtual machines (VMs) and
              platforms built upon them have also increased the popularity of
              JavaScript for server-side web applications. On the client side,
              JavaScript has been traditionally implemented as an interpreted
              language, but more recent browsers per
            </Styled.DropdownContent>
          </Styled.DropdownContainer>
          <Styled.DropdownContainer>
            <Styled.QaSingleDiv>
              <Styled.QaDivHeader>
                Does the crowdsale comply with legal regulations?
              </Styled.QaDivHeader>
              <Styled.QaCircles
                onClick={() => setShow2((prev) => !prev)}
                show={show2}
              ></Styled.QaCircles>
            </Styled.QaSingleDiv>
            <Styled.DropdownContent show={show2}>
              JavaScript is also used in environments that aren’t web-based,
              such as PDF documents, site-specific browsers, and desktop
              widgets. Newer and faster JavaScript virtual machines (VMs) and
              platforms built upon them have also increased the popularity of
              JavaScript for server-side web applications. On the client side,
              JavaScript has been traditionally implemented as an interpreted
              language, but more recent browsers per
            </Styled.DropdownContent>
          </Styled.DropdownContainer>
          <Styled.DropdownContainer>
            <Styled.QaSingleDiv>
              <Styled.QaDivHeader>
                Can I trade SCR at an exchange?
              </Styled.QaDivHeader>
              <Styled.QaCircles
                onClick={() => setShow3((prev) => !prev)}
                show={show3}
              ></Styled.QaCircles>
            </Styled.QaSingleDiv>
            <Styled.DropdownContent show={show3}>
              JavaScript is also used in environments that aren’t web-based,
              such as PDF documents, site-specific browsers, and desktop
              widgets. Newer and faster JavaScript virtual machines (VMs) and
              platforms built upon them have also increased the popularity of
              JavaScript for server-side web applications. On the client side,
              JavaScript has been traditionally implemented as an interpreted
              language, but more recent browsers per
            </Styled.DropdownContent>
          </Styled.DropdownContainer>
          <Styled.DropdownContainer>
            <Styled.QaSingleDiv>
              <Styled.QaDivHeader>
                What is the difference between Scorum Coin tokens and Scorum
                Power tokens?
              </Styled.QaDivHeader>
              <Styled.QaCircles
                onClick={() => setShow4((prev) => !prev)}
                show={show4}
              ></Styled.QaCircles>
            </Styled.QaSingleDiv>
            <Styled.DropdownContent show={show4}>
              JavaScript is also used in environments that aren’t web-based,
              such as PDF documents, site-specific browsers, and desktop
              widgets. Newer and faster JavaScript virtual machines (VMs) and
              platforms built upon them have also increased the popularity of
              JavaScript for server-side web applications. On the client side,
              JavaScript has been traditionally implemented as an interpreted
              language, but more recent browsers per
            </Styled.DropdownContent>
          </Styled.DropdownContainer>
          <Styled.DropdownContainer>
            <Styled.QaSingleDiv>
              <Styled.QaDivHeader>
                Why is Scorum’s economic model sustainable?
              </Styled.QaDivHeader>
              <Styled.QaCircles
                onClick={() => setShow5((prev) => !prev)}
                show={show5}
              ></Styled.QaCircles>
            </Styled.QaSingleDiv>
            <Styled.DropdownContent show={show5}>
              JavaScript is also used in environments that aren’t web-based,
              such as PDF documents, site-specific browsers, and desktop
              widgets. Newer and faster JavaScript virtual machines (VMs) and
              platforms built upon them have also increased the popularity of
              JavaScript for server-side web applications. On the client side,
              JavaScript has been traditionally implemented as an interpreted
              language, but more recent browsers per
            </Styled.DropdownContent>
          </Styled.DropdownContainer>
          <Styled.DropdownContainer>
            <Styled.QaSingleDiv className="sixth">
              <Styled.QaDivHeader>Can I mine SCR?</Styled.QaDivHeader>
              <Styled.QaCircles
                onClick={() => setShow6((prev) => !prev)}
                show={show6}
              ></Styled.QaCircles>
            </Styled.QaSingleDiv>
            <Styled.DropdownContent show={show6}>
              JavaScript is also used in environments that aren’t web-based,
              such as PDF documents, site-specific browsers, and desktop
              widgets. Newer and faster JavaScript virtual machines (VMs) and
              platforms built upon them have also increased the popularity of
              JavaScript for server-side web applications. On the client side,
              JavaScript has been traditionally implemented as an interpreted
              language, but more recent browsers per
            </Styled.DropdownContent>
          </Styled.DropdownContainer>
        </Styled.QaGridContainer>
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
          marginTop="15px"
        >
          Buy Tokens
          <Styled.OnButtonDiv>Show More</Styled.OnButtonDiv>
        </Button>
      </Styled.QuestionGridContainer>
    </Styled.Container>
  );
};
