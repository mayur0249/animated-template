import * as Styled from "./style";
import Adv1 from "../../../../assets/icons/1_b.png";
import Adv2 from "../../../../assets/icons/2_b.png";
import Adv3 from "../../../../assets/icons/3_b.png";
import FbIcon from "../../../../assets/icons/fb.svg";
import LinkedIcon from "../../../../assets/icons/linked.svg";
import GoogleIcon from "../../../../assets/icons/gg.svg";
import { Icon } from "../../../../styles/styled";
import { useEffect } from "react";
import Aos from "aos";

export const Advisors = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  return (
    <Styled.Container>
      <Styled.GridContainer>
        <Styled.SubHeading>Foundation</Styled.SubHeading>
        <Styled.MainHeading>Advisors</Styled.MainHeading>
        <Styled.GridCardContainer marginTop="50px">
          <Styled.CardContainer data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon
                src={Adv1}
                alt="advisor1"
                width="230px"
                height="230px"
                borderRadius="50%"
              />
              <Styled.SocialLink
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Styled.SocialIcon
                  src={FbIcon}
                  alt="fb"
                  width="45px"
                  height="45px"
                  borderRadius="50%"
                />
              </Styled.SocialLink>
            </Styled.ImageDiv>
            <Styled.CardHeader>David Drake</Styled.CardHeader>
            <Styled.CardDetails>
              David Drake, through his family office LDJ Capital, has acted as
              GP & LP investors with his partners in fund-of-funds, realty
              funds,
            </Styled.CardDetails>
          </Styled.CardContainer>
          <Styled.CardContainer data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon
                src={Adv2}
                alt="advisor2"
                width="230px"
                height="230px"
                borderRadius="50%"
              />
              <Styled.SocialLink
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Styled.SocialIcon
                  src={LinkedIcon}
                  alt="linkedIn"
                  width="45px"
                  height="45px"
                  borderRadius="50%"
                />
              </Styled.SocialLink>
            </Styled.ImageDiv>
            <Styled.CardHeader>Ann Balock</Styled.CardHeader>
            <Styled.CardDetails>
              Business development, Skolkovo Foundation. Interaction with public
              authorities and building partnerships with technology
            </Styled.CardDetails>
          </Styled.CardContainer>
          <Styled.CardContainer data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon
                src={Adv3}
                alt="advisor3"
                width="230px"
                height="230px"
                borderRadius="50%"
              />
              <Styled.SocialLink
                href="https://myaccount.google.com/profile"
                target="_blank"
                rel="noreferrer"
              >
                <Styled.SocialIcon
                  src={GoogleIcon}
                  alt="google"
                  width="45px"
                  height="45px"
                  borderRadius="50%"
                />
              </Styled.SocialLink>
            </Styled.ImageDiv>
            <Styled.CardHeader>Vladimir Nikitin</Styled.CardHeader>
            <Styled.CardDetails>
              Business development, Skolkovo Foundation. Interaction with public
              authorities and building partnerships with technology
            </Styled.CardDetails>
          </Styled.CardContainer>
        </Styled.GridCardContainer>
      </Styled.GridContainer>
    </Styled.Container>
  );
};
